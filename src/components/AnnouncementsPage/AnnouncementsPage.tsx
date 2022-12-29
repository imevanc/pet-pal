import Announcements from "./components/Announcements";
import Pagination from "./components/Pagination";
import {
  CheckIcon,
  HandThumbUpIcon,
  UserIcon,
} from "@heroicons/react/20/solid";

interface CurrentRecord {
  content: string;
  target: string;
  date: string;
  datetime: string;
  icon: typeof CheckIcon | typeof HandThumbUpIcon | typeof UserIcon;
  iconBackground: string;
}

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

interface AnnouncementsPageProps {
  currentRecords: CurrentRecord[];
  currentPageState: CurrentPageState;
  setPageButtons: SetPageButtons;
  pageNumbers: number[];
  nPages: number;
}

const AnnouncementsPage: React.FC<AnnouncementsPageProps> = ({
  currentRecords,
  currentPageState,
  setPageButtons,
  pageNumbers,
  nPages,
}) => {
  console.log(currentRecords);
  return (
    <div className="mx-auto max-w-7xl pt-8 px-4 sm:px-6 lg:px-8 lg:pt-12 h-[92vh] overflow-y-scroll md:overflow-y-auto">
      <div className="h-full flex flex-col justify-between">
        <Announcements currentRecords={currentRecords} />
        <Pagination
          currentPageState={currentPageState}
          setPageButtons={setPageButtons}
          pageNumbers={pageNumbers}
          nPages={nPages}
        />
      </div>
    </div>
  );
};

export default AnnouncementsPage;
