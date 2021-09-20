import { addGlobalStyles } from './add-global-styles';
import { getAllOptions } from '../utils/get-all-options';
import { setOptions } from '../utils/set-options';
import { defaultOptions } from '../../options';

/**
 * Function to create a binary switch with text for the two different states
 * and a callback used to set local-storage options
 * This switch is intended for the settings panel; you create it with the
 * text for the title of the switch (goes on left) and for the two different states.
 * The callback will be used to change the state of options
 */

export const addBinarySwitch = (
  title: string,
  onText: string,
  offText: string,
  isInitiallyChecked: boolean,
  stateUpdateCallBack: () => any,
  id: string = `switch_created_${new Date().toISOString()}`.replace(/\s+/g, '')
): HTMLDivElement => {
  /**
   * Construct and return switch of the following format
   *
   *
    <div class="switch-text-container">
      <div class="title-text"> Title Text </div>
      <div class="switch-container">
        <label class="switch">
          <input type="checkbox">
          <span class="slider"></span>
        </label>
      <div>
      <div class="on-off-text"> On/Off Text </div>
    <div>
   *
   */

  // Put a lot of the styles in the global file
  addGlobalStyles();

  // Create the container
  const switchTextContainerDiv = document.createElement('div');
  switchTextContainerDiv.classList.add('switch-text-container');
  switchTextContainerDiv.style.setProperty('overflow-x', 'scroll');
  switchTextContainerDiv.id = id;

  // Create its immediate children
  const titleTextDiv = document.createElement('div');
  titleTextDiv.classList.add('title-text');
  titleTextDiv.style.setProperty('justify-content', 'right');
  titleTextDiv.style.setProperty('flex', '1 0 220px');
  titleTextDiv.style.setProperty('margin-right', '10px');
  titleTextDiv.style.setProperty('overflow-x', 'scroll');
  titleTextDiv.innerHTML = `<span>${title}</span>`;
  switchTextContainerDiv.append(titleTextDiv);

  const switchContainerDiv = document.createElement('div');
  switchContainerDiv.classList.add('switch-container');
  switchContainerDiv.style.setProperty('flex', '0 0 70px');
  switchTextContainerDiv.append(switchContainerDiv);

  const onOffTextDiv = document.createElement('div');
  onOffTextDiv.classList.add('on-off-text');
  onOffTextDiv.style.setProperty('justify-content', 'left');
  onOffTextDiv.style.setProperty('flex', '1 0 calc(100% - 70px - 220px - 5px)');
  onOffTextDiv.style.setProperty('margin-left', '10px');
  onOffTextDiv.innerHTML = ` ${onText} `;
  switchTextContainerDiv.append(onOffTextDiv);

  // Create the switch inner workings
  const switchLabel = document.createElement('label');
  switchLabel.classList.add('switch');
  switchContainerDiv.append(switchLabel);

  const switchInput = document.createElement('input');
  switchInput.type = 'checkbox';
  switchInput.checked = isInitiallyChecked;
  switchLabel.append(switchInput);

  const sliderSpan = document.createElement('span');
  sliderSpan.classList.add('slider');
  switchLabel.append(sliderSpan);

  // Add listener to toggle text upon switch clicks
  switchInput.addEventListener('click', () => {
    setTimeout(() => {
      //

      //
      stateUpdateCallBack();
      const isSwitchChecked = switchInput.checked;
      onOffTextDiv.innerHTML = `${isSwitchChecked ? onText : offText}`;
    }, 0);
  });

  return switchTextContainerDiv;
};
