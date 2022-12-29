import { classNames } from "../../../utils/classNames";
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

interface CurrentRecordsProps {
  currentRecords: CurrentRecord[];
}

const Announcements: React.FC<CurrentRecordsProps> = ({ currentRecords }) => {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {currentRecords.map((event, eventIdx) => (
          <li key={eventIdx}>
            <div className="relative pb-8">
              {eventIdx !== currentRecords.length - 1 ? (
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
                  <div className="text-sm text-gray-500">
                    {event.content}{" "}
                    <p className="font-medium text-gray-900">{event.target}</p>
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
  );
};

export default Announcements;
