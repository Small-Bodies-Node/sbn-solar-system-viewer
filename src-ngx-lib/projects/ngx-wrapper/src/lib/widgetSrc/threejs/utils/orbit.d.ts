import * as THREE from 'three';
import { EOrbitalType } from '../models/EOrbitalType';
import { IXYZ } from '../models/IXYZ';
export declare class Orbit {
    private name;
    private orbitalType;
    private cachedPositions;
    private projectedOrbitPoints;
    private projectedOrbitMaterial;
    private projectedOrbitLine;
    private SKprojectedOrbitLine;
    private SKEph?;
    private SKOrbit?;
    constructor(name: string, orbitalType?: EOrbitalType);
    loadPlanet: () => void;
    loadAsteroid: () => void;
    calcRevolutionPath(tCenturiesSinceJ200?: number): void;
    getProjectedOrbitLine: () => THREE.Line<THREE.BufferGeometry, THREE.Material | THREE.Material[]>;
    getPlanetXyzMeters(tCenturiesSinceJ200?: number): IXYZ;
    getXyzMeters(tCenturiesSinceJ200?: number): IXYZ;
}
