import type { NextPage } from "next";
import React from "react";
import AnnouncementsPage from "../components/AnnouncementsPage/AnnouncementsPage";
import { ANNOUNCEMENTS } from "../data/ANNOUNCEMENTS";
import { AnnouncementIF } from "../interfaces/AnnouncementIF";

const Announcements: NextPage = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [recordsPerPage] = React.useState<number>(7);

  const indexOfLastRecord: number = currentPage * recordsPerPage;
  const indexOfFirstRecord: number = indexOfLastRecord - recordsPerPage;
  const currentAnnouncements: AnnouncementIF[] = ANNOUNCEMENTS.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const nPages: number = Math.ceil(ANNOUNCEMENTS.length / recordsPerPage);
  const pageNumbers: number[] = [...Array.from(Array(nPages + 1).keys())].slice(
    1
  );

  return (
    <AnnouncementsPage
      currentAnnouncements={currentAnnouncements}
      pageNumbers={pageNumbers}
      nPages={nPages}
      currentPageState={{ currentPage, setCurrentPage }}
    />
  );
};

export default Announcements;
