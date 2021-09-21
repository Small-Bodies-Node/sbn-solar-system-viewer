import { addGlobalStyles } from './add-global-styles';
import { setOptions } from '../utils/set-options';
import { getAllOptionsNumbers } from '../utils/get-all-options';
import { IOptionsNumbers } from '../../options';
import { createThreeColumnContainer } from './create-three-column-container';

/**
 * To generate input fields to be placed neatly within the settings panel
 * like so:
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
export const createTitledInput = (
  title: string,
  key: keyof IOptionsNumbers
) => {
  // --->>

  addGlobalStyles();

  // Create handles for container divs
  const {
    threeColumnContainerDiv,
    firstColumnDiv,
    secondColumnDiv,
    thirdColumnDiv,
  } = createThreeColumnContainer();

  // Add title to first div
  firstColumnDiv.innerHTML = `<span>${title}</span>`;

  // Inject input field into second div
  const inputField = document.createElement('input');
  inputField.style.setProperty('min-width', '10px');
  inputField.style.setProperty('max-width', '50px');
  inputField.style.setProperty('min-height', '10px');
  inputField.style.setProperty('height', '30px');
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
        alert('Something went horribly wrong with your logic');
      }
    }, 0);
  };

  // Finish
  return threeColumnContainerDiv;
};
