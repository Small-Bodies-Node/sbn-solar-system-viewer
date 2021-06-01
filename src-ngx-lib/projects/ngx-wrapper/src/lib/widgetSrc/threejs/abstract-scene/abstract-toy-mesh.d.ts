import * as THREE from 'three';
import { AbstractSceneEntity } from './abstract-scene-entity';
interface IOptions {
    toyScale: number;
    realScale: number;
    sphereSegments: number;
}
/**
 * Base class for orbiting object (planet, asteroid, etc.)
 */
export declare abstract class AbstractToyMesh extends AbstractSceneEntity {
    protected readonly _name: string;
    protected readonly _radius: number;
    protected _geometry: THREE.SphereGeometry;
    protected _material: THREE.MeshPhongMaterial | THREE.MeshStandardMaterial;
    protected _mesh: THREE.Mesh | THREE.Sprite;
    protected _wireframe: THREE.LineSegments;
    protected _isToyScale: boolean;
    protected _toyScale: number;
    protected _realScale: number;
    constructor(_name: string, _radius: number, options: Partial<IOptions>);
    setIsToyScale(value: boolean): void;
    protected _setToToyScale(): void;
    protected _updateMeshScale(): void;
    protected _updateToyScale(_time: number): void;
}
export {};
