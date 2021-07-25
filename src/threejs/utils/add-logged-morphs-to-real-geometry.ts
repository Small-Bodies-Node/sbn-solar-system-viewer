import * as THREE from 'three';

/**
 * Take a "real" and "logged" geometry, and combine the logged into
 * the real as morphs to allow smooth shifting between the two geometries
 * This requires the real and logged geometries to have been created in such
 * a way that the order of vertices in each correspond exactly
 */
export function addLoggedMorphsToRealGeometry(
  realGeometry: THREE.BufferGeometry,
  loggedGeometry: THREE.BufferGeometry
): void {
  // --->>

  // Initialize morphAttributes array
  realGeometry.morphAttributes.position = [];

  // Get positions from loggedGeometry
  const loggedPositionAttribute = loggedGeometry.attributes.position;

  // Copy positions across to temp holder
  const loggedPositions = [];
  for (let i = 0; i < loggedPositionAttribute.count; i++) {
    const x = loggedPositionAttribute.getX(i);
    const y = loggedPositionAttribute.getY(i);
    const z = loggedPositionAttribute.getZ(i);
    loggedPositions.push(x, y, z);
  }

  // Set the morph vertices to the logged positions
  realGeometry.morphAttributes.position[0] = new THREE.Float32BufferAttribute(
    loggedPositions,
    3
  );
}
