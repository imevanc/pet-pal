import React from "react";
import clsx from "clsx";
import NavBar from "./NavBar";
import Logo from "./Logo";
// interface Props {
//   children: React.ReactNode;
// }

const Header: React.FC = () => {
  let [isScrolled, setIsScrolled] = React.useState<boolean>(false);

  React.useEffect((): (() => void) => {
    const onScroll = (): void => {
      setIsScrolled(window.scrollY > 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return (): void => {
      window.removeEventListener("scroll", onScroll, {
        passive: true,
      } as EventListenerOptions);
    };
  }, []);

  return (
    <header
      className={
        "sticky top-0 flex items-center justify-center bg-white px-4 py-6"
        // isScrolled
        //   ? "dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75"
        //   : "dark:bg-transparent"
      }
    >
      <div className="max-w-5xl w-full flex items-center justify-between">
        <Logo />
        <NavBar />
        <div className="flex mt-0 md:ml-4">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Edit
          </button>
          <button
            type="button"
            className="ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Publish
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
