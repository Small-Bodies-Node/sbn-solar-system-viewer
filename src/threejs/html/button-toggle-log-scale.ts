import { injectCommonButtonProperties } from './inject-common-button-properties';

/**
 *
 * @param container
 */
export const buttonToggleLogScale = (
  container: HTMLElement,
  onClickCB: () => void
): HTMLElement => {
  // --->>>

  // Warning
  if (!container) throw new Error('Canvas Container is Falsy!');

  // Set properties unique to this button
  const button = document.createElement('div');
  button.innerText = 'Toggle Log Scale';
  button.style.setProperty('bottom', '10px');
  button.style.setProperty('left', '10px');

  // Set properties common to all buttons; append to container when ready
  injectCommonButtonProperties(button, onClickCB);

  // Finish him
  return button;
};
