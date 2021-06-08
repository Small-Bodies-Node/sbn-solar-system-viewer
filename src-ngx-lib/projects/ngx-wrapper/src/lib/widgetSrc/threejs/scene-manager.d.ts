import { AbstractSceneManager } from './abstract-scene/abstract-scene-manager';
/**
 * Implement a scene for this app with 'real' scene entities
 */
export declare class SceneManager extends AbstractSceneManager {
    private sun;
    private planets;
    private asteroids;
    private asteroidBelts;
    private starField?;
    private isToyScale;
    private isOrbitsVisible;
    private tCenturiesSinceJ2000;
    private toyScalables;
    private zoomables;
    private zoomableOrbitals;
    private zoomTarget;
    private isZoomingPosition;
    private isZoomingAngle;
    private zoomTraversalFraction;
    private destinationCameraPosition;
    private zoomClock;
    private lookDirection;
    constructor(containerId: string);
    setIsToyScale: (isToyScale: boolean) => void;
    toggleIsToyScale: () => void;
    setIsOrbitsVisible: (isOrbitsVisible: boolean) => void;
    toggleIsOrbitsVisible: () => void;
    tryToStartZooming: (text: string) => void;
    tryToStopZooming: () => void;
    updateCamera: () => void;
}
