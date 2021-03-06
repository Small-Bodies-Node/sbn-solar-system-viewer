import * as THREE from 'three';

import { AbstractSceneEntity } from '../abstract-scene/abstract-scene-entity';
import { ISceneEntity } from '../models/ISceneEntity';

export class SimpleLight extends AbstractSceneEntity implements ISceneEntity {
  // ~~~>>>

  public readonly NAME = 'Simple Light';
  private _light?: THREE.AmbientLight;

  constructor(private _defaultIntensity = 0.3) {
    super();
  }

  async init() {
    return new Promise<THREE.Group>(resolve => {
      this._light = new THREE.AmbientLight(0x333333, this._defaultIntensity);
      this._light.userData.isAmbientLight = true;
      this._sceneEntityGroup.add(this._light);
      resolve(this._sceneEntityGroup);
    });
  }

  setPower = (intensity?: number) => {
    const newIntensity = intensity || this._defaultIntensity;
    this._light!.intensity = newIntensity;
  };

  setIsOn(isOn: boolean) {
    this._light!.visible = isOn;
  }

  update = () => {};
}
