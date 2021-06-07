import * as THREE from 'three';

export const updateTraversalFraction = (clock: THREE.Clock) => {
  const searchTimeElapsed = clock.getElapsedTime();
  let fraction: number = Math.pow(searchTimeElapsed, 6.0) / 1000;
  if (fraction < 0.0) fraction = 0.0;
  if (fraction > 1.0) fraction = 1.0;
  return fraction;
};
