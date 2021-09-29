import { createGoogleIcon } from './create-google-icon';

/**
 * Adds settings button to top-right of UI
 */
export const createSettingsButton = (toggleSettingsPanelCb: () => void) => {
  // --->>>

  // Create button container
  const settingsSizePxls = 70;
  const settingsButtonDiv = document.createElement('div');
  settingsButtonDiv.style.setProperty('position', 'absolute');
  settingsButtonDiv.style.setProperty('top', '0px');
  settingsButtonDiv.style.setProperty('right', '0px');
  settingsButtonDiv.style.setProperty('height', `${settingsSizePxls}px`);
  settingsButtonDiv.style.setProperty('width', `${settingsSizePxls}px`);
  settingsButtonDiv.style.setProperty('display', 'flex');
  settingsButtonDiv.style.setProperty('justify-content', 'center');
  settingsButtonDiv.style.setProperty('align-items', 'center');
  settingsButtonDiv.style.setProperty('z-index', '2');
  // svgWrapperDiv.style.setProperty('background-color', 'pink');

  // Add icon to button
  settingsButtonDiv.append(
    createGoogleIcon('settings', { color: 'white', sizePxls: 50 })
  );

  /*   getReactIconSvg('IoIosSettings', {
    fillColor: 'white',
    size: settingsSizePxls,
  }); */

  // Add listener
  settingsButtonDiv.addEventListener('click', toggleSettingsPanelCb);

  // Finish
  return settingsButtonDiv;
};
