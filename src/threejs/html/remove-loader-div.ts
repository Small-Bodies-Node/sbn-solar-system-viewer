import { loaderDivId } from './get-loader-div';

const fadeOutTimeMs = 3000;

export const removeLoaderDiv = () => {
  // --->>>

  const loaderDiv = document.getElementById(loaderDivId);
  loaderDiv?.style.setProperty(
    'transition',
    `opacity ${fadeOutTimeMs}ms ease-in-out`
  );
  loaderDiv?.style.setProperty('opacity', '0');
  setTimeout(() => {
    loaderDiv?.style.setProperty('display', 'none');
  }, fadeOutTimeMs);
};
