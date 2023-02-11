import { PROFILE_NAVIGATION } from "../data/PROFILE_NAVIGATION";
import { PathsStateIF } from "../interfaces/PathsStateIF";
import { ProfileNavigationIF } from "../interfaces/ProfileNavigationIF";

export const getProfileNavigation = (
  paths: PathsStateIF,
  navigation: ProfileNavigationIF = PROFILE_NAVIGATION
): ProfileNavigationIF => {
  const navigationWithCurrent = { ...navigation };
  navigationWithCurrent.navigation[0]["current"] = `${
    paths.account === "selected"
  }`;
  navigationWithCurrent.navigation[1]["current"] = `${
    paths.planAndBilling === "selected"
  }`;
  navigationWithCurrent.navigation[2]["current"] = `${
    paths.settings === "selected"
  }`;
  return navigationWithCurrent;
};
