/**
 * This module is the SSOT for global "static" settings for the app
 * that get set before the threejs scene begins. These govern e.g.
 * the default values of the "dynamic" settings that the user can set
 * and that will then persist within localStorage (at least, that is the eventual goal)
 */

import { ECometAsteroidLoadingMode } from './threejs/models/ECometAsteroidLoadingMode';
import { ECometAsteroidAbundanceRepresentationMode } from './threejs/models/ECometAsteroidAbundanceRepresentationMode';
import { EPlanetLoadingMode } from './threejs/models/EPlanetLoadingMode';

/* export const optionKeys = [
  `__sbnViewer__planetLoadingMode`,
  '__sbnViewer__cometAsteroidLoadingMode',
  '__sbnViewer__defaultAbundanceRepresentationMode',
] as const; */

// export type TOptions = { [key in typeof optionKeys[number]]: any };

export interface IOptions {
  __sbnViewer__planetLoadingMode: EPlanetLoadingMode;
  __sbnViewer__cometAsteroidLoadingMode: ECometAsteroidLoadingMode;
  __sbnViewer__cometAsteroidAbundanceRepresentationMode: ECometAsteroidAbundanceRepresentationMode;
}

export const defaultOptions: IOptions = {
  __sbnViewer__planetLoadingMode:
    EPlanetLoadingMode.WAIT_TILL_LOADED_THEN_START_ANIMATION,
  __sbnViewer__cometAsteroidLoadingMode:
    ECometAsteroidLoadingMode.BEFORE_ANIMATION,
  __sbnViewer__cometAsteroidAbundanceRepresentationMode:
    ECometAsteroidAbundanceRepresentationMode.TOY_REPRESENTATION,
};
