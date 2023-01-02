export const getYear = (): string => {
  const date: Date = new Date();
  return date.getFullYear().toString();
};
