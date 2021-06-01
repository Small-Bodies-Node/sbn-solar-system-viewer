import * as THREE from 'three';
import { ISceneEntity } from '../models/ISceneEntity';
import { AbstractToyMesh } from '../abstract-scene/abstract-toy-mesh';
export declare class Sun extends AbstractToyMesh implements ISceneEntity {
    private readonly name;
    constructor();
    init(): Promise<THREE.Group>;
    update(_tCenturiesSinceJ200: number): void;
}
