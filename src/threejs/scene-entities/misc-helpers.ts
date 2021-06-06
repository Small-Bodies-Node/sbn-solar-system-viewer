import * as THREE from 'three';

import { AbstractSceneEntity } from '../abstract-scene/abstract-scene-entity';
import { ISceneEntity } from '../models/ISceneEntity';
import { auToMeters } from '../utils/conversions';

export class MiscHelpers extends AbstractSceneEntity implements ISceneEntity {
  async init() {
    return new Promise<THREE.Group>(resolve => {
      const axesHelper = new THREE.AxesHelper(auToMeters(100));
      // Mark this as helper in order to be toggle-able
      axesHelper.userData.isHelper = true;
      this._sceneEntityGroup.add(axesHelper);
      resolve(this._sceneEntityGroup);
    });
  }

  update = (time: number) => {
    this._sceneEntityGroup.position.x += time * 0;
  };
}
