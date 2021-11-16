import * as THREE from 'three';
import { getAllOptions } from '../utils/get-all-options';

/**
 * Base class that any entity must extend in order that its threeJs group
 * might get added to the threeJs scene owned by the manager
 */
export abstract class AbstractSceneEntity {
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~>>>

  private static _isAsyncLoad = getAllOptions()
    .__sbnViewer__isPlanetsLoadedBeforeAnimationBegins;
  protected _isAsyncLoad = () => AbstractSceneEntity._isAsyncLoad;

  protected _sceneEntityGroup: THREE.Group = new THREE.Group();
  public getSceneEntityGroup = () => this._sceneEntityGroup;
}
