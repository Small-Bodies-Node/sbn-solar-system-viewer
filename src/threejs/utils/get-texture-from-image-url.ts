import * as THREE from 'three';

// Artificial delay to simulate poor networks, etc.
// Can also be used to buffer planet load
export const delayMs = 500;

export const getTextureFromImageUrl = (
  url: string,
  name?: string
): Promise<THREE.Texture> => {
  return new Promise((resolve, reject) => {
    new THREE.TextureLoader().load(
      url,
      texture => {
        texture.encoding = THREE.GammaEncoding;
        setTimeout(() => resolve(texture), delayMs);
      },
      xhr => console.log(`${name} ${(xhr.loaded / xhr.total) * 100}%`),
      () => {
        console.log('Failed to load: ', url);
        reject(new Error('Failed to load: ' + url));
      }
    );
  });
};
