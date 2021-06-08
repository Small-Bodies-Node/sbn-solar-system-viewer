import * as THREE from 'three';
import { AbstractSceneEntity } from './abstract-scene-entity';
/**
 * Base class for space object that can be toggled between
 * 'real' and 'toy' scales
 */
export declare abstract class AbstractToyModel extends AbstractSceneEntity {
    protected _toyScale: number;
    protected _toyModel?: THREE.Object3D;
    protected _realScale: number;
    protected _isZoomToToyScale: boolean;
    constructor(_toyScale: number);
    setIsZoomToToyScale(value: boolean): void;
    getScale(): number;
    protected _setToToyScale(): void;
    protected _updateModelScale(): void;
}
