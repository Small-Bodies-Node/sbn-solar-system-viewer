import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils';

import { TAsteroidBeltType } from '../models/TAsteroidBeltType';
import { IAllMergedAsteroidBeltGeometries } from '../models/IAllMergedAsteroidBeltGeometries';
import { assetsBaseUrl, au } from './constants';
import { IAsteroidDatum } from '../models/IAsteroidDatum';
import { IRealAndLoggedGeometry } from '../models/IRealAndLoggedGeometry';
import { getPlanetRadiusMeters } from './get-planet-radius-meters';
import { getOrbitFromAsteroidDatum } from './get-orbit-from-asteroid-datum';
import { createAsteroidGeometry } from './create-asteroid-geometry';
import { addLoggedMorphsToRealGeometry } from './add-logged-morphs-to-real-geometry';
import { myprint } from './myprint';
import { TCometBeltType, cometBeltTypes } from '../models/TCometBeltType';

const radius = getPlanetRadiusMeters('CERES');

type TCometOrAsteroidBeltType = TAsteroidBeltType | TCometBeltType;

export type TBeltHVal = { [K in TCometOrAsteroidBeltType]: string };

/**
 * Function to do the heavy lifting in loading data,
 * computing orbits and creating merged geometries for the asteroid
 * bodies and their tails
 */
export async function createAsteroidBeltMergedGeometries(
  belt: TCometOrAsteroidBeltType
): Promise<IAllMergedAsteroidBeltGeometries> {
  // --->>

  // Get raw data from remote json
  const hValDict: TBeltHVal = {
    /*     MBA: 'h-11',
    NEO1KM: 'h-20',
    NOT_NEO1KM: 'h-20',
    PHA: 'h-999',
    DISTANTOBJECT: 'h-7', */
    //
    MBA: 'h-11',
    NEO1KM: 'h-17',
    NOT_NEO1KM: 'h-19',
    PHA: 'h-19',
    DISTANTOBJECT: 'h-6',
    // ---
    A: 'h-999',
    // C: 'h-2',
    C: 'h-999',
    P: 'h-999',
    //
    /*
    MBA: 'h-999',
    NEO1KM: 'h-999',
    NOT_NEO1KM: 'h-999',
    PHA: 'h-999',
    DISTANTOBJECT: 'h-999',
    */
    //
  };
  const asteroidOrCometLocation = cometBeltTypes.includes(belt as any)
    ? 'comets/comets'
    : 'asteroids/asteroids';
  const url = `${assetsBaseUrl}/mpc-data/${asteroidOrCometLocation}-${belt}-${hValDict[belt]}.json`;

  const data: IAsteroidDatum[] = await new Promise(resolve => {
    fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(_ => _);
  });

  console.log('BELT LOADED', belt);
  // myprint('BELT LOADED', belt);

  const asteroidGeometries: IRealAndLoggedGeometry[] = [];
  const tailGeometries: IRealAndLoggedGeometry[] = [];

  // Loop through received data and compute individual geometries
  data.forEach(datum => {
    // --->>

    // Filter on H
    const { H } = datum;
    // if (H <= 0) return;

    // Compute radius for this object
    const h = H < 1 ? 1 : H;
    let r = ((radius * 15) / (h + 0)) * (0.5 + 5 * 0 * Math.random()) * 5000;
    // if (r > 10 ** 9) r = 10 ** 9;
    if (datum.name?.toLowerCase() === 'ceres') console.log('ceres', r);
    if (datum.name?.toLowerCase() === 'eris') console.log('eris', r);
    if (!r || r <= 0) console.log('!!!!!!!!!!', datum.name);

    // Create orbit
    const d = new Date();
    const orbit = getOrbitFromAsteroidDatum(datum, 'red', 0.01);
    // console.log(' 0>>> ', +new Date() - +d, ' >>> ');

    const position = orbit.getPosition();
    const { x, y, z } = position;
    // console.log(' 3>>> ', +new Date() - +d, ' >>> ');

    // Reject failed orbits
    if (!x || !y || !z) {
      console.log('FAILED >>>>', datum.name, x, y, z);
      return;
    }

    // Get tail for asteroid
    // const tailGeometry = orbit.getTail(r * 50000);
    const tailGeometry = orbit.getTail(r);
    tailGeometries.push(tailGeometry);
    // console.log(' 4>>> ', +new Date() - +d, ' >>> ');

    // Create geometry
    const asteroidGeometry = createAsteroidGeometry(
      // r * 5000,
      r,
      0.25 * (1.5 - Math.random()),
      position
    );
    asteroidGeometries.push(asteroidGeometry);
    // console.log(' 5>>> ', +new Date() - +d, ' >>> ');
  });

  // Merge individual 'real' and 'logged' asteroid geometries into a single
  // geometry with the 'real' geometries as the default/base vertices and the
  // 'logged' geometries as the morph targets
  console.log('asteroidGeometries', asteroidGeometries);
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
