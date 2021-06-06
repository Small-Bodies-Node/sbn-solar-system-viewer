import { addGlobalStyles } from './add-global-styles';

export const loaderDivId = 'sbn-solar-system-loader-div-id';

const radius = '15%';
const borderWidthPxls = 5;
const spinSpeedMs = 2000;

/**
 * Simple loader div; removed by `remove-loader-div`
 * It consists of two divs; the outer 'loaderDiv' that is just a shell
 * for centering the div with the actual animation, and the 'animDiv'
 * that does the spinning, etc.
 */
export const getLoaderDiv = () => {
  // --->>>

  // Injects key frames for spin animation
  addGlobalStyles();

  // Create divs
  const loaderDiv = document.createElement('div');
  const animDiv = document.createElement('div');
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
  // Style animation div
  animDiv.style.setProperty('border', `${borderWidthPxls}px solid #f3f3f3`);
  animDiv.style.setProperty('border-top', `${borderWidthPxls}px solid #3498db`);
  animDiv.style.setProperty('border-radius', '50%');
  animDiv.style.setProperty('width', radius);
  animDiv.style.setProperty('height', radius);
  animDiv.style.setProperty(
    'animation',
    `sbn-solar-system-viewer-loader-spin ${spinSpeedMs}ms linear infinite`
  );
  return loaderDiv;
};
