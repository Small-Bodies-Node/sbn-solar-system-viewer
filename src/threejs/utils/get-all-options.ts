import {
  IOptions,
  defaultOptions,
  IOptionsBooleans,
  IOptionsNumbers,
} from '../../options';
import { cleanLocalStorage } from './clean-local-storage';

// Make sure local-storage has no extraneous values
cleanLocalStorage();

/**
 * Get all options from local storage; if a value from optionKeys is not
 * represented then return the default value
 */
export const getAllOptions = (): IOptions => {
  // --->>

  // Build up options from local storage
  const optionsFromLocalStorage: Partial<IOptions> = {};
  Object.keys(defaultOptions).forEach(key => {
    const val = localStorage.getItem(key);
    if (!val) return;
    try {
      const parsedVal = JSON.parse(val);
      optionsFromLocalStorage[(key as any) as keyof IOptions] = parsedVal;
    } catch (err) {
      return;
    }
  });
  return { ...defaultOptions, ...optionsFromLocalStorage };
};

/**
 * Wrapper that just returns the booleans from stored options
 */
export const getAllOptionsBooleans = (): IOptionsBooleans => {
  const {
    __sbnViewer__isBeltAbundanceToyModel,
    __sbnViewer__isBeltLoadedBeforeAnimationBegins,
    __sbnViewer__isPlanetsLoadedBeforeAnimationBegins,
  } = getAllOptions();
  return {
    __sbnViewer__isBeltAbundanceToyModel,
    __sbnViewer__isBeltLoadedBeforeAnimationBegins,
    __sbnViewer__isPlanetsLoadedBeforeAnimationBegins,
  };
};

/**
 * Wrapper that just returns the booleans from stored options
 */
export const getAllOptionsNumbers = (): IOptionsNumbers => {
  const {
    __sbnViewer__beltAbundanceHThreshold,
    __sbnViewer__beltAbundanceMaxObjects,
  } = getAllOptions();
  return {
    __sbnViewer__beltAbundanceHThreshold,
    __sbnViewer__beltAbundanceMaxObjects,
  };
};
