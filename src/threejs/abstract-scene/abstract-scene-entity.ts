import * as THREE from 'three';
import { getAllOptions } from '../utils/get-all-options';
import { EPlanetLoadingMode } from '../models/EPlanetLoadingMode';

/**
 * Base class that any entity must extend in order that its threeJs group
 * might get added to the threeJs scene owned by the manager
 */
export abstract class AbstractSceneEntity {
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~>>>

  private static _isAsyncLoad =
    getAllOptions().__sbnViewer__planetLoadingMode ===
    EPlanetLoadingMode.START_ANIMATION_THEN_LOAD_PLANET_ASYNC;
  protected _isAsyncLoad = () => AbstractSceneEntity._isAsyncLoad;

  protected _sceneEntityGroup: THREE.Group = new THREE.Group();
  public getSceneEntityGroup = () => this._sceneEntityGroup;
}
