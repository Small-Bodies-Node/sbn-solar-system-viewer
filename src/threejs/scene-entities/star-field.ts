import * as THREE from 'three';

import { getInitDate } from '../..';
import { AbstractSceneEntity } from '../abstract-scene/abstract-scene-entity';
import { ISceneEntity } from '../models/ISceneEntity';
import { assetsBaseUrl } from '../utils/constants';
import { getTextureFromImageUrl } from '../utils/get-texture-from-image-url';
import { invertTextureColor } from '../utils/invert-texture-color';

export class StarField extends AbstractSceneEntity implements ISceneEntity {
  // --->>>

  public readonly NAME = 'STARFIELD';
  private mesh: THREE.Mesh<THREE.SphereGeometry, THREE.MeshPhongMaterial>;
  private material: THREE.MeshPhongMaterial;
  private texture: THREE.Texture | null = null;

  constructor(radius: number) {
    super();

    this.material = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide,
      transparent: true,
      color: 'black',
      // opacity: 0,
      opacity: 1,
      shininess: 0,
    });

    this.mesh = new THREE.Mesh(
      new THREE.SphereGeometry(radius, 32, 32),
      this.material
    );

    this.mesh.rotation.y = Math.PI / 2;
    this._sceneEntityGroup.name = 'STARFIELD';
  }

  async init() {
    return new Promise<THREE.Group>(async resolve => {
      // --->>>

      // const url = `${assetsBaseUrl}/stars/galaxy_starfield6.png`;
      const url = `${assetsBaseUrl}/stars/galaxy-starfield-4096.jpg`;

      if (this._isAsyncLoad()) {
        getTextureFromImageUrl(url, 'star-field').then(texture => {
          this.texture = texture;
          texture.encoding = THREE.GammaEncoding;
          this.material.map = texture;
          // this.material.color = new THREE.Color();
          this.material.needsUpdate = true;
        });
      } else {
        this.texture = await getTextureFromImageUrl(url, 'star-field');
        this.material.map = this.texture;
        this.material.color = new THREE.Color();
        this.material.needsUpdate = true;
      }

      this._sceneEntityGroup.add(this.mesh);

      console.log('Starfield resolved', +new Date() - +getInitDate());
      resolve(this._sceneEntityGroup);
    });
  }

  invertColor = () => {
    if (!this.texture) return;
    this.texture = invertTextureColor(this.texture);
    this.material.map = this.texture;
    this.material.needsUpdate = true;
  };

  update() {}
}
