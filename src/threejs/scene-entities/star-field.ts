import * as THREE from 'three';
import { AbstractSceneEntity } from '../abstract-scene/abstract-scene-entity';
import { imageBaseUrl } from '../data/basic-planet-data';
import { ISceneEntity } from '../models/ISceneEntity';
import { getTextureFromImageUrl } from '../utils/getTextureFromImageUrl';

export class StarField extends AbstractSceneEntity implements ISceneEntity {
  // ~~~>>>

  readonly name = 'STARFIELD';
  private mesh: THREE.Mesh;
  private material: THREE.MeshPhongMaterial;

  constructor(radius: number) {
    super();

    this.material = new THREE.MeshPhongMaterial({
      side: THREE.BackSide,
      transparent: true,
    });
    this.mesh = new THREE.Mesh(
      new THREE.SphereGeometry(radius, 32, 32),
      this.material
    );
    this.mesh.rotation.x = Math.PI / 2;
    this._sceneEntityGroup.add(this.mesh);
    this._sceneEntityGroup.name = 'STARFIELD';
  }

  async init() {
    return new Promise<THREE.Group>(async resolve => {
      const texture = await getTextureFromImageUrl(
        `${imageBaseUrl}galaxy_starfield.png`,
        'star field image'
      );
      this.material.map = texture;
      // this.material.opacity = 0.3;
      resolve(this._sceneEntityGroup);
    });
  }

  update(_time: number) {}
}
