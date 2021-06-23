import * as THREE from 'three';
import { getLoggedPosition } from './get-logged-position';

/**
 * Mutates a BufferGeometry by adding morph-target apparatus to geometry
 * allowing you to lerp  between log and normal positioning of vertices
 * Adapted from: https://threejs.org/examples/webgl_morphtargets.html
 */
export function addLogMorphsToGeometry(geometry: THREE.BufferGeometry): void {
  // --->>

  geometry.morphAttributes.position = [];
  const positionAttribute = geometry.attributes.position;
  const loggedPositions = [];
  for (let i = 0; i < positionAttribute.count; i++) {
    const x0 = positionAttribute.getX(i);
    const y0 = positionAttribute.getY(i);
    const z0 = positionAttribute.getZ(i);

    const position = new THREE.Vector3(x0, y0, z0);
    const logpos = getLoggedPosition(position);
    const { x, y, z } = logpos;
    loggedPositions.push(x, y, z);
  }
  geometry.morphAttributes.position[0] = new THREE.Float32BufferAttribute(
    loggedPositions,
    3
  );
}
