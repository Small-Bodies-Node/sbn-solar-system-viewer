import { loaderDivId } from './add-loader-div';

export const setLoaderDivVisibility = (
  isVisible: boolean,
  fadeOutTimeMs = 3000
) => {
  // --->>>

  const loaderDiv = document.getElementById(loaderDivId);
  loaderDiv?.style.setProperty(
    'transition',
    `opacity ${fadeOutTimeMs}ms ease-in-out`
  );

  // pointer-events:none

  loaderDiv?.style.setProperty('opacity', `${isVisible ? 1 : 0}`);
  /*   setTimeout(() => {
    loaderDiv?.style.setProperty('display', isVisible ? 'block' : 'none');
  }, fadeOutTimeMs); */
};
