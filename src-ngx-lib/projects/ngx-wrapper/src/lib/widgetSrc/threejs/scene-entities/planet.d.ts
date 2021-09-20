import * as THREE from 'three';
import { TPlanets } from '../models/TPlanets';
import { AbstractToyModel } from '../abstract-scene/abstract-toy-model';
import { Orbit } from '../utils/orbit';
import { IZoomableOrbital } from '../models/IZoomableOrbital';
export declare class Planet extends AbstractToyModel implements IZoomableOrbital {
    readonly NAME: TPlanets;
    private helper;
    private model;
    private clouds?;
    private orbit;
    private SKprojectedOrbitLine;
    private radius;
    constructor(NAME: TPlanets);
    init(): Promise<THREE.Group>;
    loadPlanetAsObject: () => Promise<void>;
    loadPlanetAsTexturedSphere: () => Promise<void>;
    getPosition: () => THREE.Vector3;
    getRadius: () => number;
    getOrbit: () => Orbit;
    setIsOrbitVisible: (val: boolean) => void;
    getDestinationPosition(_tCenturiesSinceJ200?: number): THREE.Vector3;
    updateOrbitLine(): void;
    update(): void;
}
