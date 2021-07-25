/**
 * Wrapper around technique to fetch a worker script in a way
 * that does not require CORS config
 */
export function getWorkerURL(url: string) {
  const content = `importScripts( "${url}" );`;
  return URL.createObjectURL(new Blob([content], { type: 'text/javascript' }));
}
