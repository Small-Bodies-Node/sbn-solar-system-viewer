import * as THREE from 'three';

import { EOrbitalType } from '../models/EOrbitalType';
import { Orbit } from '../utils/orbit';
import { AbstractToyModel } from '../abstract-scene/abstract-toy-model';
import { IZoomable } from '../models/IZoomable';
import { createAsteroidGeometry } from '../utils/create-asteroid-geometry';
import { getTextureFromImageUrl } from '../utils/get-texture-from-image-url';
import { imageBaseUrl } from '../utils/constants';
import { SKEphem } from '../utils/sk-ephem';
import { auToMeters } from '../utils/conversions';
import { getPlanetRadiusMeters } from '../utils/get-planet-radius-meters';
import asteroidData from '../data/json/asteroids/asteroids-MBA-h-11.json';
import { IAsteroidDatum } from '../models/IAsteroidDatum';
// import asteroidData from '../data/json/asteroids/asteroids-MBA-h-14.json';

const au = auToMeters(1);

export class AsteroidBelt extends AbstractToyModel implements IZoomable {
  // --->>>

  private orbits: Orbit[] = [];
  private model = new THREE.Group();
  private radius = getPlanetRadiusMeters('CERES') * 500;

  constructor(public readonly NAME: string) {
    super(3000);
    this._toyModel = this.model;
  }

  async init() {
    return new Promise<THREE.Group>(async resolve => {
      // --->>

      const url = `${imageBaseUrl}/misc/asteroid-texture-1024.jpg`;
      const texture = await getTextureFromImageUrl(url).catch(_ => null);
      const meshes = [];

      const data = asteroidData as IAsteroidDatum[];
      const promises = data.map(async (datum, ind) => {
        // --->>

        const orbit = getOrbit(datum, 'red', 0.01);
        this.orbits.push(orbit);

        // const geometry = getSphereGeometry();
        const geometry = createAsteroidGeometry(
          this.radius * (0.1 + 5 * Math.random()),
          0.25 * (1.5 - Math.random())
        );
        const mesh = new THREE.Mesh(
          geometry,
          new THREE.MeshPhongMaterial({
            color: new THREE.Color('grey'),
            map: texture,
            shininess: 0,
            transparent: true,
          })
        );
        const { x, y, z } = orbit.getXyzMeters();
        mesh.position.set(x, y, z);
        meshes.push(mesh);
        this.model.add(mesh);

        // const orbitLine = orbit.getProjectedOrbitLine();
        // this._sceneEntityGroup.add(orbitLine);
      });

      this._sceneEntityGroup.add(this.model);
      resolve(this._sceneEntityGroup);
    });
  }

  public getPosition = () => {
    return new THREE.Vector3();
  };

  public getRadius = () => this.radius;

  update(_camera?: THREE.Camera) {
    // Toy Model Scale
    // this._updateModelScale();

    if (!_camera) return;
    const dist = _camera.position.distanceTo(new THREE.Vector3());
    if (!false)
      this.model.traverse(child => {
        if (child instanceof THREE.Mesh) {
          // --->

          // Scaling size linearly with dist <=> belt visibility ~constant
          // const mu = 1;
          // const s = dist ** mu / au;
          const s = dist / au;
          child.scale.set(s, s, s);

          // Scale opacity to peak when camera is in belt, and then
          // tend toward zero when moving away; takes a bit of tuning
          // in the exponential if you change asteroid size
          const p = 2.8 * au; // 'Peak' distance to belt based on Ceres
          const opacity = 1 / Math.abs((dist - p) / p) ** 1.1;
          child.material.opacity = opacity;
          child.material.needsUpdate = true;
          // if (Math.random() < 0.00001) console.log('dist', dist / au, s, opacity);
        }
      });
  }
}

function getSKEphem(datum: any) {
  const { epoch, a, e, i, om, w, ma } = datum;
  return new SKEphem({ epoch, a, e, i, om, w, ma }, 'deg', true);
}

function getOrbit(datum: IAsteroidDatum, color: string, opacity: number) {
  return new Orbit(
    datum.desig,
    EOrbitalType.ASTEROID,
    getSKEphem(datum),
    color,
    opacity
  );
}
