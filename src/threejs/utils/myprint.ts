import { getInitDate } from '../..';

/**
 * Wrapper to console with time taken
 */
export const myprint = (...msg: any[]) => {
  console.log(' >>> ', +new Date() - +getInitDate(), ' >>> ', ...msg);
};
