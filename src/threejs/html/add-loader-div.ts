import { addGlobalStyles } from './add-global-styles';
import { simpleUuid } from '../utils/simple-uuid';

export const loaderDivId = 'loader-div-id-' + simpleUuid();
const borderWidthPxls = 5;
const spinSpeedMs = 2000;

let isInit = false;

/**
 * Simple loader div; removed by `remove-loader-div`
 * It consists of two divs; the outer 'loaderDiv' that is just a shell
 * for centering the div with the actual animation, and the 'animDiv'
 * that does the spinning, etc.
 */
export const addLoaderDiv = (containerDiv: HTMLElement) => {
  // --->>>

  // Only add once
  if (isInit) return;
  isInit = true;

  // Injects key frames for spin animation
  addGlobalStyles();

  // Create divs
  const loaderDiv = document.createElement('div');
  const animDiv = document.createElement('div');
  containerDiv.append(loaderDiv);
  loaderDiv.append(animDiv);
  // Style loaderDiv
  loaderDiv.id = loaderDivId;
  loaderDiv.style.setProperty('position', 'absolute');
  loaderDiv.style.setProperty('top', '0px');
  loaderDiv.style.setProperty('left', '0px');
  loaderDiv.style.setProperty('bottom', '0px');
  loaderDiv.style.setProperty('right', '0px');
  loaderDiv.style.setProperty('display', 'flex');
  loaderDiv.style.setProperty('align-items', 'center');
  loaderDiv.style.setProperty('justify-content', 'center');
  loaderDiv.style.setProperty('pointer-events', 'none');
  // Calc size of radius based on size of container
  const width = loaderDiv.offsetWidth;
  const height = loaderDiv.offsetHeight;
  const shorterLength = width < height ? width : height;
  // Style animation div
  animDiv.style.setProperty('width', shorterLength * 0.25 + 'px');
  animDiv.style.setProperty('height', shorterLength * 0.25 + 'px');
  animDiv.style.setProperty('border', `${borderWidthPxls}px solid #f3f3f3`);
  animDiv.style.setProperty('border-top', `${borderWidthPxls}px solid #3498db`);
  animDiv.style.setProperty('border-radius', '100px');
  animDiv.style.setProperty(
    'animation',
    `sbn-solar-system-viewer-loader-spin ${spinSpeedMs}ms linear infinite`
  );
  return loaderDiv;
};
