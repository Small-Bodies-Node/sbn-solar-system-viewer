import * as THREE from 'three';

export const getTexture = (
  url: string,
  _name?: string
): Promise<THREE.Texture> => {
  return new Promise(resolve => {
    new THREE.TextureLoader().load(url, texture => {
      if (_name?.includes('EARTH')) {
        console.log('>>> texture loaded', url, texture);
      }
      texture.encoding = THREE.GammaEncoding;
      resolve(texture);
    });
  });
};
