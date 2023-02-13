import { useRouter } from "next/router";
import React from "react";
import { PathsStateIF } from "../../interfaces/PathsStateIF";
import ConditionalTilesWrapper from "./components/ConditionalTilesWrapper";
import NavigationTabs from "./components/NavigationTabs";
import PersonalInformation from "./components/PersonalInformation";
import PlanAndBilling from "./components/PlanAndBilling";
import Settings from "./components/Settings";

const EditProfilePage: React.FC = () => {
  const router = useRouter();

  const [paths, setPaths] = React.useState<PathsStateIF>({
    personalInformation: "",
    planAndBilling: "",
    settings: "",
  });

  React.useEffect((): void => {
    if (router.query.editProfileItem === "personalInformation") {
      setPaths({
        personalInformation: "selected",
        planAndBilling: "nonSelected",
        settings: "nonSelected",
      });
    } else if (router.query.editProfileItem === "planAndBilling") {
      setPaths({
        personalInformation: "nonSelected",
        planAndBilling: "selected",
        settings: "nonSelected",
      });
    } else {
      setPaths({
        personalInformation: "nonSelected",
        planAndBilling: "nonSelected",
        settings: "selected",
      });
    }
  }, [router, setPaths]);

  return (
    <div className="grow shrink-0">
      <div className="sm:my-4 mx-4">
        <div className="sm:mx-auto max-w-3xl lg:max-w-7xl bg-gray-100">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
            <NavigationTabs paths={paths} />
            <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0 m-2">
              <ConditionalTilesWrapper>
                <PersonalInformation />
                <PlanAndBilling />
                <Settings />
              </ConditionalTilesWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
