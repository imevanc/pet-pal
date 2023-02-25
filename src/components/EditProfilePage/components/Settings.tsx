import { Bell } from "react-bootstrap-icons";

const Settings: React.FC = () => {
  return (
    <form action="#" method="POST">
      <div className="shadow sm:overflow-hidden sm:rounded-md">
        <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
          <div>
            <h3 className="text-xl font-medium leading-6 text-gray-900">
              Settings
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Privacy & Notifications Settings
            </p>
          </div>

          <div>
            <div className="flex">
              <Bell className="mt-1 h-5 w-5" aria-hidden="true" />
              <span className="ml-1 text-lg font-medium text-gray-900">
                Notifications
              </span>
            </div>
            <fieldset className="mt-3">
              <legend className="text-base font-medium text-gray-900">
                By Email
              </legend>
              <div className="mt-1">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-lime-600 focus:ring-lime-500"
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
                      Get notified when someones posts a comment on a posting.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="likes"
                        name="likes"
                        type="checkbox"
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-lime-600 focus:ring-lime-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="likes"
                        className="font-medium text-gray-700"
                      >
                        Likes
                      </label>
                      <p className="text-gray-500">
                        Get notified when someone likes a post or a comment on a
                        posting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="mt-3">
              <legend className="text-base font-medium text-gray-900">
                By Phone
              </legend>
              <div className="mt-1">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-lime-600 focus:ring-lime-500"
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
                      Get notified when someones posts a comment on a posting.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="likes"
                        name="likes"
                        type="checkbox"
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-lime-600 focus:ring-lime-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="likes"
                        className="font-medium text-gray-700"
                      >
                        Likes
                      </label>
                      <p className="text-gray-500">
                        Get notified when someone likes a post or a comment on a
                        posting.
                      </p>
                    </div>
                  </div>
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
      </div>
    </form>
  );
};

export default Settings;
