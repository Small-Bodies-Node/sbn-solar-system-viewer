import { OrbitalUtils, SolarSystem } from 'kepler-utils';
import { isKeplerUtils, planets } from '../data/basic-planet-data';

import { IXYZ } from '../models/IXYZ';
import { auToMeters } from './conversions';

export type TPlanets = typeof planets[number];

export function getPlanetPosition(
  name: TPlanets,
  tCenturiesSinceJ200: number
): IXYZ {
  // --->>>

  if (isKeplerUtils) {
    const planetPosition = OrbitalUtils.calcOrbitals(
      (SolarSystem as any)[name.toLowerCase()],
      tCenturiesSinceJ200
    ).helioCentricCoords;
    planetPosition.x = auToMeters(planetPosition.x);
    planetPosition.y = auToMeters(planetPosition.y);
    planetPosition.z = auToMeters(planetPosition.z);
    return planetPosition;
  } else {
    //
    return { x: 0, y: 0, z: 0 };
  }
}
