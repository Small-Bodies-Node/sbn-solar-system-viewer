/**
 * Function to inject global styles into the document head
 * Make sure to prefix all of your global class names, etc. with
 * something unique to this widget to avoid clashes
 * E.g. sbn-solar-system-viewer-
 */

let isGlobalStylesSet = false;

export const addGlobalStyles = () => {
  // --->>>

  // Only set once
  if (isGlobalStylesSet) return;

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
  `;

  document.head.append(globalStyle);
};
