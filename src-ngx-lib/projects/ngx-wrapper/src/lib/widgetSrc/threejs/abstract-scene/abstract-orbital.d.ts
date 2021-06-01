import { EOrbitalType } from '../models/EOrbitalType';
import { Orbit } from '../utils/orbit';
import { AbstractToyMesh } from './abstract-toy-mesh';
/**
 * Base class for orbiting object (planet, asteroid, etc.) with toy-scale presentation
 */
export declare abstract class AbstractOrbital extends AbstractToyMesh {
    protected readonly _name: string;
    protected _orbitalType: EOrbitalType;
    protected _orbit: Orbit;
    constructor(_name: string, _orbitalType: EOrbitalType, radius: number, toyScale: number);
    getOrbit: () => Orbit;
    protected _getOrbitXyz(): {
        x: number;
        y: number;
        z: number;
    };
    protected _updateOrbitalPosition(tCenturiesSinceJ2000: number): void;
}
