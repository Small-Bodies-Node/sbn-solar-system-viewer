import * as THREE from 'three';

import { createEarthCloudMesh } from '../utils/createEarthCloudMesh';
import { IOrbital } from '../models/IOrbital';
import { getTexture } from '../utils/getTexture';
import { TPlanets } from '../utils/getPlanetPosition';
import { imageBaseUrl } from '../data/basic-planet-data';
import { getPlanetRadiusMeters } from '../utils/getPlanetRadiusMeters';
import { AbstractOrbital } from '../abstract-scene/abstract-orbital';
import { EOrbitalType } from '../models/EOrbitalType';

export class Planet extends AbstractOrbital implements IOrbital {
  // ~~~>>>

  private earthCloudMesh: THREE.Mesh | undefined;

  constructor(private readonly name: TPlanets) {
    super(
      name,
      EOrbitalType.PLANET,
      getPlanetRadiusMeters(name),
      name === 'PLUTO' ? 10000 : 3000
    );
  }

  async init() {
    return new Promise<THREE.Group>(async resolve => {
      // Load planet texture from image
      const texture = await getTexture(
        `${imageBaseUrl}${this.name.toLowerCase()}${
          this.name === 'EARTH' ? '3' : '_small'
        }.jpg`,
        // `${imageBaseUrl}${this.name.toLowerCase()}.jpg`,
        this._name + ' IMAGE'
      );
      this._material.map = texture;

      //If Earth, then add fancy stuff; see: http://learningthreejs.com/blog/2013/09/16/how-to-make-the-earth-in-webgl/
      if (this._name === 'EARTH') {
        // this.planetMesh.visible = false;
        //Use pixels in image to determine bumpiness on surface
        const bumpTexture = await getTexture(
          // `${imageBaseUrl}earthBump_small.png`
          `${imageBaseUrl}earthbump2.jpg`,
          this._name + ' BUMP IMAGE'
        );
        this._material.bumpMap = bumpTexture;
        this._material.bumpScale = 0.95;

        this._material = new THREE.MeshStandardMaterial({
          // ambient: 0x00aa00,
          color: 0x00aa00,
          bumpMap: bumpTexture,
          bumpScale: 1,
        });

        console.log('######## >>> ', this._material);

        // Use pixels in image to determine reflections on surface
        // this._material.specularMap = await getTexture(
        //   `${imageBaseUrl}earthspecular_small.jpg`,
        //   'earth specular'
        // );
        // this._material.specular = new THREE.Color('grey');
        // this._material.shininess = 5;

        // Clouds
        this.earthCloudMesh = await createEarthCloudMesh(1.035 * this._radius);
        if (!!this.earthCloudMesh) {
          console.log('>>>>');
          this._sceneEntityGroup.add(this.earthCloudMesh);
        }
      }

      //
      this._sceneEntityGroup.add(this._mesh);

      // Rotate planet so images are right way up
      this._mesh.rotation.x = Math.PI / 2;
      if (!!this.earthCloudMesh) this.earthCloudMesh.rotation.x = Math.PI / 2;
      if (!!this._wireframe) this._wireframe.rotation.x = Math.PI / 2;

      // Finish
      resolve(this._sceneEntityGroup);
    });
  }

  update(_tCenturiesSinceJ2000: number) {
    // ---
    this._updateOrbitalPosition(_tCenturiesSinceJ2000);
    this._updateMeshScale();

    // ---
    const { x, y, z } = this._getOrbitXyz();
    if (this.earthCloudMesh) this.earthCloudMesh.position.set(x, y, z);

    // Spin planet
    this._mesh.rotateY(0.001);
    if (!!this.earthCloudMesh) this.earthCloudMesh.rotateY(0.002);
  }
}
