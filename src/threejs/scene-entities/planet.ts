import * as THREE from 'three';

import { createEarthCloudMesh } from '../utils/createEarthCloudMesh';
import { IOrbital } from '../models/IOrbital';
import { getTexture } from '../utils/getTexture';
import { TPlanets } from '../utils/getPlanetPosition';
import { imageBaseUrl } from '../data/basic-planet-data';
import { getPlanetRadiusMeters } from '../utils/getPlanetRadiusMeters';
import { AbstractOrbital } from '../abstract-scene/abstract-orbital';
import { EOrbitalType } from '../models/EOrbitalType';

const planetsWithBumpMaps: Partial<TPlanets>[] = [
  'MERCURY',
  'VENUS',
  'EARTH',
  'MARS',
  'CERES',
  'PLUTO',
];

const planetsAsObjects: Partial<TPlanets>[] = [];

/**
 * "Cloud Radius Factor": ratio of cloud radius to planet radius
 */
const crf = 1.05;

const getPlanetToyScale = (name: TPlanets) => {
  if (name === 'PLUTO') return 10000;
  if (name === 'CERES') return 10000;
  return 3000;
};

export class Planet extends AbstractOrbital implements IOrbital {
  // ~~~>>>

  constructor(private readonly name: TPlanets) {
    super(
      name,
      EOrbitalType.PLANET,
      getPlanetRadiusMeters(name),
      getPlanetToyScale(name)
    );
  }

  async init() {
    return new Promise<THREE.Group>(async resolve => {
      // --->>>

      // Load planet texture from image
      const name = this.name.toLowerCase();
      this._material.map = await getTexture(
        `${imageBaseUrl}/planets/${name}/${name}-map-1024.jpg`,
        this.name + ' IMAGE'
      );

      if (planetsWithBumpMaps.includes(this.name)) {
        // Add bump maps to rocky planets
        this._material.bumpMap = await getTexture(
          `${imageBaseUrl}/planets/${name}/${name}-bump-1024.png`,
          this.name + ' BUMP IMAGE'
        );
        // BumpScale needs to be on order of radius since we deal with such large numbers
        this._material.bumpScale = this._radius * 50;
        if (this._mesh instanceof THREE.Mesh) {
          this._mesh.material = this._material;
        }
        this._sceneEntityGroup.add(this._mesh);
      }

      if (this.name === 'EARTH') {
        // Make oceans shiny
        this._material.specularMap = await getTexture(
          `${imageBaseUrl}/planets/earth/earth-specular-1024.png`,
          'earth specular'
        );
        this._material.shininess = 25;
        // Add clouds
        this._clouds = await createEarthCloudMesh(crf * this._radius);
      }

      if (!false && this.name === 'VENUS') {
        // Add clouds
        this._clouds = new THREE.Mesh(
          new THREE.SphereGeometry(crf * this._radius, 32, 32),
          new THREE.MeshPhongMaterial({
            map: await getTexture(
              `${imageBaseUrl}/planets/venus/venus-clouds-1024.jpg`,
              this.name + ' IMAGE'
            ),
            opacity: 0.6,
            transparent: true,
          })
        );
      }

      if (planetsAsObjects.includes(this.name)) {
        //
        // const obj =
      }

      // Rotate planet so images are right way up
      this._mesh.rotation.x = Math.PI / 2;
      this._wires.rotation.x = Math.PI / 2;
      if (!!this._clouds) this._clouds.rotation.x = Math.PI / 2;

      // Finish
      if (!!this._clouds) this._sceneEntityGroup.add(this._clouds);
      resolve(this._sceneEntityGroup);
    });
  }

  update(_tCenturiesSinceJ2000: number) {
    // ---
    this._updateOrbitalPosition(_tCenturiesSinceJ2000);
    this._updateMeshScale();

    // Spin planet
    this._mesh.rotateY(0.0015);
    if (!!this._clouds) this._clouds.rotateY(0.0012);
    if (!!this._clouds) this._clouds.rotateZ(-0.0002);
  }
}
