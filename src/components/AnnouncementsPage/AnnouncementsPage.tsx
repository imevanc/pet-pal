import Announcements from "./components/Announcements";
import Pagination from "./components/Pagination";
import { PencilSquareIcon, CheckBadgeIcon } from "@heroicons/react/20/solid";

interface Announcement {
  content: string;
  target: string;
  date: string;
  datetime: string;
  iconBackground: string;
  icon: typeof PencilSquareIcon | typeof CheckBadgeIcon;
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
  currentAnnouncements: Announcement[];
  currentPageState: CurrentPageState;
  setPageButtons: SetPageButtons;
  pageNumbers: number[];
  nPages: number;
}

const AnnouncementsPage: React.FC<AnnouncementsPageProps> = ({
  currentAnnouncements,
  currentPageState,
  setPageButtons,
  pageNumbers,
  nPages,
}) => {
  return (
    <div className="mx-auto max-w-7xl pt-8 px-4 sm:px-6 lg:px-8 lg:pt-12 h-[92vh] overflow-y-scroll md:overflow-y-auto">
      <div className="h-full flex flex-col justify-between">
        <Announcements currentAnnouncements={currentAnnouncements} />
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
