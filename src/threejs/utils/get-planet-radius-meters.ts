import { planetData } from '../data/basic-planet-data';
import { TPlanets } from '../models/TPlanets';

export function getPlanetRadiusMeters(name: TPlanets): number {
  // --->>>

  return planetData[name].radiusMeters;
}
