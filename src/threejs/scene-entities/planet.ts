import * as THREE from 'three';

import { createEarthCloudMesh } from '../utils/createEarthCloudMesh';
import { IOrbital } from '../models/IOrbital';
import { getTextureFromImageUrl } from '../utils/getTextureFromImageUrl';
import { TPlanets } from '../utils/getPlanetPosition';
import { imageBaseUrl } from '../data/basic-planet-data';
import { getPlanetRadiusMeters } from '../utils/getPlanetRadiusMeters';
import { AbstractOrbital } from '../abstract-scene/abstract-orbital';
import { EOrbitalType } from '../models/EOrbitalType';
import { GLTFLoader } from '../utils/GLTFLoader';

const planetsWithBumpMaps: Partial<TPlanets>[] = [
  'MERCURY',
  'VENUS',
  'EARTH',
  'MARS',
  'CERES',
  'PLUTO',
];

const planetsAsLoadableObjects: Partial<TPlanets>[] = ['HAUMEA'];

/**
 * "Cloud Radius Factor": ratio of cloud radius to planet radius
 */
const crf = 1.025;

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

      const name = this._name.toLowerCase();

      if (!planetsAsLoadableObjects.includes(this.name)) {
        // Load planet texture from image
        this._material.map = await getTextureFromImageUrl(
          `${imageBaseUrl}/planets/${name}/${name}-map-1024.jpg`,
          this.name + ' IMAGE'
        );
        // Make planet surface somewhat dull
        this._material.shininess = 2;
      }

      if (planetsWithBumpMaps.includes(this.name)) {
        // Add bump maps to rocky planets
        this._material.bumpMap = await getTextureFromImageUrl(
          `${imageBaseUrl}/planets/${name}/${name}-bump-1024.png`,
          this.name + ' BUMP IMAGE'
        );
        // BumpScale needs to be on order of radius since we deal with such large numbers
        this._material.bumpScale = this._radius * 50;
        if (this._mesh instanceof THREE.Mesh) {
          this._mesh.material = this._material;
        }
      }

      if (this.name === 'EARTH') {
        // Make oceans shiny
        this._material.specularMap = await getTextureFromImageUrl(
          `${imageBaseUrl}/planets/earth/earth-specular-1024.png`,
          'earth specular'
        );
        this._material.shininess = 25;
        // Add clouds
        this._clouds = await createEarthCloudMesh(crf * this._radius);
        if (!!this._clouds) this._sceneEntityGroup.add(this._clouds);
      }

      if (planetsAsLoadableObjects.includes(this.name)) {
        //
        await GLTFLoader(
          `${imageBaseUrl}/planets/${name}/${name}.glb`,
          (obj: THREE.Group) => {
            this._mesh = obj;
            this._mesh.userData.type = 'LOADED_OBJECT';
            this._sceneEntityGroup.add(this._mesh);
          }
        );
        this._mesh.visible = false;
      }

      // Finish
      resolve(this._sceneEntityGroup);
    });
  }

  update(_tCenturiesSinceJ2000: number) {
    // ---
    this._updateOrbitalPosition(_tCenturiesSinceJ2000);
    this._updateMeshScale();

    // Spin planet
    this._mesh.rotateZ(0.0015);
    if (!!this._clouds) this._clouds.rotateZ(0.0012);
    // if (!!this._clouds) this._clouds.rotateY(-0.0002);
  }
}
