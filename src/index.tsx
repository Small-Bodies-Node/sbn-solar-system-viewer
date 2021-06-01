import { SceneManager } from './threejs/scene-manager';
import { SKEphem } from './threejs/utils/SKEphem';

let threejsScene: SceneManager;

/**
 * Create threeJs canvas and inject into container
 */
export function init(containerId = 'threejs-canvas-container') {
  // --->>>

  // Get div to contain canvas
  const canvasContainer = document.getElementById(containerId);
  if (!canvasContainer) throw new Error("Can't find div of id " + containerId);

  threejsScene = new SceneManager(containerId);
  threejsScene.init();

  //@ts-ignore
  const eph = new SKEphem(
    {
      epoch: 2458426.5,
      a: 3.870968969437096e-1,
      e: 2.056515875393916e-1,
      i: 7.003891682749818,
      om: 4.830774804443502e1,
      w: 2.917940253442659e1,
      ma: 2.56190975209273e2,
    },
    'deg',
    true /* locked */
  );

  //
  // const xxx = new SKOrbit(eph, {
  //   color: undefined,
  //   eclipticLineColor: undefined,
  //   orbitPathSettings: undefined,
  // });
  // // const xyz = xxx.getPositionAtTime(0);
  // const aaa = xxx.getOrbitShape();
  // console.log('>>>>> ', xyz, aaa);
}

/**
 * Destroy
 */
export function destroy() {
  // --->>>

  threejsScene.destroy();
}

/**
 * React-component wrapper
 */
export { SbnSolarSystemViewer } from './react-component';
