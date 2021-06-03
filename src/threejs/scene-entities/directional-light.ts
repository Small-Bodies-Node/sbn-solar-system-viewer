import * as THREE from 'three';

import { AbstractSceneEntity } from '../abstract-scene/abstract-scene-entity';
import { ISceneEntity } from '../models/ISceneEntity';
import { auToMeters } from '../utils/conversions';

export class DirectionalLight extends AbstractSceneEntity
  implements ISceneEntity {
  // ~~~>>>

  _light?: THREE.DirectionalLight | THREE.SpotLight;

  async init() {
    return new Promise<THREE.Group>(resolve => {
      // Create light
      this._light = new THREE.DirectionalLight(0xffffff, 1);
      const s = auToMeters(4);
      this._light.position.set(s, s, s);
      this._light.lookAt(0, 0, 0);
      this._light.castShadow = true;

      this._sceneEntityGroup.add(this._light);

      const helper = new THREE.SpotLightHelper(this._light.clone(), 5);
      helper.userData.isHelper = true;
      helper.visible = true;
      helper.userData.name = 'my-directional-light-helper';

      this._sceneEntityGroup.add(this._light);
      this._sceneEntityGroup.add(helper);
      // console.log('=============', this._light, this._light.clone(), helper);
      resolve(this._sceneEntityGroup);
    });
  }

  update = (_time: number) => {
    // this._sceneEntityGroup.position.x += time * 0;
    // this._sceneEntityGroup.rotateZ(_time * 0 + 0.001);
  };

  setIsOn(isOn: boolean) {
    this._light!.visible = isOn;
  }
}
