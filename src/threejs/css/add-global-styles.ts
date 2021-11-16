import { addGoogleFont } from './add-google-font';

let isGlobalStylesSet = false;

/**
 * Function to inject global styles into the document head
 * Make sure to prefix all of your global class names, etc. with
 * something unique to this widget to avoid clashes
 * E.g. sbn-solar-system-viewer-
 */
export const addGlobalStyles = () => {
  // --->>

  // Only run this function once
  if (isGlobalStylesSet) return;
  isGlobalStylesSet = true;

  // Some params
  const switchOnColor = 'red';
  const switchOffColor = 'blue';

  // Create style element
  const globalStyle = document.createElement('style');
  globalStyle.innerHTML = `
    @keyframes sbn-solar-system-viewer-fade-in {
      from { opacity: 0; }
      to   { opacity: 1; }
    }

    @keyframes sbn-solar-system-viewer-loader-spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .sbn-solar-system-viewer-input:focus{
        outline-width: 0;
    }

    /**
     *
     * This is for styling the switches
     *
     */
    .three-column-container {
      width: 100%;
      height: 34px;
      display: flex;
      white-space: nowrap;
    }

    .three-column-container .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }

    /* Hide default HTML checkbox */
    .three-column-container .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    /* The slider */
    .three-column-container .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      background-color: ${switchOnColor};
      -webkit-transition: .4s;
      transition: .4s;
    }

    .three-column-container .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }

    .three-column-container input:checked + .slider {
      background-color: #2196F3;
      background-color: ${switchOffColor};
    }

    .three-column-container input:focus + .slider {
      box-shadow: 0 0 1px #2196F3;
    }

    .three-column-container input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
  `;

  document.head.append(globalStyle);
};
