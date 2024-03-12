export const getIndexFromUrl = (url: string) => {
  return url.split('/').at(-2) || 1;
}