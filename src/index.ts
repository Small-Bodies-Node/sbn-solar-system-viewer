import { SceneManager } from './threejs/scene-manager';
import { addGlobalProperties } from './threejs/utils/add-global-properties';

let threejsScene: SceneManager;
export let initDate = new Date();
export const setInitDate = (date: Date) => (initDate = date);
export const getInitDate = () => initDate;

/**
 * Create threeJs canvas and inject into container
 */
export function init(containerId = 'sbn-solar-system-viewer-id') {
  // --->>

  // Add threeJs, stuff in the head, etc.
  addGlobalProperties()
    .then(_ => {
      // Get div to contain canvas
      const canvasContainer = document.getElementById(containerId);
      if (!canvasContainer) {
        throw new Error("Can't find div of id " + containerId);
      }
      threejsScene = new SceneManager(containerId);
      threejsScene.init();
    })
    .catch(_ => {
      console.log('Error loading stuff');
      console.log(_);
    });
}

/**
 * Loads and runs stats.min.js to display FPS, etc.
 */
function displayFpsStats() {
  const script = document.createElement('script');
  script.onload = () => {
    // @ts-ignore
    const stats = new Stats();
    document.body.appendChild(stats.dom);
    requestAnimationFrame(function loop() {
      stats.update();
      requestAnimationFrame(loop);
    });
  };
  script.src =
    'https://sbn-solar-system-viewer.s3.amazonaws.com/scripts/stats.min.js';
  document.head.appendChild(script);
}
// if (process.env.NODE_ENV === 'development') displayFpsStats();

/**
 * Add 'destroy' feature to UMD
 */
export function destroy() {
  threejsScene.destroy();
}

/**
 * Kick things off in dev mode
 */
if (process.env.NODE_ENV === 'development') {
  window.onload = () => {
    init();
  };
}

const x: any = [];

x.forEach((el: any) => {
  el.forEach((el: any) => {});
});
