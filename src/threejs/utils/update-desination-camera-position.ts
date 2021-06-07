import * as THREE from 'three';
import { IZoomable } from '../models/IZoomable';

/**
 * By providing a zoomable target, this function will compute a 'scenic'
 * position that will be used by other functions to move the camera.
 */
export const updateDestinationCameraPosition = (zoomTarget: IZoomable) => {
  const scale = zoomTarget.getScale();
  const radius = zoomTarget.getRadius();

  if (zoomTarget.NAME === 'SUN') {
    // Position around sun is arbitrary
    const { x, y, z } = zoomTarget.getPosition();
    return new THREE.Vector3(x + 3 * radius * scale, y + 3 * radius * scale, z);
  }

  // Logic to find 'scenic' destination with sun in view in the distance
  // to the side of target based on some back-of-envelope high-school geometry
  const X = zoomTarget.getPosition().clone();
  const r = 2 * radius * scale;
  const sinAlpha = r / X.length();
  const alpha = Math.asin(sinAlpha);
  X.applyAxisAngle(new THREE.Vector3(0, 0, 1), alpha);
  const lengthenFactor = (X.length() + 4 * radius * scale) / X.length();
  X.multiplyScalar(lengthenFactor);
  return X;
};
