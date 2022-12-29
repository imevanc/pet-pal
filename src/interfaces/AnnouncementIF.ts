import { PencilSquareIcon, CheckBadgeIcon } from "@heroicons/react/20/solid";

export interface AnnouncementIF {
  content: string;
  target: string;
  date: string;
  datetime: string;
  iconBackground: string;
  icon: typeof PencilSquareIcon | typeof CheckBadgeIcon;
}
