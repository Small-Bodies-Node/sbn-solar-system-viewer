import { injectCommonButtonProperties } from './inject-common-button-properties';

/**
 *
 * @param container
 */
export const buttonToggleAdaptiveAsteroids = (
  container: HTMLElement,
  onClickCB: () => void
): HTMLElement => {
  // --->>>

  // Warning
  if (!container) throw new Error('Canvas Container is Falsy!');

  // Set properties unique to this button
  const button = document.createElement('div');
  button.innerText = 'Toggle Adaptive Orbits';
  button.style.setProperty('bottom', '10px');
  button.style.setProperty('left', '10px');

  // Set properties common to all buttons; append to container when ready
  // injectCommonButtonProperties(button, container, onClickCB);

  // Finish him
  return button;
};
