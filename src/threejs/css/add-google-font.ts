/**
 * Function to inject link into header for google font
 * We use a dictionary to track the fonts we've added so
 * we don't needlessly add it more than once
 *
 * The fontName is everything passed after the base url:
 * https://fonts.googleapis.com/
 *
 * E.g. to load:
 * https://fonts.googleapis.com/icon?family=Material+Icons
 *
 * ... you need a fontName of 'icon?family=Material+Icons'
 */

const fontsAdded: string[] = [];

export const addGoogleFont = (fontName: string) => {
  // --->>>

  if (fontsAdded.includes(fontName)) return;
  fontsAdded.push(fontName);

  const newLink = document.createElement('link');
  newLink.rel = 'stylesheet';
  newLink.href = `https://fonts.googleapis.com/${fontName}`;
  document.head.append(newLink);
};
