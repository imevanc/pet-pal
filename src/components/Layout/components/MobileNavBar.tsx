import { Disclosure } from "@headlessui/react";
import React from "react";
import { useRouter } from "next/router";
import { PathsStateIF } from "../../../interfaces/PathsStateIF";
import { useUserContext } from "../../../hooks/useUserContext";

const MobileNavBar: React.FC = () => {
  const user = useUserContext();
  const path: string = useRouter().asPath;
  const [paths, setPaths] = React.useState<PathsStateIF>({
    dashboard: "",
    appointments: "",
  });

  React.useEffect((): void => {
    if (path === `/account/${user?.role}/${user?.id}/dashboard`) {
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
  }, [path, user]);

  const selectedClass: string =
    "block border-l-4 border-lime-500 bg-lime-50 py-2 pl-3 pr-4 text-base font-medium text-lime-700";
  const nonSelectedClass: string =
    "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700";

  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="space-y-1 pt-2 pb-4">
        <Disclosure.Button
          as="a"
          href="/account/dashboard"
          className={
            paths.dashboard === "selected" ? selectedClass : nonSelectedClass
          }
        >
          Dashboard
        </Disclosure.Button>
        <Disclosure.Button
          as="a"
          href="/account/appointments"
          className={
            paths.appointments === "selected" ? selectedClass : nonSelectedClass
          }
        >
          Appointments
        </Disclosure.Button>
      </div>
    </Disclosure.Panel>
  );
};

export default MobileNavBar;
