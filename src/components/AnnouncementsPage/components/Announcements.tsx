import { classNames } from "../../../utils/classNames";
import React from "react";
import { AnnouncementIF } from "../../../interfaces/AnnouncementIF";

interface AnnouncementsPageProps {
  currentAnnouncements: AnnouncementIF[];
}

const Announcements: React.FC<AnnouncementsPageProps> = ({
  currentAnnouncements,
}) => {
  return (
    <div className="flow-root">
      <ul role="list" className="mb-2">
        {currentAnnouncements.map((announcement, announcementIdx) => (
          <li key={announcementIdx}>
            <div className="relative pb-8">
              {announcementIdx !== currentAnnouncements.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      announcement.iconBackground,
                      "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                    )}
                  >
                    <announcement.icon
                      className="h-5 w-5 text-lime-700"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div className="text-sm text-gray-500">
                    {announcement.content}{" "}
                    <p className="font-medium text-gray-900">
                      {announcement.target}
                    </p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <time dateTime={announcement.datetime}>
                      {announcement.date}
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Announcements;
