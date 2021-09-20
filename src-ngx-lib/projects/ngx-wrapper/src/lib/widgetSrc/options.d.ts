/**
 * This module is the SSOT for global "static" settings for the app
 * that get set before the threejs scene begins. These govern e.g.
 * the default values of the "dynamic" settings that the user can set
 * and that will then persist within localStorage (at least, that is the eventual goal)
 */
import { ECometAsteroidLoadingMode } from './threejs/models/ECometAsteroidLoadingMode';
import { ECometAsteroidAbundanceRepresentationMode } from './threejs/models/ECometAsteroidAbundanceRepresentationMode';
import { EPlanetLoadingMode } from './threejs/models/EPlanetLoadingMode';
export interface IOptions {
    __sbnViewer__planetLoadingMode: EPlanetLoadingMode;
    __sbnViewer__cometAsteroidLoadingMode: ECometAsteroidLoadingMode;
    __sbnViewer__cometAsteroidAbundanceRepresentationMode: ECometAsteroidAbundanceRepresentationMode;
}
export declare const defaultOptions: IOptions;
