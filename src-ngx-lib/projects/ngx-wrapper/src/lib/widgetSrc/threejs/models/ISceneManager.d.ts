import { AbstractSceneManager } from '../abstract-scene/abstract-scene-manager';
/**
 * Interface to be implemented by every instance of SceneManager
 */
export interface ISceneManager extends AbstractSceneManager {
    _updateCamera: (time: number) => void;
}
