/**
 * Constants for widget
 */

import { auToMeters } from './conversions';

/**
 * Properties common to all html buttons
 */
export const buttonBackgroundColor = 'rgba(255,255,255,0.2)';
export const buttonClickedBackgroundColor = 'rgba(255,255,255,0.4)';
export const buttonTextColor = 'rgba(255,255,255,0.8)';
export const buttonCursorType = 'pointer';
export const buttonPadding = '10px';
export const buttonFadeInSpecs = '1s ease-in-out';

// These two properties must be coordinated together using e.g. google.fonts
export const buttonFontFamily = "'Odibee Sans', cursive";
export const buttonCssUrl =
  'https://fonts.googleapis.com/css2?family=Odibee+Sans';

/**
 * Root url of file server with copy of /images
 */
export const assetsBaseUrl: string = getAssetsBaseUrl();

function getAssetsBaseUrl(): string {
  return `https://sbn-solar-system-viewer.s3.amazonaws.com`;
  let assetsBaseUrl: string = 'http://localhost:3001';

  try {
    // @ts-ignore
    if (__IS_PRODUCTION__) {
      assetsBaseUrl = `https://sbn-solar-system-viewer.s3.amazonaws.com`;
    }
  } catch (err) {
    //
  }

  console.log('assetsBaseUrl: ', assetsBaseUrl);

  return assetsBaseUrl;
}

/**
 * Often handy to use this as a scale
 */
export const au = auToMeters(1);
