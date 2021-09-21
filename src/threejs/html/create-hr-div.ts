/**
 * Generates simple 'hr' div
 */
export function getHrDiv() {
  const hrDiv = document.createElement('div');
  hrDiv.style.setProperty('width', '100%');
  hrDiv.style.setProperty('height', '1px');
  hrDiv.style.setProperty('background-color', 'black');
  return hrDiv;
}
