import { addGlobalStyles } from './add-global-styles';

/**
 * Create div in which messages will be displayed
 */
export function createDisplayMessageDiv() {
  // --->>

  addGlobalStyles();

  const displayMessageDiv = document.createElement('div');
  displayMessageDiv.id = 'message-field';

  displayMessageDiv.style.setProperty('position', 'absolute');
  displayMessageDiv.style.setProperty('left', '0%');
  displayMessageDiv.style.setProperty('right', '0px');
  displayMessageDiv.style.setProperty('bottom', '0px');
  displayMessageDiv.style.setProperty('height', '40px');
  displayMessageDiv.style.setProperty('display', 'flex');
  displayMessageDiv.style.setProperty('justify-content', 'flex-end');
  displayMessageDiv.style.setProperty('align-items', 'center');
  displayMessageDiv.style.setProperty('padding-right', '10px');
  displayMessageDiv.style.setProperty(
    'background-color',
    'rgba(255,255,255,0.1)'
  );
  displayMessageDiv.style.setProperty('color', 'white');

  const updateMessageCb = (msg: string) => {
    displayMessageDiv.innerHTML = msg;
  };

  return { displayMessageDiv, updateMessageCb };
}
