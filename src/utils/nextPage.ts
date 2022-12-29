export const nextPage = (
  currentPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
  nPages: number
): void => {
  if (currentPage !== nPages) setCurrentPage(currentPage + 1);
};
