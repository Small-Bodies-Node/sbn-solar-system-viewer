/**
 * This module is the SSOT for global "initial" settings for the app
 * that get set before the threejs scene begins
 */
export declare type TOptions = typeof options;
declare let options: {
    isAsyncLoad: boolean;
};
export declare const getOptions: () => {
    isAsyncLoad: boolean;
};
export declare const setOptions: (newOptions: Partial<typeof options>) => {
    isAsyncLoad: boolean;
};
export {};
