import Announcements from "./components/Announcements";
import Pagination from "./components/Pagination";
import { AnnouncementIF } from "../../interfaces/AnnouncementIF";
import { CurrentPageStateIF } from "../../interfaces/CurrentPageStateIF";

interface AnnouncementsPagePropsIF {
  currentAnnouncements: AnnouncementIF[];
  currentPageState: CurrentPageStateIF;
  pageNumbers: number[];
  nPages: number;
}

const AnnouncementsPage: React.FC<AnnouncementsPagePropsIF> = ({
  currentAnnouncements,
  currentPageState,
  pageNumbers,
  nPages,
}) => {
  return (
    <div className="grow shrink-0 ">
      <div className="mx-auto max-w-7xl pt-4 px-4 sm:px-6 lg:px-8">
        <div className="h-full flex flex-col justify-between">
          <Announcements currentAnnouncements={currentAnnouncements} />
          <Pagination
            currentPageState={currentPageState}
            pageNumbers={pageNumbers}
            nPages={nPages}
          />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsPage;
