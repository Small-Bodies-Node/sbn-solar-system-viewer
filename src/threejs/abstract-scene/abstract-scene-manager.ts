import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';
import { ISceneEntity } from '../models/ISceneEntity';
import { asciiError } from '../utils/ascii-error';
import { auToMeters } from '../utils/conversions';
import { getInitDate, initDate, setInitDate } from '../../index';
import { appendLoaderDiv } from '../html/get-loader-div';
import { removeLoaderDiv } from '../html/remove-loader-div';
import { daysPerCentury } from '../data/time-units';

// Initial Camera Params
const ar = 2; // Aspect Ratio
const fov = 60; // Field of View
const near = auToMeters(0.00001); // Near Plane
const far = auToMeters(3000); // Far Plane

/**
 * This abstract class is to be inherited by the SceneManager instance.
 * The idea is to place all the usual/boilerplate code for setting up
 * a threeJs scene and running it here, so that the only place you
 * need to implement the specifics of your scene is in your
 * SceneManager instance.
 *
 * By convention, properties/methods that are not intended/expected to be used
 * outside this class are prefixed with '_'
 *
 */
export abstract class AbstractSceneManager {
  // ~~~>>>

  /* Do NOT init OR re-init _controls till scene is set up or they will be erratic */
  protected _controls!: OrbitControls;
  protected _scene = new THREE.Scene();
  protected _renderer?: THREE.WebGLRenderer;
  protected _canvas = document.createElement('canvas');
  protected _requestAnimationFrameId: undefined | number;
  protected _clock = new THREE.Clock(false);
  protected _initialViewingVector = new THREE.Vector3();
  protected _isSceneReady = false;
  protected _isRendering = false;
  protected _isHelpersShown = false;
  protected _isInit = false;
  protected _container!: HTMLElement;
  protected _fps = 60;
  protected _camera = new THREE.PerspectiveCamera(fov, ar, near, far);
  protected _sceneEntities: ISceneEntity[] = [];
  protected _preInitHook: () => void = () => {};
  protected _postInitHook: () => void = () => {};
  protected _destroyHook: () => void = () => {};
  protected updateCamera: () => void = () => {};

  constructor(protected _containerId: string) {}

  public async init() {
    // ------>>>

    // Init only once
    if (!!this._isInit) return;
    this._isInit = true;

    // Time initialization
    setInitDate(new Date());

    // Enable superclass constructor to adjust settings prior to initialization sequence
    this._preInitHook();

    // Get container and add fitting canvas to it
    this._container = document.getElementById(this._containerId)!;
    if (!this._container) {
      throw new Error('No container found with id: ' + this._containerId);
    }

    this._canvas.style.width = '100%';
    this._canvas.style.height = '100%';
    this._container.append(this._canvas);
    this._container.style.setProperty('position', 'relative');
    this._container.style.setProperty('background-color', 'black');
    appendLoaderDiv(this._container);

    // React to resize events on window
    window.addEventListener('resize', this._updateCameraAspect);

    // Build Renderer
    const DPR: number = window.devicePixelRatio ? window.devicePixelRatio : 1;
    this._renderer = new THREE.WebGLRenderer({
      canvas: this._canvas,
      antialias: true,
      alpha: true,
    });
    this._renderer.setPixelRatio(DPR);
    this._renderer.sortObjects = false; // This prevents pesky rendering-disruption effect
    this._renderer.shadowMap.enabled = true;
    this._renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this._renderer.outputEncoding = THREE.GammaEncoding;

    // Init camera position and orientation
    this._camera.position.copy(this._initialViewingVector);
    this._camera.up = new THREE.Vector3(0, 0, 1); // Vector defining up direction of camera
    this._camera.lookAt(0, 0, 0);

    // Configure orbitControls
    // ! Don't move this code to earlier position or controls will be screwy
    // ! Note sure why; treat as brute fact supervening on inscrutable metaphysical states of affair
    this._controls = new OrbitControls(this._camera, this._renderer.domElement);
    this._controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    this._controls.dampingFactor = 0.25;
    this._controls.target = new THREE.Vector3();

    // Initiate Scene Entities
    if (!this._sceneEntities.length) {
      throw new Error(asciiError('You have no scene entities!'));
    }
    const initiatedSceneEntityGroups = await Promise.all(
      this._sceneEntities.map(async sceneEntity => {
        const initiatedSceneEntityGroup: THREE.Group = await sceneEntity.init();
        if (
          !initiatedSceneEntityGroup ||
          !initiatedSceneEntityGroup.children.length
        )
          throw new Error(
            asciiError(`
            -----------------------------------------------------------------------------
            The scene entity "${sceneEntity.constructor.name}" has empty sceneEntityGroup
            after initialization!!!
            -----------------------------------------------------------------------------
            `)
          );
        return initiatedSceneEntityGroup;
      })
    )
      .then(
        _ =>
          new Promise<THREE.Group[]>(resolve =>
            setTimeout(() => resolve(_), 100)
          )
      )
      .then(_ => _);
    initiatedSceneEntityGroups.forEach(group => this._scene.add(group));

    // Run updater methods
    this.setHelpersVisibility(false);
    this._updateCameraAspect();

    // Begin Animation
    this._startRendering();

    // Enable superclass constructor to adjust settings after to initialization sequence
    this._postInitHook();

    // Remove loader div
    removeLoaderDiv();

    //
    const dt = +new Date() - +getInitDate();
    console.log('Finished initiating', dt);
  }

  protected registerSceneEntities = (sceneEntities: ISceneEntity[]) => {
    sceneEntities.forEach(el => this._sceneEntities.push(el));
  };

  /**
   * This method lets you show/hide the objects within in your scene
   * designated as 'helpers'. It relies on the practice of setting the property `userData.isHelper = true`
   * on any object you want to be classified as a helper
   */
  public setHelpersVisibility = (isHelpersShown: boolean) => {
    this._isHelpersShown = !!isHelpersShown;
    this._scene.traverse(child => {
      return child.userData.isHelper && (child.visible = this._isHelpersShown);
    });
  };

  public toggleHelpersVisibility = () => {
    this._isHelpersShown = !this._isHelpersShown;
    this.setHelpersVisibility(this._isHelpersShown);
  };

  public setFramesPerSecond(newFps: number) {
    if (newFps <= 0 || newFps > 100) return;
    this._fps = newFps;
  }

  private _updateCameraAspect = () => {
    // Not sure where/how, but canvas' style width/height
    // gets altered and needs to be reset to 100%
    this._canvas.style.width = '100%';
    this._canvas.style.height = '100%';
    const width = this._canvas.offsetWidth || 1;
    const height = this._canvas.offsetHeight || 1;
    this._camera.aspect = width / height;
    this._camera.updateProjectionMatrix();
    this._renderer!.setSize(width, height);
  };

  public destroy: () => void = () => {
    window.removeEventListener('resize', this._updateCameraAspect);
    this._stopRendering();
    this._destroyHook();
  };

  private _update() {
    // Loop through scene entities and trigger their update methods
    // If they need 'universal' time, they can access this._clock, etc.
    this._sceneEntities.forEach(el => el.update());

    // Update camera
    this.updateCamera();

    // Finish loop
    if (!this._camera || !this._renderer) throw new Error('Poor Logic');
    if (!!this._requestAnimationFrameId) {
      this._renderer.render(this._scene, this._camera);
    }
  }

  private _render = () => {
    if (!this._isRendering) return;
    setTimeout(() => {
      this._requestAnimationFrameId = requestAnimationFrame(this._render);
      this._update();
    }, 1000 / this._fps);
  };

  private _startRendering = () => {
    console.log('Starting animation...');
    this._isRendering = true;
    this._clock.start();
    this._render();
  };

  private _stopRendering = () => {
    console.log('Stopping animation...');
    this._isRendering = false;
    this._clock.stop();
  };
}
