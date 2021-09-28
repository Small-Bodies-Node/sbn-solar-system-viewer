import { TAsteroidBeltType } from '../models/TAsteroidBeltType';
import { IAllMergedAsteroidBeltGeometries } from '../models/IAllMergedAsteroidBeltGeometries';
import { SceneManager } from '../scene-manager';
/**
 * Wraps around web worker to kick off thread to create merged geometries
 * then parse the returned data and return THREE.BufferGeometries
 */
export declare function getAsteroidBeltMergedGeometries(belts: TAsteroidBeltType[], parentSceneManager: SceneManager): Promise<IAllMergedAsteroidBeltGeometries[]>;
