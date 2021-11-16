import { addGoogleFont } from '../css/add-google-font';
import { addGlobalStyles } from '../css/add-global-styles';

let isGlobalPropertiesSet = false;

/**
 * Function to inject global properties into the document head
 * This mainly concerns:
 * - Global styles
 * - Third-party scripts
 * - Third-party css
 */
export const addGlobalProperties = async () => {
  // --->>

  // Only run this function once
  if (isGlobalPropertiesSet) return;
  isGlobalPropertiesSet = true;

  // Inject global styles into head
  addGlobalStyles();

  // Inject 3rd-Party Fonts
  addGoogleFont('css2?family=Odibee+Sans');
  addGoogleFont('icon?family=Material+Icons');
  addGoogleFont('icon?family=Material+Icons+Outlined');

  // Make sure threeJs v128 is present
  // At one point I thought about adding threeJs dynamically
  // if not already present; later, I decided this was too complicated
  // so if you want to use UMD, you have to add link for three.js v128
  // @ts-ignore
  if (window.__THREE__ !== '128') {
    console.log('This is not supposed to happen!');
  }
};
