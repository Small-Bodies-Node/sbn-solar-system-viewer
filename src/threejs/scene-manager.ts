import * as THREE from 'three';

import { AbstractSceneManager } from './abstract-scene/abstract-scene-manager';
import { buttonToggleHelpers } from './html/button-toggle-helpers';
import { buttonToggleToyScale } from './html/button-toggle-toy-scale';
import { Sun } from './scene-entities/sun';
import { Planet } from './scene-entities/planet';
import { StarField } from './scene-entities/star-field';
import { auToMeters } from './utils/conversions';
import { dateToJ2000, jsDateToCenturiesSinceJ2000 } from './utils/j2000';
import { MiscHelpers } from './scene-entities/misc-helpers';
import { SimpleLight } from './scene-entities/simple-light';
import { DirectionalLight } from './scene-entities/directional-light';
import { Asteroid } from './scene-entities/asteroid';
import { PointLight } from './scene-entities/point-light';
import { solarSystemData } from './data/basic-solar-system-data';
import { searchField } from './html/search-field';
import { IZoomable } from './models/IZoomable';
import { updateTraversalFraction } from './utils/update-traversal-fraction';
import { updateCameraPosition } from './utils/update-camera-position';
import { updateCameraViewingAngle } from './utils/update-camera-viewing-angle';
import { AsteroidBelt } from './scene-entities/asteroid-belt';
import julian from 'julian';
import { AbstractToyModel } from './abstract-scene/abstract-toy-model';
import { buttonToggleOrbits } from './html/button-toggle-orbits';
import { IZoomableOrbital } from './models/IZoomableOrbital';

/**
 * Implement a scene for this app with 'real' scene entities
 */
export class SceneManager extends AbstractSceneManager {
  // ~~~>>>

  // Toy-scalable bodies
  private sun = new Sun();
  private planets: Planet[];
  private asteroids: Asteroid[];
  private asteroidBelts: AsteroidBelt[];

  private starField?: StarField;
  private isToyScale = true;
  private isOrbitsVisible = true;
  private tCenturiesSinceJ2000 = jsDateToCenturiesSinceJ2000(new Date());
  private toyScalables: AbstractToyModel[];

  // Zooming logic
  private zoomables: IZoomable[] = [];
  private zoomableOrbitals: IZoomableOrbital[] = [];
  private zoomTarget: IZoomable = this.sun;
  private isZoomingPosition = false;
  private isZoomingAngle = false;
  private zoomTraversalFraction = 0;
  private destinationCameraPosition = new THREE.Vector3();
  private zoomClock = new THREE.Clock(); //Controls movement of camera when touring planets
  private lookDirection = new THREE.Vector3();

  constructor(containerId: string) {
    // --->>>

    super(containerId);

    this._camera.getWorldDirection(this.lookDirection);

    this.planets = [
      new Planet('MERCURY'),
      new Planet('VENUS'),
      new Planet('EARTH'),
      new Planet('MARS'),
      new Planet('CERES'),
      new Planet('JUPITER'),
      new Planet('SATURN'),
      new Planet('URANUS'),
      new Planet('NEPTUNE'),
      new Planet('PLUTO'),
      new Planet('HAUMEA'),
      new Planet('MAKEMAKE'),
      new Planet('ERIS'),
    ];
    this.asteroidBelts = [new AsteroidBelt('MBA')];
    this.asteroids = [new Asteroid('65P')];
    this.starField = new StarField(auToMeters(999));
    this.zoomables = [...this.planets, ...this.asteroids, this.sun];
    this.zoomableOrbitals = [...this.planets, ...this.asteroids];
    this.toyScalables = [
      ...this.planets,
      ...this.asteroids,
      // ...this.asteroidBelts,
      this.sun,
    ];

    this.registerSceneEntities([
      // this.starField,
      // new DirectionalLight(),
      new MiscHelpers(),
      new SimpleLight(0.4),
      new PointLight(5, solarSystemData.SUN.radiusMeters),
      ...this.planets,
      ...this.asteroids,
      ...this.asteroidBelts,
      /** Sun MUST come last due to its sprite-blending settings **/
      this.sun,
    ]);

    // Logic to run before scene initialization
    this._preInitHook = () => {
      const radius = auToMeters(4);
      // const radius = auToMeters(100); // See all planets
      this._initialViewingVector = new THREE.Vector3(0, 0, radius);
    };

    // Logic to run after scene initialization
    this._postInitHook = () => {
      // Add html
      searchField(this._container, this.tryToStartZooming);
      buttonToggleToyScale(this._container, this.toggleIsToyScale);
      buttonToggleHelpers(this._container, this.toggleHelpersVisibility);
      buttonToggleOrbits(this._container, this.toggleIsOrbitsVisible);
      // Misc
      this._controls!.maxDistance = auToMeters(100);
      this.setIsToyScale(true);
      // this.setHelpersVisibility(!true);
      //
      this._camera.position.set(
        // Earth
        // -180595912325.3482,
        // 34587914945.44637,
        // 3906449321.9052143
        // Haumea
        // -4514678652999.103,
        // -996799575287.2986,
        // 1431642047889.7205
        // Over Jupiter's Shoulder
        // 349450170005.93274,
        // 1508896562129.965,
        // 622420704159.6792
        // 65P
        35426284497.8745,
        -725267146538.4939,
        -111665855099.58893
      );
    };

    // Clean up on instance destruction
    this._destroyHook = () => {};
  }

  setIsToyScale = (isToyScale: boolean) => {
    this.isToyScale = !!isToyScale;
    this.toyScalables.forEach(_ => _.setIsZoomToToyScale(this.isToyScale));
  };

  toggleIsToyScale = () => {
    this.isToyScale = !this.isToyScale;
    this.setIsToyScale(this.isToyScale);
  };

  setIsOrbitsVisible = (isOrbitsVisible: boolean) => {
    this.isOrbitsVisible = !!isOrbitsVisible;
    this.zoomableOrbitals.forEach(_ =>
      _.setIsOrbitVisible(this.isOrbitsVisible)
    );
  };

  toggleIsOrbitsVisible = () => {
    this.isOrbitsVisible = !this.isOrbitsVisible;
    this.setIsOrbitsVisible(this.isOrbitsVisible);
  };

  tryToStartZooming = (text: string) => {
    const TEXT = text.toUpperCase();
    const foundTarget = this.zoomables.find(el => el.NAME === TEXT);
    if (foundTarget) {
      this.isZoomingPosition = true;
      this.isZoomingAngle = true;
      this.zoomTarget = foundTarget;
      this.zoomClock = new THREE.Clock(true);
      this._controls.enabled = true;
    }
  };

  tryToStopZooming = () => {
    if (!this.isZoomingAngle && !this.isZoomingPosition) {
      this._controls.target = this.zoomTarget.getPosition();
      this._controls.enabled = true;
    }
  };

  updateCamera = () => {
    // Zooming logic
    if (this.isZoomingPosition || this.isZoomingAngle) {
      this.zoomTraversalFraction = updateTraversalFraction(this.zoomClock);
      if (this.isZoomingPosition) {
        this.isZoomingPosition = updateCameraPosition(
          this._camera,
          this.zoomTarget,
          this.zoomTraversalFraction
        );
      }
      if (this.isZoomingAngle) {
        this.isZoomingAngle = updateCameraViewingAngle(
          this._camera,
          this.zoomTarget,
          this.zoomTraversalFraction
        );
      } else {
        // Keep looking at target even if position is still updating
        const { x, y, z } = this.zoomTarget.getPosition();
        this._camera.lookAt(x, y, z);
      }
      this.tryToStopZooming();
    } else {
      // Orbit controls only update when NOT zooming
      this._controls.update();
    }

    // Debug
    // if (this._clock.elapsedTime < 5) console.log(this._scene);
    if (Math.random() < 0.1 && this._clock.elapsedTime < 50) {
      // console.log(this._camera.position);
      // console.log('>>> ', this._sceneEntities);
    }
  };
}
