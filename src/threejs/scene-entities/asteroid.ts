import * as THREE from 'three';

import { IOrbital } from '../models/IOrbital';
import { AbstractOrbital } from '../abstract-scene/abstract-orbital';
import { EOrbitalType } from '../models/EOrbitalType';

const defaultRadiusMeters = 10000;

export class Asteroid extends AbstractOrbital implements IOrbital {
  // ~~~>>>

  constructor(name: string, radius = defaultRadiusMeters) {
    super(name, EOrbitalType.ASTEROID, radius, 30000);
  }

  async init() {
    return new Promise<THREE.Group>(async resolve => {
      this._sceneEntityGroup.add(this._orbit.getProjectedOrbitLine());
      resolve(this._sceneEntityGroup);
    });
  }

  update(_tCenturiesSinceJ2000: number) {
    // ---
    this._updateOrbitalPosition(_tCenturiesSinceJ2000);
    this._updateMeshScale();

    // Spin planet
    this._mesh.rotateY(0.01);
  }
}
