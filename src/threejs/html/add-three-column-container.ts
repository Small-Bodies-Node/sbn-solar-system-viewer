import { v4 as uuidv4 } from 'uuid'; // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
import { addGlobalStyles } from './add-global-styles';

/**
 * Function to create a div with three columns in order to wrap around switches and/or
 * input fields and look neat in the settings menu
 */

export const addThreeColumnContainer = (id = 'placeholder-id' + uuidv4()) => {
  /**
   * Construct and return divs of the following format
   *
   *
    <div class="three-column-container">
      <div class="first-column"> </div>
      <div class="second-column"></div>
      <div class="third-column"> </div>
    <div>
   *
   */

  // Put a lot of the styles in the global file
  addGlobalStyles();

  // Create the container
  const threeColumnContainerDiv = document.createElement('div');
  threeColumnContainerDiv.classList.add('three-column-container');
  threeColumnContainerDiv.style.setProperty('overflow-x', 'scroll');
  threeColumnContainerDiv.style.setProperty('width', '100%');
  threeColumnContainerDiv.style.setProperty('height', '34px');
  threeColumnContainerDiv.style.setProperty('display', 'flex');
  threeColumnContainerDiv.style.setProperty('white-space', 'nowrap');
  threeColumnContainerDiv.id = id;

  // Params for column widths
  const firstColFlexBasisPxls = 280;
  const secondColFlexBasisPxls = 70;

  // Create its immediate children
  const firstColumnDiv = document.createElement('div');
  firstColumnDiv.classList.add('first-column');
  firstColumnDiv.style.setProperty('display', 'flex');
  firstColumnDiv.style.setProperty('align-items', 'center');
  firstColumnDiv.style.setProperty('justify-content', 'right');
  firstColumnDiv.style.setProperty('flex', `1 0 ${firstColFlexBasisPxls}px`);
  firstColumnDiv.style.setProperty('padding-right', '10px');
  firstColumnDiv.style.setProperty('overflow-x', 'scroll');
  threeColumnContainerDiv.append(firstColumnDiv);

  const secondColumnDiv = document.createElement('div');
  secondColumnDiv.classList.add('second-column');
  secondColumnDiv.style.setProperty('display', 'flex');
  secondColumnDiv.style.setProperty('align-items', 'center');
  secondColumnDiv.style.setProperty('justify-content', 'center');
  secondColumnDiv.style.setProperty('flex', `0 0 ${secondColFlexBasisPxls}px`);
  threeColumnContainerDiv.append(secondColumnDiv);

  const thirdColumnDiv = document.createElement('div');
  thirdColumnDiv.classList.add('third-column');
  thirdColumnDiv.style.setProperty('display', 'flex');
  thirdColumnDiv.style.setProperty('align-items', 'center');
  thirdColumnDiv.style.setProperty('justify-content', 'left');
  thirdColumnDiv.style.setProperty(
    'flex',
    `1 0 calc(100% - ${secondColFlexBasisPxls}px - ${firstColFlexBasisPxls}px - 20px)`
  );
  thirdColumnDiv.style.setProperty('padding-left', '10px');
  threeColumnContainerDiv.append(thirdColumnDiv);

  return {
    threeColumnContainerDiv,
    firstColumnDiv,
    secondColumnDiv,
    thirdColumnDiv,
  };
};
