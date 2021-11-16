import { injectCommonButtonProperties } from './inject-common-button-properties';

/**
 *
 * @param container
 */
export const buttonToggleToyScale = (
  container: HTMLElement,
  onClickCB: () => void
): HTMLElement => {
  // --->>>

  // Warning
  if (!container) throw new Error('Canvas Container is Falsy!');

  // Set properties unique to this button
  const button = document.createElement('div');
  button.innerText = 'Toggle Toy Scale';
  button.style.setProperty('top', '10px');
  button.style.setProperty('left', '50%');
  button.style.setProperty('transform', 'translateX(-50%)');

  // Set properties common to all buttons; append to container when ready
  injectCommonButtonProperties(button, onClickCB);

  // Finish him
  return button;
};
