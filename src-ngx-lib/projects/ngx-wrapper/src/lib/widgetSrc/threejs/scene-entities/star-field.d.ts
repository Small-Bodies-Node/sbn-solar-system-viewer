import * as THREE from 'three';
import { AbstractSceneEntity } from '../abstract-scene/abstract-scene-entity';
import { ISceneEntity } from '../models/ISceneEntity';
export declare class StarField extends AbstractSceneEntity implements ISceneEntity {
    readonly name = "STARFIELD";
    private mesh;
    private material;
    constructor(radius: number);
    init(): Promise<THREE.Group>;
    update(_time: number): void;
}
