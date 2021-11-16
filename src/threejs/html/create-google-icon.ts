type TLabel = 'settings';
interface IIconOptions {
  sizePxls: number;
  color: string;
  isOutlined: boolean;
}

/**
 * Generates simple google icon span of the form:
 *
  <span class="material-icons[-outlined]">
    [label]
  </span>
 *
 */
export function createGoogleIcon(
  label: TLabel,
  options?: Partial<IIconOptions>
) {
  const { sizePxls, isOutlined, color } = {
    // Default vals
    sizePxls: 18,
    color: 'black',
    isOutlined: false,
    // Passed vals
    ...options,
  };
  const iconSpan = document.createElement('span');
  iconSpan.innerHTML = `${label}`;
  iconSpan.classList.add(
    isOutlined ? 'material-icons-outlined' : 'material-icons'
  );
  iconSpan.style.setProperty('font-size', sizePxls + 'px');
  iconSpan.style.setProperty('color', color);
  iconSpan.style.setProperty('cursor', 'pointer');
  return iconSpan;
}
