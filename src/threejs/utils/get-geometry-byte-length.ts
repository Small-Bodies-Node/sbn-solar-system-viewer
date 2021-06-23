/**
 *
 */
export function getGeometryByteLength(geometry: THREE.BufferGeometry) {
  //

  geometry.computeVertexNormals();
  console.log('>>>>>', geometry);

  let total = 0;
  // if (geometry.index) total += geometry.index.array.byteLength;

  for (const name in geometry.attributes) {
    // total += geometry.attributes[name].array.byteLength;
  }

  return total;
}
