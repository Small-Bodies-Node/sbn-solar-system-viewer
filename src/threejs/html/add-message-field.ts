import { buttonFontFamily } from '../utils/constants';
import { addGlobalStyles } from './add-global-styles';

/**
 *
 */
export function addMessageField(container: HTMLElement): (msg: string) => void {
  // --->>

  addGlobalStyles();

  const div = document.createElement('div');
  div.id = 'message-field';

  div.style.setProperty('position', 'absolute');
  // div.style.setProperty('top', '0px');
  // div.style.setProperty('top', '0px');
  div.style.setProperty('left', '50%');
  div.style.setProperty('right', '0px');
  div.style.setProperty('bottom', '0px');
  div.style.setProperty('height', '40px');
  div.style.setProperty('display', 'flex');
  div.style.setProperty('justify-content', 'flex-end');
  div.style.setProperty('align-items', 'center');
  div.style.setProperty('background-color', 'green');

  container.append(div);

  const cb = (msg: string) => {
    div.innerHTML = msg;
  };

  return cb;
}
