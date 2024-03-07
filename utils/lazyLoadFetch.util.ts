export const lazyLoadFetch = (onLoad: () => void, timeout: number = 200) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  }).then(onLoad)
}