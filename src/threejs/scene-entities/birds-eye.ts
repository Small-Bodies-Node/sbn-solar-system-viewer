import * as THREE from 'three';

import { AbstractToyModel } from '../abstract-scene/abstract-toy-model';
import { au } from '../utils/constants';
import { IZoomable } from '../models/IZoomable';

const dxy = au * 0.1;

/**
 * This entity doesn't draw anything, it's just an empty object
 * positioned so as to be zoomable from above the sun
 */
export class BirdsEye extends AbstractToyModel implements IZoomable {
  // --->>>

  private token = new THREE.Object3D();
  private position = new THREE.Vector3(dxy, dxy, au * 30);

  constructor(public readonly NAME = 'BIRDSEYE', zInAus = 30) {
    super(1);
    this.position.setZ(zInAus * au);
    const { x, y, z } = this.position;
    this.token.position.set(x, y, z);
    this._sceneEntityGroup.add(this.token);
  }

  async init() {
    return new Promise<THREE.Group>(async resolve => {
      resolve(this._sceneEntityGroup);
    });
  }

  public getPosition = () => {
    return this.token.position;
  };

  getRadius = () => 1;

  update() {}
}
