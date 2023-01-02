import React from "react";
import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/router";
import servicesPaths from "../../../data/fixtures/servicesPaths.json";
import { classNames } from "../../../utils/classNames";

interface PathsState {
  home: string;
  team: string;
  announcements: string;
  services: string;
}

const NonVerifiedUserMobileNavBar: React.FC = () => {
  const path: string = useRouter().pathname;
  const [paths, setPaths] = React.useState<PathsState>({
    home: "",
    team: "",
    announcements: "",
    services: "",
  });

  React.useEffect((): void => {
    if (path === "/") {
      setPaths({
        home: "selected",
        team: "nonSelected",
        announcements: "nonSelected",
        services: "nonSelected",
      });
    }
    if (path === "/team") {
      setPaths({
        home: "nonSelected",
        team: "selected",
        announcements: "nonSelected",
        services: "nonSelected",
      });
    }
    if (path === "/announcements") {
      setPaths({
        home: "nonSelected",
        team: "nonSelected",
        announcements: "selected",
        services: "nonSelected",
      });
    }
    if (path in servicesPaths) {
      setPaths({
        home: "nonSelected",
        team: "nonSelected",
        announcements: "nonSelected",
        services: "selected",
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
          className={classNames(
            paths.home === "selected" ? selectedClass : nonSelectedClass,
            "italic font-bold text-xl"
          )}
        >
          Sign In
        </Disclosure.Button>
        <Disclosure.Button
          as="a"
          href="/"
          className={
            paths.home === "selected" ? selectedClass : nonSelectedClass
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
        <Disclosure.Button
          as="a"
          href="/services"
          className={
            paths.services === "selected" ? selectedClass : nonSelectedClass
          }
        >
          Services
        </Disclosure.Button>
      </div>
    </Disclosure.Panel>
  );
};

export default NonVerifiedUserMobileNavBar;
