import { TOptions } from './options';
export declare let initDate: Date;
export declare const setInitDate: (date: Date) => Date;
export declare const getInitDate: () => Date;
/**
 * Create threeJs canvas and inject into container
 */
export declare function init(containerId?: string, options?: TOptions): void;
/**
 * Destroy
 */
export declare function destroy(): void;
/**
 * React-component wrapper
 */
export { SbnSolarSystemViewer } from './react-component';
