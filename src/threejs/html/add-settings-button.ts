import { getReactIconSvg } from '../utils/get-react-icon-svg';
import { settingsPanelId } from './add-settings-panel';

let isSettingsPanelDisplayed = false;

/**
 * Adds settings button to top-left of UI
 */
export const addSettingsButton = (container: HTMLElement) => {
  // --->>>

  // Warning
  if (!container) throw new Error('Canvas Container is Falsy!');

  const settingsSizePxls = 70;

  // Create wrapper container
  const svgWrapperDiv = document.createElement('div');
  svgWrapperDiv.style.setProperty('position', 'absolute');
  svgWrapperDiv.style.setProperty('top', '0px');
  svgWrapperDiv.style.setProperty('right', '0px');
  svgWrapperDiv.style.setProperty('height', `${settingsSizePxls}px`);
  svgWrapperDiv.style.setProperty('width', `${settingsSizePxls}px`);
  svgWrapperDiv.style.setProperty('display', 'flex');
  svgWrapperDiv.style.setProperty('justify-content', 'center');
  svgWrapperDiv.style.setProperty('align-items', 'center');
  svgWrapperDiv.style.setProperty('z-index', '2');
  // svgWrapperDiv.style.setProperty('background-color', 'pink');

  // Inject SVG into div
  svgWrapperDiv.innerHTML = getReactIconSvg('IoIosSettings', {
    fillColor: 'white',
    size: settingsSizePxls,
  });

  // Add listener
  svgWrapperDiv.addEventListener('click', () => {
    //
    console.log('Hmmm');
    const settingsPanelDiv = document.getElementById(settingsPanelId);
    if (!!settingsPanelDiv) {
      console.log('objecHmmm 2t');
      isSettingsPanelDisplayed = !isSettingsPanelDisplayed;
      settingsPanelDiv.style.setProperty(
        'right',
        isSettingsPanelDisplayed ? '100%' : '0%'
      );
    }
  });

  //
  container.append(svgWrapperDiv);
};
