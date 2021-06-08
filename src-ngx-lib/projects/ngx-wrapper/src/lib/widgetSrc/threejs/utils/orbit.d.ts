import * as THREE from 'three';
import { EOrbitalType } from '../models/EOrbitalType';
import { IXYZ } from '../models/IXYZ';
import { SKEphem } from './sk-ephem';
export declare class Orbit {
    private name;
    private orbitalType;
    private skephem?;
    private color?;
    private opacity?;
    private SKprojectedOrbitLine;
    private SKEph?;
    private SKOrbit?;
    constructor(name: string, orbitalType?: EOrbitalType, skephem?: SKEphem | undefined, color?: string | undefined, opacity?: number | undefined);
    loadPlanet: () => void;
    loadAsteroid: () => void;
    getProjectedOrbitLine: () => THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial>;
    getXyzMeters(tCenturiesSinceJ200?: number): IXYZ;
}
