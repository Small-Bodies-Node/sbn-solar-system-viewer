import * as THREE from 'three';
import { GLTFLoader as Loader } from 'three/examples/jsm/loaders/GLTFLoader';

import { centerOnBoundingBox } from './center-on-bounding-box';
import { enshadowChildren } from './enshadow-children';
import { delayMs } from './get-texture-from-image-url';
import { resizeThreejsObject } from './resize-threejs-object';

export function gltfLoader(
  gltfUrl: string,
  targetRadius?: number,
  isCenteredOnBoundingBox?: boolean,
  isShadowShown?: boolean
) {
  // ----------------->>>

  return new Promise<THREE.Group>((resolve, reject) => {
    new Loader().load(
      gltfUrl,
      gltf => {
        const object = gltf.scene;
        if (!!targetRadius) resizeThreejsObject(object, targetRadius);
        if (!!isCenteredOnBoundingBox) centerOnBoundingBox(object);
        if (!!isShadowShown) enshadowChildren(object);
        setTimeout(() => resolve(object), delayMs);
      },
      xhr => !true && console.log((xhr.loaded / xhr.total) * 100 + '% loaded'),
      error => {
        console.log('Loading error occurred:', error.message);
        reject();
      }
    );
  });
}
