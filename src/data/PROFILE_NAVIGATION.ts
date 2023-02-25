import { CreditCard, PersonCircle, Gear } from "react-bootstrap-icons";
import { ProfileNavigationIF } from "../interfaces/ProfileNavigationIF";

export const PROFILE_NAVIGATION: ProfileNavigationIF = {
  navigation: [
    {
      name: "Personal Information",
      queryName: "personalInformation",
      icon: PersonCircle,
    },
    {
      name: "Plan & Billing",
      queryName: "planAndBilling",
      icon: CreditCard,
    },
    {
      name: "Settings",
      queryName: "settings",
      icon: Gear,
    },
  ],
};
