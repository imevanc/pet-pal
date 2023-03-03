export const removeLastPartOfUrl = (url: string): string => {
  return url.slice(0, url.lastIndexOf("/"));
};
