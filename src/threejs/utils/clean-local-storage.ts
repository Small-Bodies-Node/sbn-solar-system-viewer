import { defaultOptions, IOptions } from '../../options';

/**
 * Remove any keys that are not members of optionKeys
 * If a value does not exist for any member of optionKeys
 * then set that value to the default
 *
 */
export const cleanLocalStorage = () => {
  // --->>

  const optionKeys = Object.keys(defaultOptions);

  // Remove key-value pairs where the key is not in optionKeys
  const items = { ...localStorage };

  Object.keys(items).forEach(key => {
    if (!optionKeys.includes(key as any)) localStorage.removeItem(key);
  });

  // Make sure every key has at least a default value
  optionKeys.forEach(key => {
    const val = localStorage.getItem(key);
    if (!val) {
      localStorage.setItem(
        key,
        JSON.stringify(defaultOptions[(key as any) as keyof IOptions])
      );
    } else {
      try {
        const parsedVal = JSON.parse(val);
        if (
          typeof parsedVal !==
          typeof defaultOptions[(key as any) as keyof IOptions]
        ) {
          localStorage.setItem(
            key,
            JSON.stringify(defaultOptions[(key as any) as keyof IOptions])
          );
        }
      } catch (err) {
        console.log('Local-storage mishap');
        return;
      }
    }
  });
};
