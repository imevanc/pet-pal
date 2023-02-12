import {
  CreditCardIcon,
  SquaresPlusIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { ProfileNavigationIF } from "../interfaces/ProfileNavigationIF";

export const PROFILE_NAVIGATION: ProfileNavigationIF = {
  navigation: [
    {
      name: "Personal Information",
      queryName: "personalInformation",
      icon: UserCircleIcon,
    },
    {
      name: "Plan & Billing",
      queryName: "planAndBilling",
      icon: CreditCardIcon,
    },
    {
      name: "Settings",
      queryName: "settings",
      icon: SquaresPlusIcon,
    },
  ],
};
