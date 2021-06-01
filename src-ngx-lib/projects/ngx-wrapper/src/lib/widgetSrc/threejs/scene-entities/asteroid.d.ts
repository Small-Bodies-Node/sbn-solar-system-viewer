import * as THREE from 'three';
import { IOrbital } from '../models/IOrbital';
import { AbstractOrbital } from '../abstract-scene/abstract-orbital';
export declare class Asteroid extends AbstractOrbital implements IOrbital {
    constructor(name: string, radius?: number);
    init(): Promise<THREE.Group>;
    update(_tCenturiesSinceJ2000: number): void;
}
