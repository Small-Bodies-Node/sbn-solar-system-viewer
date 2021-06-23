import * as THREE from 'three';

import { AbstractSceneEntity } from './abstract-scene-entity';

/**
 * Time to finish switch from log to normal scales
 */
const timeToCompleteTransition = 2;

/**
 * Base class for space object that can be toggled between
 * 'real' and 'toy' scales
 */
export abstract class AbstractToyModel extends AbstractSceneEntity {
  // ~~~>>>

  // Setup
  protected _toyGroup: THREE.Object3D[] = [];
  protected _realScale = 1;
  protected _isZoomToToyScale = false;

  protected isLogScale = false;
  protected logTransitionClock = new THREE.Clock();

  constructor(protected _toyScale: number) {
    super();
  }

  public setIsZoomToToyScale(value: boolean) {
    this._isZoomToToyScale = value;
  }

  public setToyScale(val: number) {
    this._toyScale = val;
  }

  public getScale() {
    return this._isZoomToToyScale ? this._toyScale : this._realScale;
  }

  protected _setToToyScale() {
    this._isZoomToToyScale = true;
    this._toyGroup.forEach(child => {
      const t = this._toyScale; // 't' for 'target'
      child.scale.set(t, t, t);
    });
  }

  public setIsLogScale(val: boolean) {
    // Update flag
    this.isLogScale = val;
    // Restart clock
    this.logTransitionClock = new THREE.Clock(true);
    this.logTransitionClock.start();
    // Update toyScale for log
    // const nonLogToyScale = getPlanetToyScale(this.NAME);
    const logToyScale = 1000;
    this.setToyScale(this.isLogScale ? logToyScale : 3000);
  }

  public toggleIsLogScale() {
    this.setIsLogScale(!this.isLogScale);
  }

  getLogInterpolationParam() {
    const t =
      this.logTransitionClock.getElapsedTime() / timeToCompleteTransition;
    const v = t < 1 ? t : 1;
    return this.isLogScale ? v : 1 - v;
  }

  protected _updateModelScale() {
    this._toyGroup.forEach(child => {
      // Test if planet is already at target scale; 't' for target
      const t = this._isZoomToToyScale ? this._toyScale : this._realScale;
      const { x: sx, y: sy, z: sz } = child.scale;
      if (sx === t) return;

      // Update-mesh-scale logic
      const ds = this._toyScale / 20;
      if (sx < t) {
        // Increase deficient scale
        child.scale.set(sx + ds, sy + ds, sz + ds);
      }
      if (sx > t) {
        // Decrease excessive scale
        child.scale.set(sx - ds, sy - ds, sz - ds);
      }
      if (Math.abs(sx - t) < ds) {
        // Snap scale to target
        child.scale.set(t, t, t);
      }
    });
  }
}
