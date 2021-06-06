import * as THREE from 'three';

import { EOrbitalType } from '../models/EOrbitalType';
import { Orbit } from '../utils/orbit';
import { AbstractToyModel } from '../abstract-scene/abstract-toy-model';

const defaultRadiusMeters = 10000;

export class Asteroid extends AbstractToyModel {
  // ~~~>>>

  orbit: Orbit;

  constructor(name: string, radius = defaultRadiusMeters) {
    super(30000);
    this.orbit = new Orbit(name, EOrbitalType.ASTEROID);
  }

  async init() {
    return new Promise<THREE.Group>(async resolve => {
      this._sceneEntityGroup.add(this.orbit.getProjectedOrbitLine());
      resolve(this._sceneEntityGroup);
    });
  }

  update(_tCenturiesSinceJ2000: number) {
    // const { x, y, z } = this.orbit.getXyzMeters(_tCenturiesSinceJ2000);

    // Toy Model Scale
    this._updateModelScale();

    // Spin planet
    // this._toyModel.rotateY(0.01);
  }
}
