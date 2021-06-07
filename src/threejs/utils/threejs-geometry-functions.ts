import * as THREE from 'three';

function vectorBetweenTwoVector3s(v1: THREE.Vector3, v2: THREE.Vector3) {
  return new THREE.Vector3(v2.x - v1.x, v2.y - v1.y, v2.z - v1.z);
}

export function distanceBetweenTwoVector3s(
  v1: THREE.Vector3,
  v2: THREE.Vector3
): number {
  return vectorBetweenTwoVector3s(v1, v2).length();
}
