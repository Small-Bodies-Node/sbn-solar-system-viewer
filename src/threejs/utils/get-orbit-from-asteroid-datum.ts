import { IAsteroidDatum } from '../models/IAsteroidDatum';
import { Orbit } from './orbit';
import { EOrbitalType } from '../models/EOrbitalType';
import { SKEphem } from './sk-ephem';

/**
 *
 */
export function getOrbitFromAsteroidDatum(
  datum: IAsteroidDatum,
  color: string,
  opacity: number
) {
  const { epoch, a, e, i, om, w, ma } = datum;
  return new Orbit(
    datum.desig,
    EOrbitalType.ASTEROID,
    new SKEphem({ epoch, a, e, i, om, w, ma }, 'deg', true),
    color,
    opacity
  );
}
