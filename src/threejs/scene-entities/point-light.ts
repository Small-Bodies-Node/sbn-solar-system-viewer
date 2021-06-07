import * as THREE from 'three';

import { AbstractSceneEntity } from '../abstract-scene/abstract-scene-entity';
import { ISceneEntity } from '../models/ISceneEntity';

export class PointLight extends AbstractSceneEntity implements ISceneEntity {
  // ~~~>>>

  public readonly NAME = 'Point Light';
  private _light?: THREE.PointLight;

  constructor(private _defaultIntensity = 0.3, private _radius = 1) {
    super();
  }

  async init() {
    return new Promise<THREE.Group>(resolve => {
      this._light = new THREE.PointLight(0x333333, this._defaultIntensity);
      const helper = new THREE.PointLightHelper(
        this._light,
        this._radius,
        new THREE.Color('red')
      );
      helper.userData.isHelper = true;
      this._sceneEntityGroup.add(this._light);
      this._sceneEntityGroup.add(helper);
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
