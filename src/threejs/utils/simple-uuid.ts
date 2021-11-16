let count = 0;

export const simpleUuid = () => {
  count++;
  return 'sbn-solar-system-viewer-' + count;
};
