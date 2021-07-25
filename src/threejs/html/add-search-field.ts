import { buttonFontFamily } from '../utils/constants';
import { addGlobalStyles } from './add-global-styles';

/**
 *
 */
export const addSearchField = (
  container: HTMLElement,
  onEnter: (value: string) => void
) => {
  //

  addGlobalStyles();

  const div = document.createElement('div');
  const input = document.createElement('input');

  div.style.setProperty('position', 'absolute');
  div.style.setProperty('top', '10px');
  div.style.setProperty('left', '10px');
  div.style.setProperty('width', '120px');
  div.style.setProperty('height', '40px');
  div.style.setProperty('background-color', 'green');
  //
  input.value = 'Ceres';
  input.style.setProperty('width', '100%');
  input.style.setProperty('height', '100%');
  input.style.setProperty('font-size', '20px');
  input.style.setProperty('font-family', buttonFontFamily);
  input.style.setProperty('font-size', '20px');
  input.classList.add('sbn-solar-system-viewer-input');
  input.addEventListener('keypress', e => {
    // console.log('e', e, input.value);
    if (e.key === 'Enter') {
      onEnter(input.value);
    }
  });
  div.append(input);
  container.append(div);
};
