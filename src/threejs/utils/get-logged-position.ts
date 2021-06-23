import { au } from './constants';

/**
 * Scale a given position to be a distance logged from the center
 * adjusted to leave the position of earth unaffected
 */
export function getLoggedPosition(position: THREE.Vector3) {
  // --->>

  // Get old length in aus
  const oldLengthAus = position.length() / au;

  // Take log and add 1 to keep earth untransformed and venus/mercury to not have negative length
  const newLengthAus = Math.log10(oldLengthAus) + 1;

  // Compute scale factor with which to multiply position
  // to leave Earth unchanged, etc.; au's will cancel.
  const f = newLengthAus / oldLengthAus;

  // Clone, transform and return
  const newPosition = position.clone();
  newPosition.multiplyScalar(f);
  return newPosition;
}
