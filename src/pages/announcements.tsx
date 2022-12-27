import type { NextPage } from "next";
import React from "react";
import {
  CheckIcon,
  HandThumbUpIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { classNames } from "../utils/classNames";

const Announcements: NextPage = () => {
  const timeline = [
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
  ];
  return (
    <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24 space-y-10">
      <div className="flow-root">
        <ul role="list" className="-mb-8">
          {timeline.map((event, eventIdx) => (
            <li key={event.id}>
              <div className="relative pb-8">
                {eventIdx !== timeline.length - 1 ? (
                  <span
                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span
                      className={classNames(
                        event.iconBackground,
                        "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                      )}
                    >
                      <event.icon
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-gray-500">
                        {event.content}{" "}
                        <a
                          href={event.href}
                          className="font-medium text-gray-900"
                        >
                          {event.target}
                        </a>
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      <time dateTime={event.datetime}>{event.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <nav
        className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
        aria-label="Pagination"
      >
        <div className="hidden sm:block">
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">10</span> of{" "}
            <span className="font-medium">20</span> results
          </p>
        </div>
        <div className="flex flex-1 justify-between sm:justify-end">
          <a
            href="#"
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Announcements;
