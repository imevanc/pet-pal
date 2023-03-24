import { stringToBool } from "../../../utils/stringToBool";
import { ProfileNavigationIF } from "../../../interfaces/ProfileNavigationIF";
import { getProfileNavigation } from "../../../utils/getProfileNavigation";
import { classNames } from "../../../utils/classNames";
import { NextRouter, useRouter } from "next/router";
import { PathsStateIF } from "../../../interfaces/PathsStateIF";

interface NavigationTabsIF {
  paths: PathsStateIF;
}

const NavigationTabs: React.FC<NavigationTabsIF> = ({ paths }) => {
  const router: NextRouter = useRouter();

  const navigation: ProfileNavigationIF = getProfileNavigation(paths);

  const handleClick = (queryName: string): void => {
    router.replace({
      query: { ...router.query, editProfileItem: queryName },
    });
  };
  return (
    <aside className="py-6 px-2 sm:px-6 lg:col-span-3 lg:py-0 lg:px-0">
      <nav className="space-y-1">
        {navigation.navigation.map((item) => {
          return (
            <button
              key={item.name}
              onClick={() => handleClick(item.queryName)}
              className={classNames(
                stringToBool(item.current)
                  ? "bg-gray-50 text-lime-700 hover:text-lime-700 hover:bg-white"
                  : "text-gray-900 hover:text-gray-900 hover:bg-gray-50",
                "group rounded-md px-3 py-2 flex items-center text-xl font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? "text-lime-500 group-hover:text-lime-500"
                    : "text-gray-400 group-hover:text-gray-500",
                  "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                )}
                aria-hidden="true"
              />
              <span className="truncate">{item.name}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default NavigationTabs;
