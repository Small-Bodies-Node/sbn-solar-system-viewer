import * as THREE from 'three';

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
export const createAsteroidGeometry = (size: number) => {
  // --->>>

  const wf = 0.25; // Warp Factor
  const geometry = new THREE.DodecahedronGeometry(size, 1);
  const positionAttribute = geometry.getAttribute('position');
  const point = new THREE.Vector3();
  const vertices: IVertices = {};

  // Collect all repeated points into a hashmap of unique vertices
  for (let i = 0; i < positionAttribute.count; i++) {
    point.fromBufferAttribute(positionAttribute, i); // read vertex
    let key = [point.x, point.y, point.z].join(',');
    if (!vertices[key])
      vertices[key] = {
        x: point.x += Math.random() * size * wf,
        y: point.y += Math.random() * size * wf,
        z: point.z += Math.random() * size * wf,
      };
  }

  for (let i = 0; i < positionAttribute.count; i++) {
    point.fromBufferAttribute(positionAttribute, i); // read vertex
    let key = [point.x, point.y, point.z].join(',');
    let { x, y, z } = vertices[key];
    positionAttribute.setXYZ(i, x, y, z);
  }

  return geometry;
};
