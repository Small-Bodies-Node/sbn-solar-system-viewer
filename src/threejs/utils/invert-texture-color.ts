import * as THREE from 'three';

/**
 * Returns texture with inverted colors
 */
export function invertTextureColor(
  texture: THREE.Texture,
  isAlphaInverted = false
) {
  // --->>>

  // texture -> canvas -> context -> data arrays
  const img: HTMLImageElement = texture.image;
  const canvas = document.createElement('canvas');
  const width = img.width;
  const height = img.height;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx!.drawImage(img, 0, 0);

  // Get copy of old data
  const data = ctx!.getImageData(0, 0, width, height);

  // Modify copy of data
  for (let y = 0, offset = 0; y < height; y++) {
    for (let x = 0; x < width; x++, offset += 4) {
      data.data[offset + 0] = 255 - data.data[offset + 0];
      data.data[offset + 1] = 255 - data.data[offset + 1];
      data.data[offset + 2] = 255 - data.data[offset + 2];
      if (isAlphaInverted) data.data[offset + 3] = 255 - data.data[offset + 3];
    }
  }

  // Overwrite old data with new
  ctx!.putImageData(data, 0, 0);

  // MUST return CanvasTexture or it won't update properly
  return new THREE.CanvasTexture(canvas);
}
