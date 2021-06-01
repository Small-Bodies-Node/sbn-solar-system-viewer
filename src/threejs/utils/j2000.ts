// ------------------------------------------------------------- \\
// These functions are basically copy/pasted straight from here:
// https://github.com/typpo/j2000/blob/master/index.js
// ------------------------------------------------------------- \\

import { secondsPerCentury } from '../data/basic-planet-data';

// Last updated: 1 Jan 2017
const LEAP_SEC_SINCE_J2000 = 5;

// Unix time at 12:00:00 TT Jan 1 2000
const UNIX_J2000_TT_EPOCH_SEC = 946727935.816;

export function unixToJ2000(unix_time: number) {
  return unix_time - UNIX_J2000_TT_EPOCH_SEC + LEAP_SEC_SINCE_J2000;
}

export function j2000ToUnix(j2000_time: number) {
  return j2000_time + UNIX_J2000_TT_EPOCH_SEC - LEAP_SEC_SINCE_J2000;
}

export function dateToJ2000(date: Date) {
  return unixToJ2000(date.getTime() / 1000);
}

export function j2000ToDate(j2000: number) {
  return new Date(j2000ToUnix(j2000) * 1000);
}

// ------------------------------------------------------------- \\
// ------------------------------------------------------------- \\
// ------------------------------------------------------------- \\

export function jsDateToCenturiesSinceJ2000(date: Date) {
  // --------------------------------------->>>
  const J2000Secs = dateToJ2000(date);
  const tCenturiesSinceJ2000 = J2000Secs / secondsPerCentury;
  return tCenturiesSinceJ2000;
}
