import * as THREE from 'three';

import { TAsteroidBeltType } from '../models/TAsteroidBeltType';
import { getVersionString } from './get-version-string';
import { myprint } from './myprint';
import { getWorkerURL } from './get-worker-url';
import { IAllMergedAsteroidBeltGeometries } from '../models/IAllMergedAsteroidBeltGeometries';
import { SceneManager } from '../scene-manager';
import { TCometBeltType } from '../models/TCometBeltType';

type TAllMergedAsteroidBeltGeometriesStringified = {
  [key in keyof IAllMergedAsteroidBeltGeometries]: string;
};

/**
 * Wraps around web worker to kick off thread to create merged geometries
 * then parse the returned data and return THREE.BufferGeometries
 */
export async function getAsteroidBeltMergedGeometries(
  belts: (TAsteroidBeltType | TCometBeltType)[],
  parentSceneManager: SceneManager
): Promise<IAllMergedAsteroidBeltGeometries[]> {
  return new Promise(async resolve0 => {
    // --->>

    // Build URL to worker script
    let baseUrl = `http://localhost:3001`;
    try {
      // @ts-ignore: will be truthy if built by rollup
      if (__IS_PRODUCTION__) {
        baseUrl = `https://sbn-solar-system-viewer.s3.amazonaws.com/scripts`;
      }
    } catch (err) {}
    const url = `${baseUrl}/asteroid-belt-worker-${getVersionString()}.js`;
    const worker_url = getWorkerURL(url);

    // Define and kick off asteroid-belt worker
    myprint('Start getting worker');

    interface IXXX {
      belt: TAsteroidBeltType | TCometBeltType;
      data: any;
    }

    const results: IXXX[] = await Promise.all(
      belts.map(belt => {
        return new Promise<IXXX>(resolve => {
          const worker = new Worker(worker_url);
          worker.onmessage = function(e) {
            setTimeout(() => {
              resolve({ belt, data: e.data });
            }, 100);
          };
          worker.postMessage(belt);
        });
      })
    );

    parentSceneManager.updateDisplayedMessage('Loading asteroids belts');
    parentSceneManager.setIsScenePaused(true);

    setTimeout(() => {
      //

      const xxx: IAllMergedAsteroidBeltGeometries[] = results.map(
        ({ belt, data }) => {
          let asteroidBeltGeometriesStringified: TAllMergedAsteroidBeltGeometriesStringified = JSON.parse(
            data
          );
          const loader = new THREE.BufferGeometryLoader();
          const asteroidBeltGeometries: IAllMergedAsteroidBeltGeometries = {
            mergedAsteroidGeometry: loader.parse(
              asteroidBeltGeometriesStringified.mergedAsteroidGeometry
            ),
            mergedTailsGeometry: loader.parse(
              asteroidBeltGeometriesStringified.mergedTailsGeometry
            ),
            belt,
          };
          return asteroidBeltGeometries;
        }
      );

      parentSceneManager.updateDisplayedMessage('Asteroids Loaded');
      parentSceneManager.setIsScenePaused(false);

      resolve0(xxx);
    }, 100);
  });
}
