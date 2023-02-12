import { useRouter } from "next/router";
import React from "react";
import { PathsStateIF } from "../../interfaces/PathsStateIF";
import NavigationTabs from "./components/NavigationTabs";
import PersonalInformation from "./components/PersonalInformation";

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
    <div className="sm:my-4 mx-4">
      <div className="sm:mx-auto max-w-3xl lg:max-w-7xl bg-gray-100">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
          <NavigationTabs paths={paths} />
          <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0 m-2">
            <PersonalInformation />
            <form action="#" method="POST">
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
                  <div>
                    <h3 className="text-xl font-medium leading-6 text-gray-900">
                      Notifications
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Provide basic informtion about the job. Be specific with
                      the job title.
                    </p>
                  </div>

                  <fieldset>
                    <legend className="text-base font-medium text-gray-900">
                      By Email
                    </legend>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="comments"
                            name="comments"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-lime-600 focus:ring-lime-500"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="comments"
                            className="font-medium text-gray-700"
                          >
                            Comments
                          </label>
                          <p className="text-gray-500">
                            Get notified when someones posts a comment on a
                            posting.
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="candidates"
                              name="candidates"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-lime-600 focus:ring-lime-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="candidates"
                              className="font-medium text-gray-700"
                            >
                              Candidates
                            </label>
                            <p className="text-gray-500">
                              Get notified when a candidate applies for a job.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="offers"
                              name="offers"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-lime-600 focus:ring-lime-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Offers
                            </label>
                            <p className="text-gray-500">
                              Get notified when a candidate accepts or rejects
                              an offer.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="mt-6">
                    <legend className="text-base font-medium text-gray-900">
                      Push Notifications
                    </legend>
                    <p className="text-sm text-gray-500">
                      These are delivered via SMS to your mobile phone.
                    </p>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="push-everything"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-lime-600 focus:ring-lime-500"
                        />
                        <label htmlFor="push-everything" className="ml-3">
                          <span className="block text-sm font-medium text-gray-700">
                            Everything
                          </span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-email"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-lime-600 focus:ring-lime-500"
                        />
                        <label htmlFor="push-email" className="ml-3">
                          <span className="block text-sm font-medium text-gray-700">
                            Same as email
                          </span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-nothing"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-lime-600 focus:ring-lime-500"
                        />
                        <label htmlFor="push-nothing" className="ml-3">
                          <span className="block text-sm font-medium text-gray-700">
                            No push notifications
                          </span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-lime-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
