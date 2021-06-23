import * as THREE from 'three';
import { IZoomable } from '../models/IZoomable';
import { BirdsEye } from '../scene-entities/birds-eye';

/**
 *
 *
 */
export const getDestinationLookPosition = (zoomTarget: IZoomable) => {
  return zoomTarget instanceof BirdsEye
    ? new THREE.Vector3(0, 0, 0)
    : zoomTarget.getPosition();
};
