import * as THREE from 'three';
import { AbstractSceneEntity } from '../abstract-scene/abstract-scene-entity';
import { ISceneEntity } from '../models/ISceneEntity';
export declare class MiscHelpers extends AbstractSceneEntity implements ISceneEntity {
    init(): Promise<THREE.Group>;
    update: (time: number) => void;
}
