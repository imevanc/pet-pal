import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Paths {
  home: string;
  team: string;
  announcements: string;
}

const NonVerifiedUserNavBar: React.FC = () => {
  const path: string = useRouter().pathname;
  const [paths, setPath] = React.useState<Paths>({
    home: "",
    team: "",
    announcements: "",
  });
  React.useEffect((): void => {
    if (path === "/") {
      setPath({
        home: "selected",
        team: "nonSelected",
        announcements: "nonSelected",
      });
    }
    if (path === "/team") {
      setPath({
        home: "nonSelected",
        team: "selected",
        announcements: "nonSelected",
      });
    }
    if (path === "/announcements") {
      setPath({
        home: "nonSelected",
        team: "nonSelected",
        announcements: "selected",
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
        className={paths.home === "selected" ? selectedClass : nonSelectedClass}
        href="/"
      >
        Home
      </Link>
      <Link
        href="/team"
        className={paths.team === "selected" ? selectedClass : nonSelectedClass}
      >
        Team
      </Link>
      <Link
        href="/announcements"
        className={
          paths.announcements === "selected" ? selectedClass : nonSelectedClass
        }
      >
        Announcements
      </Link>
    </div>
  );
};

export default NonVerifiedUserNavBar;
