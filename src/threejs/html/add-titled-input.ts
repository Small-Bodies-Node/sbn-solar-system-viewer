import { addGlobalStyles } from './add-global-styles';
import { setOptions } from '../utils/set-options';
import { getAllOptions, getAllOptionsNumbers } from '../utils/get-all-options';
import { IOptions, IOptionsNumbers } from '../../options';
import { addThreeColumnContainer } from './add-three-column-container';

/**
 *
 */

export const addTitledInput = (
  title: string,
  key: keyof IOptionsNumbers,
  cb = (_isChecked: boolean) => {}
): HTMLDivElement => {
  /**
   * Construct and return wrapped input field of the following format
   *
    <div class="three-column-container">
      <div class="first-column"> Title Text </div>
      <div class="second-column">
          <input type="text">
      <div>
      <div class="third-column"> BLANK </div>
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

  firstColumnDiv.innerHTML = `<span>${title}</span>`;

  const inputField = document.createElement('input');
  inputField.style.setProperty('min-width', '10px');
  inputField.style.setProperty('max-width', '50px');
  inputField.style.setProperty('min-height', '10px');
  inputField.style.setProperty('height', '30px');
  // inputField.style.setProperty('background-color', 'red');
  inputField.id = 'input-id-123';
  inputField.value = getAllOptionsNumbers()[key] + '';
  secondColumnDiv.append(inputField);

  // Add listener to set input-field value on any change
  inputField.oninput = () => {
    setTimeout(() => {
      try {
        const numVal = parseInt(inputField.value);
        setOptions({ [key]: numVal });
      } catch (err) {
        alert('Denied !!!');
      }
    }, 0);
  };
  return threeColumnContainerDiv;
};
