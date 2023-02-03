import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { PathsStateIF } from "../../../interfaces/PathsStateIF";

const NavBar: React.FC = () => {
  const path: string = useRouter().pathname;
  const [paths, setPaths] = React.useState<PathsStateIF>({
    dashboard: "",
    appointments: "",
  });

  React.useEffect((): void => {
    if (path === "/account/dashboard") {
      setPaths({
        dashboard: "selected",
        appointments: "nonSelected",
      });
    } else if (path === "/account/appointments") {
      setPaths({
        dashboard: "nonSelected",
        appointments: "selected",
      });
    } else {
      setPaths({
        dashboard: "nonSelected",
        appointments: "nonSelected",
      });
    }
  }, [path]);

  const selectedClass: string =
    "inline-flex items-center border-b-2 border-lime-500 px-1 pt-1 text-lg font-medium text-gray-900";
  const nonSelectedClass: string =
    "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-lg font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700";

  return (
    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
      <Link
        className={
          paths.dashboard === "selected" ? selectedClass : nonSelectedClass
        }
        href="/account/dashboard"
      >
        Dashboard
      </Link>
      <Link
        className={
          paths.announcements === "selected" ? selectedClass : nonSelectedClass
        }
        href="/account/announcements"
      >
        Announcements
      </Link>
    </div>
  );
};

export default NavBar;
