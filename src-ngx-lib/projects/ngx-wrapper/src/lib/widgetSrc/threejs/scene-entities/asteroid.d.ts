import * as THREE from 'three';
import { Orbit } from '../utils/orbit';
import { AbstractToyModel } from '../abstract-scene/abstract-toy-model';
import { IZoomableOrbital } from '../models/IZoomableOrbital';
export declare class Asteroid extends AbstractToyModel implements IZoomableOrbital {
    readonly NAME: string;
    private radius;
    private model;
    private orbit;
    private SKprojectedOrbitLine;
    constructor(NAME: string, radius?: number);
    init(): Promise<THREE.Group>;
    getPosition: () => THREE.Vector3;
    getRadius: () => number;
    getOrbit: () => Orbit;
    setIsOrbitVisible: (val: boolean) => void;
    updateOrbitLine(): void;
    getDestinationPosition(_tCenturiesSinceJ200?: number): THREE.Vector3;
    update(): void;
}
