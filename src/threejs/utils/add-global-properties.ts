import { addGoogleFont } from '../css/add-google-font';
import { addGlobalStyles } from '../css/add-global-styles';

let isGlobalPropertiesSet = false;
const url = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';

/**
 * Function to inject global properties into the document head
 * This mainly concerns:
 * - Global styles
 * - Third-party scripts
 * - Third-party css
 */
export const addGlobalProperties = async () => {
  // --->>

  return new Promise((resolve, reject) => {
    // --->>

    console.log('Debug A');

    // Only run this function once
    if (isGlobalPropertiesSet) return;
    isGlobalPropertiesSet = true;

    console.log('Debug B');

    // Inject global styles into head
    addGlobalStyles();

    console.log('Debug C');

    // Inject 3rd-Party Fonts
    addGoogleFont('css2?family=Odibee+Sans');
    addGoogleFont('icon?family=Material+Icons');
    addGoogleFont('icon?family=Material+Icons+Outlined');

    console.log('Debug D');

    // Make sure threeJs v128 is present
    // @ts-ignore
    if (window.__THREE__ === '128') {
      console.log('Debug E');
      resolve();
    } else {
      console.log('Debug F');
      const threeJsScript = document.createElement('script');
      document.head.append(threeJsScript);
      threeJsScript.onload = () => {
        console.log('Debug G');
        resolve();
      };
      threeJsScript.onerror = () => {
        console.log('Debug H');
        reject();
      };
      threeJsScript.src = url;
    }
  });
};
