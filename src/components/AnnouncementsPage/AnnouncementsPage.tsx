import Announcements from "./components/Announcements";
import Pagination from "./components/Pagination";
import { AnnouncementIF } from "../../interfaces/AnnouncementIF";
import { CurrentPageStateIF } from "../../interfaces/CurrentPageStateIF";

interface AnnouncementsPageProps {
  currentAnnouncements: AnnouncementIF[];
  currentPageState: CurrentPageStateIF;
  pageNumbers: number[];
  nPages: number;
}

const AnnouncementsPage: React.FC<AnnouncementsPageProps> = ({
  currentAnnouncements,
  currentPageState,
  pageNumbers,
  nPages,
}) => {
  return (
    <div className="mx-auto max-w-7xl pt-4 px-4 sm:px-6 lg:px-8 h-[90vh]">
      <div className="h-full flex flex-col justify-between">
        <Announcements currentAnnouncements={currentAnnouncements} />
        <Pagination
          currentPageState={currentPageState}
          pageNumbers={pageNumbers}
          nPages={nPages}
        />
      </div>
    </div>
  );
};

export default AnnouncementsPage;
