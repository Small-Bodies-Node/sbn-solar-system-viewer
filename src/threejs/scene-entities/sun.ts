import * as THREE from 'three';
// import { SpriteMaterial } from 'three/src/materials/SpriteMaterial';

import { getTexture } from '../utils/getTexture';
import { imageBaseUrl, orbitalParams } from '../data/basic-planet-data';
import { ISceneEntity } from '../models/ISceneEntity';
import { AbstractToyMesh } from '../abstract-scene/abstract-toy-mesh';

/**
 * When a sprite is loaded it is given a size of '1'
 * So it needs to be scaled, in this case, to the size of the Sun
 * Further, the Sun only takes up a fraction of this image, so we need this factor
 * to scale the image further
 */
const imageToSunRatio = 10;
const sunRadiusMeters = orbitalParams.SUN.radiusMeters;
const sunToyScale = sunRadiusMeters * imageToSunRatio * 40;
const sunRealScale = sunRadiusMeters * imageToSunRatio;

export class Sun extends AbstractToyMesh implements ISceneEntity {
  // ~~~>>>

  private readonly name = 'SUN';

  constructor() {
    super('SUN', sunRadiusMeters, {
      toyScale: sunToyScale,
      realScale: sunRealScale,
    });
  }

  async init() {
    return new Promise<THREE.Group>(async resolve => {
      // --->>>

      //  Create sun sprite
      const texture = await getTexture(`${imageBaseUrl}sun.png`);
      const sprite = new THREE.Sprite(
        new THREE.SpriteMaterial({
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          map: texture,
        })
      );
      sprite.updateMatrix();
      sprite.matrixAutoUpdate = true;

      // Hide sun's spherical toy mesh
      this._mesh.visible = false;

      // Overwrite representation of sun with sprite in place of sphere
      // AbstractToyMesh will then handle scaling of sprite
      this._mesh = sprite;

      // Reregister sun but as sprite
      this._sceneEntityGroup.name = this.name;
      this._sceneEntityGroup.add(this._mesh);

      resolve(this._sceneEntityGroup);
    });
  }

  update(_tCenturiesSinceJ200: number) {
    this._updateMeshScale();
  }
}
