import * as THREE from 'three';
import { AbstractSceneEntity } from './abstract-scene-entity';

interface IOptions {
  toyScale: number;
  realScale: number;
  sphereSegments: number;
}

/**
 * Base class for orbiting object (planet, asteroid, etc.)
 */
export abstract class AbstractToyMesh extends AbstractSceneEntity {
  // ~~~>>>

  // Setup
  protected _geometry: THREE.SphereGeometry;
  protected _material: THREE.MeshPhongMaterial | THREE.MeshStandardMaterial;
  protected _mesh: THREE.Mesh | THREE.Sprite;
  protected _wireframe: THREE.LineSegments;
  protected _isToyScale = false;
  protected _toyScale: number;
  protected _realScale: number;

  constructor(
    protected readonly _name: string,
    protected readonly _radius: number,
    options: Partial<IOptions>
  ) {
    super();

    const { sphereSegments, toyScale, realScale } = {
      sphereSegments: 32,
      toyScale: 3000,
      realScale: 1,
      ...options,
    };
    this._realScale = realScale;
    this._toyScale = toyScale;

    // Default geometry and appearance
    this._geometry = new THREE.SphereGeometry(
      this._radius,
      sphereSegments,
      sphereSegments
    );

    this._wireframe = new THREE.LineSegments(
      new THREE.EdgesGeometry(this._geometry),
      new THREE.LineBasicMaterial()
    );
    this._wireframe.userData.isHelper = true;
    this._material = new THREE.MeshPhongMaterial();
    // this._material = new THREE.MeshStandardMaterial();

    this._mesh = new THREE.Mesh(this._geometry, this._material);
    this._mesh.receiveShadow = true;
    this._mesh.castShadow = true;
    this._mesh.name = this._name;
    //
    this._sceneEntityGroup.name = this._name;
    // this._sceneEntityGroup.add(this._mesh);
    this._sceneEntityGroup.add(this._wireframe);
  }

  public setIsToyScale(value: boolean) {
    // Note: once set, an animated transition to the new scale will take place within the update loop
    this._isToyScale = value;
  }

  protected _setToToyScale() {
    // Update scale instantly (rather than depending on animated transition)
    this._isToyScale = true;
    const t = this._toyScale; // 't' for 'target'
    if (this._mesh) this._mesh.scale.set(t, t, t);
    if (!!this._wireframe) this._wireframe.scale.set(t, t, t);
  }

  protected _updateMeshScale() {
    // Test if planet is already at target scale
    const t = this._isToyScale ? this._toyScale : this._realScale; // 't' for 'target'
    const { x: sx, y: sy, z: sz } = this._mesh.scale;
    if (sx === t) return;

    // Update-mesh-scale logic
    const ds = this._toyScale / 50;
    if (sx < t) {
      // Increase deficient scale
      this._mesh.scale.set(sx + ds, sy + ds, sz + ds);
      if (!!this._wireframe)
        this._wireframe.scale.set(sx + ds, sy + ds, sz + ds);
    }
    if (sx > t) {
      // Decrease excessive scale
      this._mesh.scale.set(sx - ds, sy - ds, sz - ds);
      if (!!this._wireframe)
        this._wireframe.scale.set(sx - ds, sy - ds, sz - ds);
    }
    if (Math.abs(sx - t) < ds) {
      // Snap scale to target
      this._mesh.scale.set(t, t, t);
      if (!!this._wireframe) this._wireframe.scale.set(t, t, t);
    }
  }

  protected _updateToyScale(_time: number) {
    // Check if planet needs to be resized
    this._updateMeshScale();
  }
}
