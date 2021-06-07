import * as THREE from 'three';

import { AbstractSceneEntity } from './abstract-scene-entity';

/**
 * Base class for space object that can be toggled between
 * 'real' and 'toy' scales
 */
export abstract class AbstractToyModel extends AbstractSceneEntity {
  // ~~~>>>

  // Setup
  protected _toyModel?: THREE.Object3D;
  protected _realScale = 1;
  protected _isZoomToToyScale = false;

  constructor(protected _toyScale: number) {
    super();
  }

  public setIsZoomToToyScale(value: boolean) {
    // Note: once set, an animated transition to the new scale will take place within the update loop
    this._isZoomToToyScale = value;
  }

  public getScale() {
    return this._isZoomToToyScale ? this._toyScale : this._realScale;
  }

  protected _setToToyScale() {
    if (!this._toyModel) return;
    // Update scale instantly (rather than depending on animated transition)
    this._isZoomToToyScale = true;
    const t = this._toyScale; // 't' for 'target'
    this._toyModel.scale.set(t, t, t);
  }

  protected _updateModelScale() {
    if (!this._toyModel) return;
    // Test if planet is already at target scale
    const t = this._isZoomToToyScale ? this._toyScale : this._realScale; // 't' for 'target'
    const { x: sx, y: sy, z: sz } = this._toyModel.scale;
    if (sx === t) return;

    // Update-mesh-scale logic
    const ds = this._toyScale / 100;
    if (sx < t) {
      // Increase deficient scale
      this._toyModel.scale.set(sx + ds, sy + ds, sz + ds);
    }
    if (sx > t) {
      // Decrease excessive scale
      this._toyModel.scale.set(sx - ds, sy - ds, sz - ds);
    }
    if (Math.abs(sx - t) < ds) {
      // Snap scale to target
      this._toyModel.scale.set(t, t, t);
    }
  }
}
