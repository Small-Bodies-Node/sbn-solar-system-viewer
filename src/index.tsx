import { SceneManager } from './threejs/scene-manager';
import { addGlobalProperties } from './threejs/utils/add-global-properties';

let threejsScene: SceneManager;
export let initDate = new Date();
export const setInitDate = (date: Date) => (initDate = date);
export const getInitDate = () => initDate;

/**
 * Create threeJs canvas and inject into container
 */
export function init(containerId = 'threejs-canvas-container') {
  // --->>>

  console.log('Debug 0');

  // Add threeJs, stuff in the head, etc.
  addGlobalProperties()
    .then(_ => {
      console.log('Debug 1');

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

// if (process.env.NODE_ENV === 'development') displayFpsStats();
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
