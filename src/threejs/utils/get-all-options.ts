import { IOptions, defaultOptions } from '../../options';
import { cleanLocalStorage } from './clean-local-storage';

// Make sure local-storage has no extraneous values
cleanLocalStorage();

/**
 * Get all options from local storage; if a value from optionKeys is not
 * represented then return the default value
 */
export const getAllOptions = (): IOptions => {
  //

  const optionKeys = Object.keys(defaultOptions);

  // Build up options from local storage
  const optionsFromLocalStorage: Partial<IOptions> = {};
  optionKeys.forEach(key => {
    const val = localStorage.getItem(key);

    console.log('key, val', key, val);
    if (!val) return;
    try {
      const parsedVal = JSON.parse(val);
      console.log('key, parsedVal', key, parsedVal);
      optionsFromLocalStorage[(key as any) as keyof IOptions] = parsedVal;
    } catch (err) {
      return;
    }
  });
  console.log('optionsFromLocalStorage', optionsFromLocalStorage);
  return { ...defaultOptions, ...optionsFromLocalStorage };
};
