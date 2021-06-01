import { Orbit } from '../utils/orbit';
import { ISceneEntity } from './ISceneEntity';
/**
 * This interface is implemented by every object in solar system
 * Only the sun returns null
 */
export interface IOrbital extends ISceneEntity {
    getOrbit: () => Orbit;
    setIsToyScale: (value: boolean) => void;
}
