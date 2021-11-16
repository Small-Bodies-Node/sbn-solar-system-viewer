import { IOptions } from '../../options';

/**
 * Provide dict of key-value pairs to set in local storage
 */
export const setOptions = (newOptions: Partial<IOptions>) => {
  Object.keys(newOptions).forEach(key => {
    // console.log('Key Value:', key, newOptions[(key as any) as keyof IOptions]);
    localStorage.setItem(
      key,
      JSON.stringify(newOptions[(key as any) as keyof IOptions])
    );
  });
};
