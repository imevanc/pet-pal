import type { NextPage } from "next";
import React from "react";
import AnnouncementsPage from "../components/AnnouncementsPage/AnnouncementsPage";
import { ANNOUNCEMENTS } from "../data/ANNOUNCEMENTS";
import { PencilSquareIcon, CheckBadgeIcon } from "@heroicons/react/20/solid";

interface Announcement {
  content: string;
  target: string;
  date: string;
  datetime: string;
  iconBackground: string;
  icon: typeof PencilSquareIcon | typeof CheckBadgeIcon;
}

const Announcements: NextPage = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [recordsPerPage] = React.useState<number>(7);

  const indexOfLastRecord: number = currentPage * recordsPerPage;
  const indexOfFirstRecord: number = indexOfLastRecord - recordsPerPage;
  const currentAnnouncements: Announcement[] = ANNOUNCEMENTS.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const nPages: number = Math.ceil(ANNOUNCEMENTS.length / recordsPerPage);
  const pageNumbers: number[] = [...Array.from(Array(nPages + 1).keys())].slice(
    1
  );

  const nextPage = (
    currentPage: number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
    nPages: number
  ): void => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = (
    currentPage: number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  ): void => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <AnnouncementsPage
      currentAnnouncements={currentAnnouncements}
      pageNumbers={pageNumbers}
      nPages={nPages}
      setPageButtons={{ nextPage, prevPage }}
      currentPageState={{ currentPage, setCurrentPage }}
    />
  );
};

export default Announcements;
