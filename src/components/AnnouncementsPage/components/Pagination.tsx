interface CurrentPageState {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

interface SetPageButtons {
  nextPage: (
    currentPage: number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
    nPages: number
  ) => void;
  prevPage: (
    currentPage: number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  ) => void;
}

interface PaginationProps {
  currentPageState: CurrentPageState;
  setPageButtons: SetPageButtons;
  pageNumbers: number[];
  nPages: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPageState,
  setPageButtons,
  pageNumbers,
  nPages,
}) => {
  const { currentPage, setCurrentPage } = { ...currentPageState };
  const { nextPage, prevPage } = { ...setPageButtons };

  return (
    <nav
      className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">Page {currentPage}</span>{" "}
          <span className="font-medium">out of {pageNumbers.length}</span>
        </p>
      </div>
      <div className="flex flex-1 justify-between sm:justify-end">
        <button
          disabled={currentPage === 1}
          onClick={() => prevPage(currentPage, setCurrentPage)}
          className="relative ml-10 w-24 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:bg-gray-200"
        >
          <p className="w-full text-center\">Previous</p>
        </button>
        <button
          disabled={currentPage === nPages}
          onClick={() => nextPage(currentPage, setCurrentPage, nPages)}
          className="relative ml-10 w-24 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:bg-gray-200"
        >
          <p className="w-full text-center\">Next</p>
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
