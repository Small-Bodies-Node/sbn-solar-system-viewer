let scaleFactor = 1.0;

/**
 * Set the number of units per AU.
 */
export function setScaleFactor(val: number) {
  scaleFactor = val;
}

/**
 * Get the number of units per AU.
 */
export function getScaleFactor() {
  return scaleFactor;
}

export function rescalePos(pos: { x: number; y: number; z: number }) {
  pos.x *= scaleFactor;
  pos.y *= scaleFactor;
  pos.z *= scaleFactor;
  return pos;
}

export function rescaleArray(XYZ: number[]) {
  return [XYZ[0] * scaleFactor, XYZ[1] * scaleFactor, XYZ[2] * scaleFactor];
}

export function rescaleXYZ(X: number, Y: number, Z: number) {
  return [X * scaleFactor, Y * scaleFactor, Z * scaleFactor];
}

export function rescaleVector(vec: THREE.Vector3) {
  return vec.multiplyScalar(scaleFactor);
}

export function rescaleNumber(x: number) {
  return scaleFactor * x;
}

export function rescale(...args: any[]) {
  if (Array.isArray(args[0])) {
    return rescaleArray(args[0]);
  }
  if (typeof args[0] === 'number') {
    if (args.length === 3) {
      // @ts-ignore
      return rescaleXYZ(...args);
    }
    return rescaleNumber(args[0]);
  }
  return rescalePos(args[0]);
}
