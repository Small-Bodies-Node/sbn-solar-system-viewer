import * as THREE from 'three';

import { EOrbitalType } from '../models/EOrbitalType';
import { Orbit } from '../utils/orbit';
import { AbstractToyModel } from '../abstract-scene/abstract-toy-model';
import { IOrbital } from '../models/IOrbital';
import { IZoomable } from '../models/IZoomable';
import { createAsteroidGeometry } from '../utils/create-asteroid-geometry';
import { getTextureFromImageUrl } from '../utils/get-texture-from-image-url';
import { imageBaseUrl } from '../utils/constants';

const defaultRadiusMeters = 10000;

export class Asteroid extends AbstractToyModel implements IZoomable {
  // ~~~>>>

  orbit: Orbit;
  model = new THREE.Group();

  constructor(
    public readonly NAME: string,
    private radius = defaultRadiusMeters
  ) {
    super(30000 * 100);
    this.orbit = new Orbit(NAME, EOrbitalType.ASTEROID);
  }

  async init() {
    return new Promise<THREE.Group>(async resolve => {
      // --->>>

      const url = `${imageBaseUrl}/misc/asteroid-texture-1024.jpg`;

      const geometry = createAsteroidGeometry(this.radius);
      const mesh = new THREE.Mesh(
        geometry.clone(),
        new THREE.MeshPhongMaterial({
          // color: new THREE.Color('red'),
          map: await getTextureFromImageUrl(url),
          shininess: 0,
        })
      );
      this.model.add(mesh);
      this._toyModel = this.model;
      this._sceneEntityGroup.add(this.model);

      this._sceneEntityGroup.add(this.orbit.getProjectedOrbitLine());
      resolve(this._sceneEntityGroup);
    });
  }

  public getPosition = () => {
    const { x, y, z } = this.orbit.getXyzMeters();
    return new THREE.Vector3(x, y, z);
  };

  public getRadius = () => this.radius;

  update() {
    // Update planet position
    const { x, y, z } = this.orbit.getXyzMeters();
    this.model.position.set(x, y, z);

    // Toy Model Scale
    this._updateModelScale();
  }
}
