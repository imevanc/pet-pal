import React from "react";
import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/router";

interface PathsState {
  home: string;
  team: string;
  announcements: string;
}

const NonVerifiedUserMobileNavBar: React.FC = () => {
  const path: string = useRouter().pathname;
  const [paths, setPath] = React.useState<PathsState>({
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
    "block border-l-4 border-lime-500 bg-lime-50 py-2 pl-3 pr-4 text-base font-medium text-lime-700";
  const nonSelectedClass: string =
    "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700";

  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="space-y-1 pt-2 pb-4">
        <Disclosure.Button
          as="a"
          href="/"
          className={
            paths.home === "selected" ? selectedClass : nonSelectedClass
          }
        >
          Sign In / Sign Up
        </Disclosure.Button>
        <Disclosure.Button
          as="a"
          href="/"
          className={
            paths.team === "selected" ? selectedClass : nonSelectedClass
          }
        >
          Home
        </Disclosure.Button>
        <Disclosure.Button
          as="a"
          href="/team"
          className={
            paths.team === "selected" ? selectedClass : nonSelectedClass
          }
        >
          Team
        </Disclosure.Button>
        <Disclosure.Button
          as="a"
          href="/announcements"
          className={
            paths.announcements === "selected"
              ? selectedClass
              : nonSelectedClass
          }
        >
          Announcements
        </Disclosure.Button>
      </div>
    </Disclosure.Panel>
  );
};

export default NonVerifiedUserMobileNavBar;
