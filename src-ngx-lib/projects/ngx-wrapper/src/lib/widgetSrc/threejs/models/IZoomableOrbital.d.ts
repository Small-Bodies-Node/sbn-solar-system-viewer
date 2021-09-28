import { Orbit } from '../utils/orbit';
import { IZoomable } from './IZoomable';
/**
 *
 */
export interface IZoomableOrbital extends IZoomable {
    getOrbit: () => Orbit;
    setIsOrbitVisible: (val: boolean) => void;
}
