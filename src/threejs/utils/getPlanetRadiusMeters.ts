import { orbitalParams } from '../data/basic-planet-data';
import { TPlanets } from './getPlanetPosition';

export function getPlanetRadiusMeters(name: TPlanets): number {
  // --->>>

  return orbitalParams[name].radiusMeters;
}
