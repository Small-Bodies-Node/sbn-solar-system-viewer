import { JulianUtils } from 'kepler-utils';
import { isKeplerUtils } from '../data/basic-planet-data';

export function mToAu(meters: number) {
  // Source: https://en.wikipedia.org/wiki/Astronomical_unit
  return meters / 149597870700;
}

export function auToMeters(aus: number) {
  return 149597870700 * aus;
}

export function dateToCenturiesSinceJ2000(date: Date) {
  if (isKeplerUtils) {
    //
    const xxx = date.toLocaleDateString('en-ZA');
    const julianDate = JulianUtils.getJulianDate(xxx);
    const yyy = JulianUtils.getCenturiesSinceJ2000(julianDate);

    console.log('julianDate', xxx, yyy);

    return yyy;
  } else {
    //
    return 0;
  }
}
