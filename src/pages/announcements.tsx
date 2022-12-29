import type { NextPage } from "next";
import React from "react";
import {
  CheckIcon,
  HandThumbUpIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import AnnouncementsPage from "../components/AnnouncementsPage/AnnouncementsPage";

interface CurrentAnnouncement {
  content: string;
  target: string;
  date: string;
  datetime: string;
  icon: typeof CheckIcon | typeof HandThumbUpIcon | typeof UserIcon;
  iconBackground: string;
}

const Announcements: NextPage = () => {
  const announcements = [
    {
      id: 1,
      content: "Evan",
      target: "has the idea.",
      href: "#",
      date: "Sep 20",
      datetime: "2020-09-20",
      icon: UserIcon,
      iconBackground: "bg-gray-400",
    },
    {
      id: 1,
      content: "Evan",
      target: "has the idea.",
      href: "#",
      date: "Sep 20",
      datetime: "2020-09-20",
      icon: UserIcon,
      iconBackground: "bg-gray-400",
    },
    {
      id: 1,
      content: "Evan",
      target: "has the idea.",
      href: "#",
      date: "Sep 20",
      datetime: "2020-09-20",
      icon: UserIcon,
      iconBackground: "bg-gray-400",
    },
    {
      id: 1,
      content: "Evan",
      target: "has the idea.",
      href: "#",
      date: "Sep 20",
      datetime: "2020-09-20",
      icon: UserIcon,
      iconBackground: "bg-gray-400",
    },
    {
      id: 1,
      content: "Evan",
      target: "has the idea.",
      href: "#",
      date: "Sep 20",
      datetime: "2020-09-20",
      icon: UserIcon,
      iconBackground: "bg-gray-400",
    },
    {
      id: 1,
      content: "Evan",
      target: "has the idea.",
      href: "#",
      date: "Sep 20",
      datetime: "2020-09-20",
      icon: UserIcon,
      iconBackground: "bg-gray-400",
    },
    {
      id: 1,
      content: "Evan",
      target: "has the idea.",
      href: "#",
      date: "Sep 20",
      datetime: "2020-09-20",
      icon: UserIcon,
      iconBackground: "bg-gray-400",
    },
    {
      id: 1,
      content: "Evan",
      target: "has the idea.",
      href: "#",
      date: "Sep 20",
      datetime: "2020-09-20",
      icon: UserIcon,
      iconBackground: "bg-gray-400",
    },
    {
      id: 1,
      content: "Evan",
      target: "has the idea.",
      href: "#",
      date: "Sep 20",
      datetime: "2020-09-20",
      icon: UserIcon,
      iconBackground: "bg-gray-400",
    },
    {
      id: 2,
      content: "Evan",
      target: "is working on designs.",
      href: "#",
      date: "Sep 22",
      datetime: "2020-09-22",
      icon: HandThumbUpIcon,
      iconBackground: "bg-blue-500",
    },
    {
      id: 3,
      content: "Evan",
      target: "is creating the list of the tech stack.",
      href: "#",
      date: "Sep 28",
      datetime: "2020-09-28",
      icon: CheckIcon,
      iconBackground: "bg-green-500",
    },
    {
      id: 4,
      content: "Evan",
      target: "is working on the draft website.",
      href: "#",
      date: "Sep 30",
      datetime: "2020-09-30",
      icon: HandThumbUpIcon,
      iconBackground: "bg-blue-500",
    },
    {
      id: 5,
      content: "Evan",
      target: "is working on the draft website.",
      href: "#",
      date: "Sep 30",
      datetime: "2020-09-30",
      icon: HandThumbUpIcon,
      iconBackground: "bg-blue-500",
    },
    {
      id: 5,
      content: "Evan",
      target: "is working on the draft website.",
      href: "#",
      date: "Sep 30",
      datetime: "2020-09-30",
      icon: HandThumbUpIcon,
      iconBackground: "bg-blue-500",
    },
    {
      id: 5,
      content: "Evan",
      target: "is working on the draft website.",
      href: "#",
      date: "Sep 30",
      datetime: "2020-09-30",
      icon: HandThumbUpIcon,
      iconBackground: "bg-blue-500",
    },
    {
      id: 5,
      content: "Evan",
      target: "is working on the draft website.",
      href: "#",
      date: "Sep 30",
      datetime: "2020-09-30",
      icon: HandThumbUpIcon,
      iconBackground: "bg-blue-500",
    },
    {
      id: 5,
      content: "Evan",
      target: "is working on the draft website.",
      href: "#",
      date: "Sep 30",
      datetime: "2020-09-30",
      icon: HandThumbUpIcon,
      iconBackground: "bg-blue-500",
    },
    {
      id: 5,
      content: "Evan",
      target: "is working on the draft website.",
      href: "#",
      date: "Sep 30",
      datetime: "2020-09-30",
      icon: HandThumbUpIcon,
      iconBackground: "bg-blue-500",
    },
    {
      id: 5,
      content: "Evan",
      target: "is working on the draft website.",
      href: "#",
      date: "Sep 30",
      datetime: "2020-09-30",
      icon: HandThumbUpIcon,
      iconBackground: "bg-blue-500",
    },
    {
      id: 5,
      content: "Evan",
      target: "is working on the draft website.",
      href: "#",
      date: "Sep 30",
      datetime: "2020-09-30",
      icon: HandThumbUpIcon,
      iconBackground: "bg-blue-500",
    },
  ];
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [recordsPerPage] = React.useState<number>(3);

  const indexOfLastRecord: number = currentPage * recordsPerPage;
  const indexOfFirstRecord: number = indexOfLastRecord - recordsPerPage;
  const currentRecords: CurrentAnnouncement[] = announcements.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const nPages: number = Math.ceil(announcements.length / recordsPerPage);
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
      currentRecords={currentRecords}
      pageNumbers={pageNumbers}
      nPages={nPages}
      setPageButtons={{ nextPage, prevPage }}
      currentPageState={{ currentPage, setCurrentPage }}
    />
  );
};

export default Announcements;
