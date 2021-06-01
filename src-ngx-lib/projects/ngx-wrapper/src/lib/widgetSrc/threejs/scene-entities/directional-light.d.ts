import * as THREE from 'three';
import { AbstractSceneEntity } from '../abstract-scene/abstract-scene-entity';
import { ISceneEntity } from '../models/ISceneEntity';
export declare class DirectionalLight extends AbstractSceneEntity implements ISceneEntity {
    _light?: THREE.DirectionalLight;
    init(): Promise<THREE.Group>;
    update: (_time: number) => void;
    setIsOn(isOn: boolean): void;
}
