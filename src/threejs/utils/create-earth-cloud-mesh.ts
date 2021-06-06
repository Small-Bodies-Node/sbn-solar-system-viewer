import * as THREE from 'three';
import { imageBaseUrl } from './constants';

/**
 * This function is adapted from `https://github.com/jeromeetienne/threex.planets/blob/master/threex.planets.js`, based on instructions from `http://learningthreejs.com/blog/2013/09/16/how-to-make-the-earth-in-webgl/`
 * Jpegs don't have an alpha channel, so the idea is to load cloud image from jpg and remove pixels manually to create an alpha-channel effect
 */
export function createEarthCloudMesh(): Promise<THREE.Texture> {
  // --->>>

  return new Promise((resolve, reject) => {
    // --->>>

    // create destination canvas
    const canvasResult = document.createElement('canvas');
    canvasResult.width = 1024;
    canvasResult.height = 512;
    const contextResult = canvasResult.getContext('2d');

    // load earthcloudmap
    const imageMap = new Image();
    imageMap.crossOrigin = 'Anonymous';

    // const material = new THREE.MeshPhongMaterial({
    //   map: new THREE.Texture(canvasResult),
    //   side: THREE.DoubleSide,
    //   transparent: true,
    //   opacity: 0.6,
    // });
    // const mesh = new THREE.Mesh<THREE.SphereGeometry>(geometry, material);

    imageMap.onerror = error => {
      console.log('Error: ', error);
      reject();
    };
    imageMap.onload = function() {
      // --->>>

      // create dataMap ImageData for earthcloudmap
      const canvasMap = document.createElement('canvas');
      canvasMap.width = imageMap.width;
      canvasMap.height = imageMap.height;
      const contextMap = canvasMap.getContext('2d');
      contextMap!.drawImage(imageMap, 0, 0);
      const dataMap = contextMap!.getImageData(
        0,
        0,
        canvasMap.width,
        canvasMap.height
      );

      // load earthcloudmaptrans
      const imageTrans = new Image();
      imageTrans.crossOrigin = 'Anonymous';
      imageTrans.addEventListener('load', function() {
        // --->>>

        // create dataTrans ImageData for earthcloudmaptrans
        const canvasTrans = document.createElement('canvas');
        canvasTrans.width = imageTrans.width;
        canvasTrans.height = imageTrans.height;
        const contextTrans = canvasTrans.getContext('2d');
        contextTrans!.drawImage(imageTrans, 0, 0);
        try {
          const dataTrans = contextTrans!.getImageData(
            0,
            0,
            canvasTrans.width,
            canvasTrans.height
          );
          // merge dataMap + dataTrans into dataResult
          let dataResult = contextMap!.createImageData(
            canvasMap.width,
            canvasMap.height
          );
          for (let y = 0, offset = 0; y < imageMap.height; y++) {
            for (let x = 0; x < imageMap.width; x++, offset += 4) {
              dataResult.data[offset + 0] = dataMap.data[offset + 0];
              dataResult.data[offset + 1] = dataMap.data[offset + 1];
              dataResult.data[offset + 2] = dataMap.data[offset + 2];
              dataResult.data[offset + 3] = 255 - dataTrans.data[offset + 0];
            }
          }

          // update texture with result
          contextResult!.putImageData(dataResult, 0, 0);
          // if (!!material && !!material.map) material.map.needsUpdate = true;
        } catch (error) {
          console.log('Error: ', error);
          reject();
        }
        resolve(new THREE.CanvasTexture(canvasResult));
      });
      imageTrans.src = `${imageBaseUrl}/planets/earth/earth-clouds-trans-1024.png`;
    };
    imageMap.src = `${imageBaseUrl}/planets/earth/earth-clouds-color-1024.png`;
  });
}
