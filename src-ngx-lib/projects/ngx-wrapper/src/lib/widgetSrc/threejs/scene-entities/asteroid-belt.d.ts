import * as THREE from 'three';
import { AbstractToyModel } from '../abstract-scene/abstract-toy-model';
import { IZoomable } from '../models/IZoomable';
export declare class AsteroidBelt extends AbstractToyModel implements IZoomable {
    readonly NAME: string;
    private orbits;
    private model;
    private radius;
    constructor(NAME: string);
    init(): Promise<THREE.Group>;
    getPosition: () => THREE.Vector3;
    getRadius: () => number;
    update(_camera?: THREE.Camera): void;
}
