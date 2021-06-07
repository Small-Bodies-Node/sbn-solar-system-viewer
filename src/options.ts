/**
 * This module is the SSOT for global "initial" settings for the app
 * that get set before the threejs scene begins
 */

export type TOptions = typeof options;

let options = {
  isAsyncLoad: true,
};

export const getOptions = () => options;

export const setOptions = (newOptions: Partial<typeof options>) =>
  (options = { ...options, ...newOptions });
