import { addGlobalStyles } from './add-global-styles';
import { getAllOptions, getAllOptionsBooleans } from '../utils/get-all-options';
import { setOptions } from '../utils/set-options';
import { IOptionsBooleans } from '../../options';
import { addThreeColumnContainer } from './add-three-column-container';

/**
 * Function to create a binary switch with text for the two different states
 * and a callback used to set local-storage options
 * This switch is intended for the settings panel; you create it with the
 * text for the title of the switch (goes on left) and for the two different states.
 * The callback will be used to change the state of options
 */

export const addTitledSwitch = (
  title: string,
  onText: string,
  offText: string,
  key: keyof IOptionsBooleans,
  cb = (_isChecked: boolean) => {}
): HTMLDivElement => {
  /**
   * Construct and return wrapped switch of the following format
   *
   *
    <div class="three-column-container">
      <div class="first-column"> Title Text </div>
      <div class="second-column">
        <label class="switch">
          <input type="checkbox">
          <span class="slider"></span>
        </label>
      <div>
      <div class="third-column"> On/Off Text </div>
    <div>
   *
   */

  // Put a lot of the styles in the global file
  addGlobalStyles();

  //
  const {
    threeColumnContainerDiv,
    firstColumnDiv,
    secondColumnDiv,
    thirdColumnDiv,
  } = addThreeColumnContainer();

  const isChecked = getAllOptionsBooleans()[key];
  firstColumnDiv.innerHTML = `<span>${title}</span>`;
  thirdColumnDiv.innerHTML = `<span>${isChecked ? onText : offText}</span>`;

  // Create the switch inner workings
  const switchLabel = document.createElement('label');
  switchLabel.classList.add('switch');
  secondColumnDiv.append(switchLabel);

  const switchInput = document.createElement('input');
  switchInput.type = 'checkbox';
  switchInput.checked = isChecked;
  switchLabel.append(switchInput);

  const sliderSpan = document.createElement('span');
  sliderSpan.classList.add('slider');
  switchLabel.append(sliderSpan);

  // Add listener to toggle text upon switch clicks
  switchInput.addEventListener('click', () => {
    setTimeout(() => {
      // Toggle state and display text
      setOptions({ [key]: !getAllOptions()[key] });
      const isChecked = switchInput.checked;
      thirdColumnDiv.innerHTML = `${isChecked ? onText : offText}`;
      // Run custom callback
      cb(isChecked);
    }, 0);
  });

  return threeColumnContainerDiv;
};
