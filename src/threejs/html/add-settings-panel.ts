import { v4 as uuidv4 } from 'uuid'; // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
import { addGlobalStyles } from './add-global-styles';
import { addBinarySwitch } from './add-binary-switch';
import { getAllOptions } from '../utils/get-all-options';
import { EPlanetLoadingMode } from '../models/EPlanetLoadingMode';
import { setOptions } from '../utils/set-options';
import { ECometAsteroidLoadingMode } from '../models/ECometAsteroidLoadingMode';
import { ECometAsteroidAbundanceRepresentationMode } from '../models/ECometAsteroidAbundanceRepresentationMode';

export const settingsPanelId = 'settings-panel-id-' + uuidv4();

/**
 * Adds settings button to top-left of UI
 */
export const addSettingsPanel = (container: HTMLElement) => {
  // --->>>

  console.log('Adding settings panel?');

  addGlobalStyles();

  // Warning
  if (!container) throw new Error('Canvas Container is Falsy!');

  // Create wrapper container
  const panelDiv = document.createElement('div');
  panelDiv.id = settingsPanelId;
  //
  panelDiv.style.setProperty('position', 'absolute');
  panelDiv.style.setProperty('top', '0px');
  panelDiv.style.setProperty('right', '100%');
  panelDiv.style.setProperty('right', '0%');
  panelDiv.style.setProperty('left', '0px');
  panelDiv.style.setProperty('bottom', '0px');
  //
  panelDiv.style.setProperty('transition', 'right 1s ease-in-out');
  //
  panelDiv.style.setProperty('overflow', 'hidden');
  //
  panelDiv.style.setProperty('background-color', 'pink');
  panelDiv.style.setProperty('display', 'flex');
  panelDiv.style.setProperty('flex-direction', 'column');
  panelDiv.style.setProperty('gap', '5px');
  panelDiv.style.setProperty('justify-content', 'center');
  panelDiv.style.setProperty('align-items', 'center');
  //

  const div1 = addBinarySwitch(
    'Planet Loading Mode?',
    'Async (Start Animation Before Planets Are Loaded) XXX  XXX  XXX  XXX  XXX  XXX  XXX  XXX  XXX  XXX  XXX  XXX  XXX  XXX  XXX  XXX  XXX ',
    'Sync (Wait Till Planets Are Loaded)',
    true,
    () => {
      setOptions({
        __sbnViewer__planetLoadingMode:
          (getAllOptions().__sbnViewer__planetLoadingMode + 1) %
          EPlanetLoadingMode.__LENGTH__,
      });
    }
  );
  panelDiv.append(div1);

  const div2 = addBinarySwitch(
    'Comet-Asteroid Loading Mode?',
    'Async (Start Before Loaded)',
    'Sync (Wait Till Loaded)',
    true,
    () => {
      setOptions({
        __sbnViewer__cometAsteroidLoadingMode:
          (getAllOptions().__sbnViewer__cometAsteroidLoadingMode + 1) %
          ECometAsteroidLoadingMode.__LENGTH__,
      });
    },
    'planet-sync'
  );
  panelDiv.append(div2);

  const div3 = addBinarySwitch(
    'Comet-Asteroid Abundance Representation Mode?',
    'Toy Model',
    'Real World Proportions',
    true,
    () => {
      setOptions({
        __sbnViewer__cometAsteroidAbundanceRepresentationMode:
          (getAllOptions()
            .__sbnViewer__cometAsteroidAbundanceRepresentationMode +
            1) %
          ECometAsteroidAbundanceRepresentationMode.__LENGTH__,
      });
    },
    'planet-sync'
  );
  panelDiv.append(div3);

  //
  container.append(panelDiv);
};
