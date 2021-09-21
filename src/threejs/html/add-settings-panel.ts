import { v4 as uuidv4 } from 'uuid'; // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

import { addGlobalStyles } from './add-global-styles';
import { addTitledSwitch } from './add-titled-switch';
import { addTitledInput } from './add-titled-input';
import { getAllOptions } from '../utils/get-all-options';
import { getHrDiv } from './create-hr-div';

// Make some unique ids
export const settingsPanelId = 'settings-panel-id-' + uuidv4();
export const maxObjectsContainerDivId =
  'max-objects-container-div-id-' + uuidv4();
export const thresholdHContainerDivId =
  'threshold-H-container-div-id-' + uuidv4();

/**
 * Create settings panel
 */
export const addSettingsPanel = (container: HTMLElement) => {
  // --->>

  addGlobalStyles();

  if (!container) throw new Error('Canvas Container is Falsy!');

  // Create container for the settings panel
  const panelDiv = document.createElement('div');
  panelDiv.id = settingsPanelId;
  panelDiv.style.setProperty('position', 'absolute');
  panelDiv.style.setProperty('top', '0px');
  panelDiv.style.setProperty('right', '100%');
  panelDiv.style.setProperty('right', '0%');
  panelDiv.style.setProperty('left', '0px');
  panelDiv.style.setProperty('bottom', '0px');
  panelDiv.style.setProperty('transition', 'right 1s ease-in-out');
  panelDiv.style.setProperty('overflow', 'hidden');
  panelDiv.style.setProperty('background-color', 'pink');
  panelDiv.style.setProperty('display', 'flex');
  panelDiv.style.setProperty('flex-direction', 'column');
  panelDiv.style.setProperty('gap', '5px');
  panelDiv.style.setProperty('justify-content', 'start');
  panelDiv.style.setProperty('align-items', 'center');

  // Planet-loading switch
  panelDiv.append(getHrDiv());
  const planetLoadingModeSwitchContainerDiv = addTitledSwitch(
    'Planet loading mode?',
    'Load planets before animation begins',
    'Begin animation then load planets',
    '__sbnViewer__isPlanetsLoadedBeforeAnimationBegins'
  );
  panelDiv.append(planetLoadingModeSwitchContainerDiv);
  const hrDiv = document.createElement('div');
  hrDiv.style.setProperty('width', '100%');
  hrDiv.style.setProperty('height', '1px');
  hrDiv.style.setProperty('background-color', 'black');
  panelDiv.append(getHrDiv());

  // Comet-asteroid loading mode switch
  const cometAsteroidLoadingModeSwitchContainerDiv = addTitledSwitch(
    'Comet-Asteroid Loading Mode?',
    'Async (Start Before Loaded)',
    'Sync (Wait Till Loaded)',
    '__sbnViewer__isBeltLoadedBeforeAnimationBegins'
  );
  panelDiv.append(cometAsteroidLoadingModeSwitchContainerDiv);
  panelDiv.append(getHrDiv());

  // Abundance-mode switch
  const abundanceRepresentationModeSwitchContainerDiv = addTitledSwitch(
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
  panelDiv.append(abundanceRepresentationModeSwitchContainerDiv);

  const isChecked = getAllOptions()['__sbnViewer__isBeltAbundanceToyModel'];

  // Max objects field
  const maxObjectsContainerDiv = addTitledInput(
    'Max number of objects',
    '__sbnViewer__beltAbundanceMaxObjects'
  );
  maxObjectsContainerDiv.style.setProperty(
    'display',
    isChecked ? 'none' : 'flex'
  );
  maxObjectsContainerDiv.id = maxObjectsContainerDivId;
  panelDiv.append(maxObjectsContainerDiv);

  // Threshold H field
  const thresholdHContainerDiv = addTitledInput(
    'Minimum H Mag',
    '__sbnViewer__beltAbundanceHThreshold'
  );
  thresholdHContainerDiv.id = thresholdHContainerDivId;
  thresholdHContainerDiv.style.setProperty(
    'display',
    isChecked ? 'none' : 'flex'
  );
  panelDiv.append(thresholdHContainerDiv);
  panelDiv.append(getHrDiv());

  // Now display panel having create it
  container.append(panelDiv);
};
