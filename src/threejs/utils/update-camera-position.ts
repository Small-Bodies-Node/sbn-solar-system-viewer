import * as THREE from 'three';
import { IZoomable } from '../models/IZoomable';
import { distanceBetweenTwoVector3s } from './threejs-geometry-functions';
import { updateDestinationCameraPosition } from './update-desination-camera-position';

/**
 * Function to compute the next position for a camera given a zoomable target
 * (e.g. a planet), the camera, and a 'traversal' fraction that parameterizes
 * how fast to move toward that target
 */
export const updateCameraPosition = (
  camera: THREE.Camera,
  zoomTarget: IZoomable,
  zoomTraversalFraction: number
) => {
  // Determine where you want to end up
  const { x, y, z } = updateDestinationCameraPosition(zoomTarget);

  // Get vector between present and destination positions
  // This is the vector "to-be-fractionally-traversed"
  const cp = camera.position;
  const relativeDestinationCameraVector = new THREE.Vector3(
    x - cp.x,
    y - cp.y,
    z - cp.z
  );

  // Traverse the camera some fraction along said vector
  let newCameraPosition: THREE.Vector3 = new THREE.Vector3(
    cp.x + relativeDestinationCameraVector.x * zoomTraversalFraction,
    cp.y + relativeDestinationCameraVector.y * zoomTraversalFraction,
    cp.z + relativeDestinationCameraVector.z * zoomTraversalFraction
  );

  // Return signal to stop/continue
  let isZoomingPosition = true;

  // Decide whether to stop searching and instead lock onto destinationCameraPosition
  const separation = distanceBetweenTwoVector3s(
    newCameraPosition,
    new THREE.Vector3(x, y, z)
  );
  const smallThresholdSeparation = 0.001;
  if (separation < smallThresholdSeparation) {
    isZoomingPosition = false;
    newCameraPosition = new THREE.Vector3(x, y, z);
  }

  //Finally, update computed new camera position
  camera.position.set(
    newCameraPosition.x,
    newCameraPosition.y,
    newCameraPosition.z
  );

  return isZoomingPosition;
};
