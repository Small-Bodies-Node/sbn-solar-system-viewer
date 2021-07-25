import * as THREE from 'three';

import { AbstractSceneEntity } from '../abstract-scene/abstract-scene-entity';
import { ISceneEntity } from '../models/ISceneEntity';

export class Square extends AbstractSceneEntity implements ISceneEntity {
  // ~~~>>>

  NAME = 'square';

  constructor(private sideLength: number) {
    super();
  }

  async init() {
    return new Promise<THREE.Group>(resolve => {
      this._sceneEntityGroup.add(
        new THREE.Mesh(
          new THREE.BoxGeometry(
            this.sideLength,
            this.sideLength,
            this.sideLength
          ),
          new THREE.MeshPhongMaterial()
        )
      );
      this._sceneEntityGroup.position.z = -10;
      resolve(this._sceneEntityGroup);
    });
  }

  update = (_camera?: THREE.Camera, _time?: number) => {
    if (_time) this._sceneEntityGroup.position.x += _time * 0;
  };
}
