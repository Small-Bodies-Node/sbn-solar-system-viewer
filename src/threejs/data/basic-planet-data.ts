export const imageBaseUrl = `https://sbn-solar-system-viewer.s3.amazonaws.com`;

// This is the size of each unit in this solar system
// This choice was made because there is a minimum size you can make a sphere in threeJs
// of 0.00001, and planet radii get below this threshold when you treat 1AU as the unit size
// So, instead of treating each unit rather large, we'll use something close to the smallest
export const earthRadius = 6378000;

export const au = 149597870700;

export const orbitalParams = {
  SUN: {
    radiusMeters: 696342000,
    periodDays: undefined,
  },
  MERCURY: {
    radiusMeters: 2439700,
    periodDays: 87.9691,
  },
  VENUS: {
    radiusMeters: 6051800,
    periodDays: 224.701,
  },
  EARTH: {
    radiusMeters: 6378000,
    periodDays: 365.256,
  },
  MARS: {
    radiusMeters: 3389500,
    periodDays: 686.971,
  },
  CERES: {
    radiusMeters: 470000,
    periodDays: 1683.14570801,
  },
  JUPITER: {
    radiusMeters: 71492000,
    periodDays: 4332.59,
  },
  SATURN: {
    radiusMeters: 60268000,
    periodDays: 10759.22,
  },
  URANUS: {
    radiusMeters: 25362000,
    periodDays: 30688.5,
  },
  NEPTUNE: {
    radiusMeters: 24764000,
    periodDays: 60182,
  },
  PLUTO: {
    radiusMeters: 1188300,
    periodDays: 90560,
  },
  HAUMEA: {
    radiusMeters: 1188300 * 100,
    periodDays: 90560,
  },
  // Moons
  MOON: {
    radiusMeters: 350000,
    periodDays: 29.5,
  },
};

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

export const isKeplerUtils = true;

// Source: https://www.scienceforums.com/topic/360-exactly-how-many-seconds-are-there-in-a-year/
export const secondsPerCentury = 3155692597.474;
export const minutesPerCentury = secondsPerCentury / 60;
export const hoursPerCentury = minutesPerCentury / 60;
export const daysPerCentury = hoursPerCentury / 24;
