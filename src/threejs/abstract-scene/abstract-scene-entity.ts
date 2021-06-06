import * as THREE from 'three';
import { getOptions } from '../../options';

/**
 * Base class that any entity must extend in order that its threeJs group
 * might get added to the threeJs scene owned by the manager
 */
export abstract class AbstractSceneEntity {
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~>>>

  private static _isAsyncLoad = getOptions().isAsyncLoad;
  protected _isAsyncLoad = () => AbstractSceneEntity._isAsyncLoad;

  protected _sceneEntityGroup: THREE.Group = new THREE.Group();
  public getSceneEntityGroup = () => this._sceneEntityGroup;
}
