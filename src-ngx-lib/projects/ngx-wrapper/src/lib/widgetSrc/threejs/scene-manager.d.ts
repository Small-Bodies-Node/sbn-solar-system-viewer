import { AbstractSceneManager } from './abstract-scene/abstract-scene-manager';
import { ISceneManager } from './models/ISceneManager';
/**
 * Implement a scene for this app with 'real' scene entities
 */
export declare class SceneManager extends AbstractSceneManager implements ISceneManager {
    private starField?;
    private sun?;
    private planets?;
    private asteroids?;
    private isToyScale;
    private tCenturiesSinceJ2000;
    constructor(containerId: string);
    toggleIsToyScale: () => void;
    setIsToyScale: (isToyScale: boolean) => void;
    _updateCamera: (_time: number) => void;
}
