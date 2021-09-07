import { v4 as uuidv4 } from 'uuid'; // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

export const settingsPanelId = 'settings-panel-id-' + uuidv4();

/**
 * Adds settings button to top-left of UI
 */
export const addSettingsPanel = (container: HTMLElement) => {
  // --->>>

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
  panelDiv.style.setProperty('background-color', 'pink');
  panelDiv.style.setProperty('display', 'flex');
  panelDiv.style.setProperty('justify-content', 'center');
  panelDiv.style.setProperty('align-items', 'center');
  //

  panelDiv.innerHTML = `
    <div>
      <h1>
        Asteroid Belt Mag Limits
      </h1>

    </div>
  `;

  //
  container.append(panelDiv);
};
