export const prevPage = (
  currentPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
): void => {
  if (currentPage !== 1) setCurrentPage(currentPage - 1);
};
