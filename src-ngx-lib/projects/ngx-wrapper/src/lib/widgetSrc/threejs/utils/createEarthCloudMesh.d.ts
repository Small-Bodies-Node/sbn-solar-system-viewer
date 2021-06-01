import * as THREE from 'three';
/**
 * This function is adapted from `https://github.com/jeromeetienne/threex.planets/blob/master/threex.planets.js`, based on instructions from `http://learningthreejs.com/blog/2013/09/16/how-to-make-the-earth-in-webgl/`
 * Jpg doesnt have channel, so the idea is to load cloud image from jpg and remove pixels manually to create an alpha-channel effect; I havent worked through exactly how the details work, but it does
 */
export declare function createEarthCloudMesh(cloudPlanetRadius: number): Promise<THREE.Mesh<THREE.SphereGeometry>>;
