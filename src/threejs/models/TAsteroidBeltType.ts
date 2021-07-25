/**
 * Permissible types of asteroid belt
 */

export const asteroidBeltTypes = [
  'MBA',
  'NEO1KM',
  'NOT_NEO1KM',
  'PHA',
  'DISTANTOBJECT',
] as const;

export type TAsteroidBeltType = typeof asteroidBeltTypes[number];
