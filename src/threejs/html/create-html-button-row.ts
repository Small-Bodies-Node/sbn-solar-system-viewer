import { injectCommonButtonProperties } from './inject-common-button-properties';

/**
 *
 */
export const createHtmlButtonRow = (
  buttonInputs: {
    cb: () => any;
    label: string;
  }[]
) => {
  // --->>

  // Warning
  // if (!container) throw new Error('Canvas Container is Falsy!');

  // Create wrapper container
  const buttonWrapperDiv = document.createElement('div');
  buttonWrapperDiv.style.setProperty('display', 'flex');
  buttonWrapperDiv.style.setProperty('flex-direction', 'column');
  buttonWrapperDiv.style.setProperty('gap', '12px');
  buttonWrapperDiv.style.setProperty('position', 'absolute');
  buttonWrapperDiv.style.setProperty('top', '100px');
  buttonWrapperDiv.style.setProperty('bottom', '100px');
  buttonWrapperDiv.style.setProperty('right', '0px');
  buttonWrapperDiv.style.setProperty('width', '120px');
  // container.append(buttonWrapperDiv);

  // Map inputs to stylized buttons
  const buttonDivs = buttonInputs.map(buttonInput => {
    // Set properties unique to this button
    const buttonDiv = document.createElement('div');
    buttonDiv.innerText = buttonInput.label;
    buttonDiv.style.setProperty('display', 'flex');
    buttonDiv.style.setProperty('flex', '1');
    buttonDiv.style.setProperty('justify-content', 'center');
    buttonDiv.style.setProperty('align-items', 'center');
    return injectCommonButtonProperties(buttonDiv, buttonInput.cb);
  });

  // Add buttons to wrapper in original order
  buttonDivs.forEach(buttonDiv => {
    buttonWrapperDiv.append(buttonDiv);
  });

  buttonWrapperDiv.id = 'buttons-wrapper';

  return buttonWrapperDiv;
};
