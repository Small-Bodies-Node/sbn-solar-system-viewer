import { addGlobalStyles } from './add-global-styles';
import { createTitledSwitch } from './create-titled-switch';
import { createTitledInput } from './create-titled-input';
import { getAllOptions } from '../utils/get-all-options';
import { getHrDiv } from './create-hr-div';
import { createThreeColumnContainer } from './create-three-column-container';
import { simpleUuid } from '../utils/simple-uuid';

// Make some unique ids
export const settingsPanelIdX = 'settings-panel-id-' + simpleUuid();
export const maxObjectsContainerDivId =
  'max-objects-container-div-id-' + simpleUuid();
export const thresholdHContainerDivId =
  'threshold-H-container-div-id-' + simpleUuid();

// Track state of panel open-closed
let isSettingsPanelDisplayed = false;

/**
 * Create panel to hold all the buttons/fields that will control the widget's
 * local-storage-persisted state
 */
export const createSettingsPanel = () => {
  // --->>

  addGlobalStyles();

  // Create container for the settings panel
  const settingsPanelDiv = document.createElement('div');
  settingsPanelDiv.id = settingsPanelIdX;
  settingsPanelDiv.style.setProperty('position', 'absolute');
  settingsPanelDiv.style.setProperty('top', '0px');
  settingsPanelDiv.style.setProperty(
    'right',
    isSettingsPanelDisplayed ? '0%' : '100%'
  );
  settingsPanelDiv.style.setProperty('left', '0px');
  settingsPanelDiv.style.setProperty('bottom', '0px');
  settingsPanelDiv.style.setProperty('transition', 'right 1s ease-in-out');
  settingsPanelDiv.style.setProperty('overflow', 'hidden');
  settingsPanelDiv.style.setProperty('font-family', '"Odibee Sans", cursive');
  settingsPanelDiv.style.setProperty('font-size', '22px');
  settingsPanelDiv.style.setProperty(
    'background-color',
    'rgba(255,255,255,0.9)'
  );
  const isDark = false;
  if (isDark)
    settingsPanelDiv.style.setProperty('background-color', 'rgba(0,0,0,0.9)');
  settingsPanelDiv.style.setProperty('color', 'black');
  if (isDark) settingsPanelDiv.style.setProperty('color', 'white');
  settingsPanelDiv.style.setProperty('display', 'flex');
  settingsPanelDiv.style.setProperty('flex-direction', 'column');
  settingsPanelDiv.style.setProperty('gap', '5px');
  settingsPanelDiv.style.setProperty('justify-content', 'start');
  settingsPanelDiv.style.setProperty('align-items', 'center');

  // Create callback to toggle settings panel open-closed
  const toggleSettingsPanelCb = () => {
    isSettingsPanelDisplayed = !isSettingsPanelDisplayed;
    settingsPanelDiv.style.setProperty(
      'right',
      isSettingsPanelDisplayed ? '0%' : '100%'
    );
  };

  // Heading
  const {
    threeColumnContainerDiv,
    secondColumnDiv,
  } = createThreeColumnContainer();
  secondColumnDiv.innerHTML = '<h1>Settings</h1>';
  threeColumnContainerDiv.style.setProperty('height', '100px');
  settingsPanelDiv.append(threeColumnContainerDiv);

  // Planet-loading switch
  settingsPanelDiv.append(getHrDiv());
  const planetLoadingModeSwitchContainerDiv = createTitledSwitch(
    'Planet loading mode?',
    'Load planets before animation begins',
    'Begin animation then load planets',
    '__sbnViewer__isPlanetsLoadedBeforeAnimationBegins'
  );
  settingsPanelDiv.append(planetLoadingModeSwitchContainerDiv);
  // const hrDiv = document.createElement('div');
  // hrDiv.style.setProperty('width', '100%');
  // hrDiv.style.setProperty('height', '1px');
  // hrDiv.style.setProperty('background-color', 'black');
  settingsPanelDiv.append(getHrDiv());

  // Comet-asteroid loading mode switch
  const cometAsteroidLoadingModeSwitchContainerDiv = createTitledSwitch(
    'Comet-Asteroid Loading Mode?',
    'Start animation then load comets-asteroids',
    'Wait for comets-asteroids before starting animation',
    '__sbnViewer__isBeltLoadedBeforeAnimationBegins'
  );
  settingsPanelDiv.append(cometAsteroidLoadingModeSwitchContainerDiv);
  settingsPanelDiv.append(getHrDiv());

  // Abundance-mode switch
  const abundanceRepresentationModeSwitchContainerDiv = createTitledSwitch(
    'Comet-Asteroid Abundance Mode?',
    'Toy Model',
    'Real World Proportions',
    '__sbnViewer__isBeltAbundanceToyModel',
    (isChecked: boolean) => {
      // --->>

      const maxObjectsContainerDiv = document.getElementById(
        maxObjectsContainerDivId
      );
      if (!!maxObjectsContainerDiv) {
        maxObjectsContainerDiv.style.setProperty(
          'display',
          isChecked ? 'none' : 'flex'
        );
      }

      const thresholdHContainerDiv = document.getElementById(
        thresholdHContainerDivId
      );
      if (!!thresholdHContainerDiv) {
        thresholdHContainerDiv.style.setProperty(
          'display',
          isChecked ? 'none' : 'flex'
        );
      }
    }
  );
  settingsPanelDiv.append(abundanceRepresentationModeSwitchContainerDiv);

  const isChecked = getAllOptions()['__sbnViewer__isBeltAbundanceToyModel'];

  // Add max objects field
  const maxObjectsContainerDiv = createTitledInput(
    'Max number of objects',
    '__sbnViewer__beltAbundanceMaxObjects'
  );
  maxObjectsContainerDiv.style.setProperty(
    'display',
    isChecked ? 'none' : 'flex'
  );
  maxObjectsContainerDiv.id = maxObjectsContainerDivId;
  settingsPanelDiv.append(maxObjectsContainerDiv);

  // Add threshold H field
  const thresholdHContainerDiv = createTitledInput(
    'Minimum H Mag',
    '__sbnViewer__beltAbundanceHThreshold'
  );
  thresholdHContainerDiv.id = thresholdHContainerDivId;
  thresholdHContainerDiv.style.setProperty(
    'display',
    isChecked ? 'none' : 'flex'
  );
  settingsPanelDiv.append(thresholdHContainerDiv);
  settingsPanelDiv.append(getHrDiv());

  // Return assets having created them
  return {
    toggleSettingsPanelCb,
    settingsPanelDiv,
  };
};
