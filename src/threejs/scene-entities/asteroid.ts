import * as THREE from 'three';

import { EOrbitalType } from '../models/EOrbitalType';
import { Orbit } from '../utils/orbit';
import { AbstractToyModel } from '../abstract-scene/abstract-toy-model';
import { createAsteroidGeometry } from '../utils/create-asteroid-geometry';
import { getTextureFromImageUrl } from '../utils/get-texture-from-image-url';
import { imageBaseUrl } from '../utils/constants';
import { IZoomableOrbital } from '../models/IZoomableOrbital';
import { getLoggedPosition } from '../utils/get-logged-position';

const defaultRadiusMeters = 10000;

export class Asteroid extends AbstractToyModel implements IZoomableOrbital {
  // ~~~>>>

  private model = new THREE.Group();
  private orbit: Orbit;
  private SKprojectedOrbitLine: THREE.Line<
    THREE.BufferGeometry,
    THREE.LineBasicMaterial
  >;

  constructor(
    public readonly NAME: string,
    private radius = defaultRadiusMeters
  ) {
    super(30000 * 100);
    this.orbit = new Orbit(NAME, EOrbitalType.ASTEROID);
    // this.SKprojectedOrbitLine = this.orbit.getProjectedOrbitLine();
    this.SKprojectedOrbitLine = this.orbit.getMorphedOrbitLine();
    this._sceneEntityGroup.add(this.SKprojectedOrbitLine);
  }

  async init() {
    return new Promise<THREE.Group>(async resolve => {
      // --->>>

      const url = `${imageBaseUrl}/misc/asteroid-texture-1024.jpg`;
      // const url = `${imageBaseUrl}/misc/rock-texture-512.png`;

      const geometry = createAsteroidGeometry(this.radius);
      const mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshPhongMaterial({
          // color: new THREE.Color('red'),
          map: await getTextureFromImageUrl(url),
          shininess: 0,
        })
      );
      this.model.add(mesh);
      this._toyGroup.push(this.model);
      this._sceneEntityGroup.add(this.model);

      resolve(this._sceneEntityGroup);
    });
  }

  public getPosition = () => {
    const { x, y, z } = this.orbit.getXyzMeters();
    return new THREE.Vector3(x, y, z);
  };

  public getRadius = () => this.radius;

  public getOrbit = () => this.orbit;

  public setIsOrbitVisible = (val: boolean) => {
    this.SKprojectedOrbitLine.visible = val;
  };

  updateOrbitLine() {
    //
    const u = this.getLogInterpolationParam();
    this.SKprojectedOrbitLine.morphTargetInfluences![0] = u;
  }

  // Gets position of planet in either normal or logged coords
  getDestinationPosition(_tCenturiesSinceJ200 = 0) {
    const u = this.getLogInterpolationParam();
    const position = this.orbit.getPosition(_tCenturiesSinceJ200);
    const logpos = getLoggedPosition(position);
    return position.lerp(logpos, u);
  }

  update() {
    const { x, y, z } = this.getDestinationPosition();
    this.model.position.set(x, y, z);

    this.updateOrbitLine();

    // Toy Model Scale
    this._updateModelScale();
  }
}
