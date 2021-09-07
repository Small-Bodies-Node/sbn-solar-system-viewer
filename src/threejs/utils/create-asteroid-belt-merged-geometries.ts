import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils';

import { TAsteroidBeltType } from '../models/TAsteroidBeltType';
import { IAllMergedAsteroidBeltGeometries } from '../models/IAllMergedAsteroidBeltGeometries';
import { assetsBaseUrl } from './constants';
import { IAsteroidDatum } from '../models/IAsteroidDatum';
import { IRealAndLoggedGeometry } from '../models/IRealAndLoggedGeometry';
import { getPlanetRadiusMeters } from './get-planet-radius-meters';
import { getOrbitFromAsteroidDatum } from './get-orbit-from-asteroid-datum';
import { createAsteroidGeometry } from './create-asteroid-geometry';
import { addLoggedMorphsToRealGeometry } from './add-logged-morphs-to-real-geometry';

const radius = getPlanetRadiusMeters('CERES');

export type TBeltHVal = { [K in TAsteroidBeltType]: string };

/**
 * Function to do the heavy lifting in loading data,
 * computing orbits and creating merged geometries for the asteroid
 * bodies and their tails
 */
export async function createAsteroidBeltMergedGeometries(
  belt: TAsteroidBeltType
): Promise<IAllMergedAsteroidBeltGeometries> {
  // --->>

  // Get raw data from remote json
  const hValDict: TBeltHVal = {
    /*
    MBA: 'h-11',
    NEO1KM: 'h-20',
    NOT_NEO1KM: 'h-20',
    PHA: 'h-999',
    DISTANTOBJECT: 'h-7',
    */
    //
    MBA: 'h-11',
    NEO1KM: 'h-11',
    NOT_NEO1KM: 'h-11',
    PHA: 'h-11',
    DISTANTOBJECT: 'h-11',
    //
  };
  const url = `${assetsBaseUrl}/mpc-data/asteroids/asteroids-${belt}-${hValDict[belt]}.json`;

  const data: IAsteroidDatum[] = await new Promise(resolve => {
    fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(_ => _);
  });

  const asteroidGeometries: IRealAndLoggedGeometry[] = [];
  const tailGeometries: IRealAndLoggedGeometry[] = [];

  // Loop through received data and compute individual geometries
  data.forEach(datum => {
    // --->>

    // Filter on H
    const { H } = datum;
    // if (H <= 0) return;

    // Compute radius for this object
    const r = ((radius * 15) / (H + 1)) * (0.5 + 5 * 0 * Math.random());
    if (!r || r <= 0) console.log('!!!!!!!!!!', datum.name);

    // Create orbit
    const orbit = getOrbitFromAsteroidDatum(datum, 'red', 0.01);
    const position = orbit.getPosition();
    const { x, y, z } = position;

    // Reject failed orbits
    if (!x || !y || !z) {
      // console.log('>>>>', datum.name, x, y, z);
      return;
    }

    // Get tail for asteroid
    // const tailGeometry = orbit.getTail(r * 50000);
    const tailGeometry = orbit.getTail(r * 5000);
    tailGeometries.push(tailGeometry);

    // Create geometry
    const asteroidGeometry = createAsteroidGeometry(
      r * 5000,
      0.25 * (1.5 - Math.random()),
      position
    );
    asteroidGeometries.push(asteroidGeometry);
  });

  // Merge individual 'real' and 'logged' asteroid geometries into a single
  // geometry with the 'real' geometries as the default/base vertices and the
  // 'logged' geometries as the morph targets
  const mergedAsteroidGeometry = BufferGeometryUtils.mergeBufferGeometries(
    asteroidGeometries.map(({ realGeometry }) => realGeometry),
    true
  );
  const mergedLoggedAsteroidGeometry = BufferGeometryUtils.mergeBufferGeometries(
    asteroidGeometries.map(({ loggedGeometry }) => loggedGeometry),
    true
  );
  addLoggedMorphsToRealGeometry(
    mergedAsteroidGeometry,
    mergedLoggedAsteroidGeometry
  );

  // ... and the same with the tails
  const mergedTailsGeometry = BufferGeometryUtils.mergeBufferGeometries(
    tailGeometries.map(({ realGeometry }) => realGeometry),
    true
  );
  const mergedLoggedTailsGeometry = BufferGeometryUtils.mergeBufferGeometries(
    tailGeometries.map(({ loggedGeometry }) => loggedGeometry),
    true
  );
  addLoggedMorphsToRealGeometry(mergedTailsGeometry, mergedLoggedTailsGeometry);

  // Finish
  return {
    belt,
    mergedAsteroidGeometry,
    mergedTailsGeometry,
  };
}
