import * as THREE from 'three';
import { IZoomable } from '../models/IZoomable';
import { BirdsEye } from '../scene-entities/birds-eye';
import { getDestinationLookPosition } from './get-destination-look-position';

/**
 * By providing a zoomable target, your camera, and a 'traversal fraction',
 * this function will compute the next modification in viewing direction for
 * the camera in order to pan towards the target
 */
export const updateCameraViewingAngle = (
  camera: THREE.Camera,
  zoomTarget: IZoomable,
  zoomTraversalFraction: number
) => {
  // Get vector from where you are to where you want to look
  const camPos = camera.position;
  const destinationLookPosition = getDestinationLookPosition(zoomTarget);
  const destinationLookVector = new THREE.Vector3(
    destinationLookPosition.x - camPos.x,
    destinationLookPosition.y - camPos.y,
    destinationLookPosition.z - camPos.z
  );

  // Get unitary vector of direction camera is presently pointing
  const presentLookVector = camera.getWorldDirection(new THREE.Vector3());

  // In order for the change in viewing angle to feel like it matches
  // the change in position, we need to multiply the unitary vector to
  // be on the same order of size as the destinationLookVector
  presentLookVector.multiplyScalar(destinationLookVector.length());

  // Use these two vectors to compute the vector "to-be-fractionally-traversed"
  // N.b. you might need to sketch a diagram to understand why this works
  const relativeDestinationLookVector: THREE.Vector3 = new THREE.Vector3(
    destinationLookVector.x - presentLookVector.x,
    destinationLookVector.y - presentLookVector.y,
    destinationLookVector.z - presentLookVector.z
  );

  // Fractionally traverse said vector
  let newLookPosition: THREE.Vector3 = new THREE.Vector3(
    camera.position.x +
      presentLookVector.x +
      relativeDestinationLookVector.x * zoomTraversalFraction,
    camera.position.y +
      presentLookVector.y +
      relativeDestinationLookVector.y * zoomTraversalFraction,
    camera.position.z +
      presentLookVector.z +
      relativeDestinationLookVector.z * zoomTraversalFraction
  );

  // Signal whether to stop/continue
  let isZoomingAngle = true;

  // Decide whether to stop searching and visually lock onto destinationLookPosition
  const smallThresholdAngle = 0.0025;
  const theta = destinationLookVector.angleTo(presentLookVector);
  if (theta < smallThresholdAngle) {
    isZoomingAngle = false;
    newLookPosition = destinationLookPosition;
  }

  //Finally, update computed new viewing and camera position
  camera.lookAt(newLookPosition.x, newLookPosition.y, newLookPosition.z);

  return isZoomingAngle;
};
