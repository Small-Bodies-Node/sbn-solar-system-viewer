export const planets = [
  'MERCURY',
  'VENUS',
  'EARTH',
  'MARS',
  'CERES',
  'JUPITER',
  'SATURN',
  'URANUS',
  'NEPTUNE',
  'PLUTO',
  'HAUMEA',
] as const;

export type TPlanets = typeof planets[number];
