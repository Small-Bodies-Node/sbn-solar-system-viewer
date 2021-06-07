import { solarSystemData } from '../data/basic-solar-system-data';
import { TPlanets } from '../models/TPlanets';

export function getPlanetRadiusMeters(name: TPlanets): number {
  // --->>>

  return solarSystemData[name].radiusMeters;
}
