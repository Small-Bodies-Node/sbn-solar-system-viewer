import * as THREE from 'three';
import { getLoggedPosition } from './get-logged-position';

interface IVertices {
  [index: string]: {
    x: number;
    y: number;
    z: number;
  };
}

/**
 * Function to take a dodecahedron and warp the points to createa jagged
 * asteroid shape
 */
export const createAsteroidGeometry = (
  size: number,
  warpFactor = 0.25,
  position = new THREE.Vector3()
) => {
  // --->>>

  const realGeometry = new THREE.DodecahedronGeometry(size, 1);
  const positionAttribute = realGeometry.getAttribute('position');
  const point = new THREE.Vector3();
  const vertices: IVertices = {};

  // Collect all repeated points into a hashmap of unique vertices
  for (let i = 0; i < positionAttribute.count; i++) {
    point.fromBufferAttribute(positionAttribute, i); // read vertex
    let key = [point.x, point.y, point.z].join(',');
    if (!vertices[key]) {
      vertices[key] = {
        x: point.x += Math.random() * size * warpFactor,
        y: point.y += Math.random() * size * warpFactor,
        z: point.z += Math.random() * size * warpFactor,
      };
    }
    const { x, y, z } = vertices[key];
    positionAttribute.setXYZ(i, x, y, z);
  }

  // Stretch/flatten asteroid randomly
  const sx = 0.5 + Math.random();
  const sy = 0.5 + Math.random();
  const sz = 0.5 + Math.random();
  realGeometry.scale(sx, sy, sz);

  // Get create logged stuff
  const loggedGeometry = realGeometry.clone();
  const loggedPosition = getLoggedPosition(position);

  // Translate geometries
  {
    const { x, y, z } = position;
    realGeometry.translate(x, y, z);
  }
  {
    const { x, y, z } = loggedPosition;
    loggedGeometry.translate(x, y, z);
  }

  return {
    realGeometry,
    loggedGeometry,
  };
};
