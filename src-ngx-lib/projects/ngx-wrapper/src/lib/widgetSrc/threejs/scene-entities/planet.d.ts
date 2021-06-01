import * as THREE from 'three';
import { IOrbital } from '../models/IOrbital';
import { TPlanets } from '../utils/getPlanetPosition';
import { AbstractOrbital } from '../abstract-scene/abstract-orbital';
export declare class Planet extends AbstractOrbital implements IOrbital {
    private readonly name;
    private earthCloudMesh;
    constructor(name: TPlanets);
    init(): Promise<THREE.Group>;
    update(_tCenturiesSinceJ2000: number): void;
}
