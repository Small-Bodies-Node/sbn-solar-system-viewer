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
  const { epoch, a, e, i, om, w, ma, q, tp, name } = datum;

  // if (q) console.log('datum', datum);
  // console.log('name', name);

  const skEphem = q
    ? new SKEphem({ epoch, e, i, om, w, q, tp }, 'deg', true)
    : new SKEphem({ epoch, a, e, i, om, w, ma }, 'deg', true);

  const o = new Orbit(
    datum.desig,
    EOrbitalType.ASTEROID,
    skEphem,
    color,
    opacity
  );

  // if (q) console.log('>>>> ', skEphem._attrs);

  return o;
}
