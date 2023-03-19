import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { PathsStateIF } from "../../../interfaces/PathsStateIF";
import { useUserContext } from "../../../hooks/useUserContext";

const NavBar: React.FC = () => {
  const user = useUserContext();
  const path: string = useRouter().pathname;

  const [paths, setPaths] = React.useState<PathsStateIF>({
    myPets: "",
    dashboard: "",
    appointments: "",
  });

  React.useEffect((): void => {
    if (path === `/account/${user?.role}/dashboard`) {
      setPaths({
        dashboard: "selected",
        appointments: "nonSelected",
        myPets: "nonSelected",
      });
    } else if (path === "/account/appointments") {
      setPaths({
        dashboard: "nonSelected",
        appointments: "selected",
        myPets: "nonSelected",
      });
    } else if (path === "/account/DOG_OWNER/myPets") {
      setPaths({
        dashboard: "nonSelected",
        appointments: "nonSelected",
        myPets: "selected",
      });
    } else {
      setPaths({
        dashboard: "nonSelected",
        appointments: "nonSelected",
        myPets: "nonSelected",
      });
    }
  }, [path, user]);

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
        href={`/account/${user?.role}/dashboard`}
      >
        Dashboard
      </Link>
      <Link
        className={
          paths.appointments === "selected" ? selectedClass : nonSelectedClass
        }
        href="/account/appointments"
      >
        Appointments
      </Link>
      <Link
        className={
          paths.myPets === "selected" ? selectedClass : nonSelectedClass
        }
        href="/account/DOG_OWNER/myPets"
      >
        My Pets
      </Link>
    </div>
  );
};

export default NavBar;
