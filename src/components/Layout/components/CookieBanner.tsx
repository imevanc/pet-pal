import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";

const CookieBanner: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(true);

  return (
    <Transition.Root show={open} as={React.Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="min-w-full flex min-h-full items-end justify-center text-center">
            <Transition.Child
              as="div"
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              className={"w-full"}
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full p-6">
                <div className="w-full flex flex-col sm:flex-row justify-evenly items-center">
                  <div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h2"
                        className="text-2xl font-semibold text-left leading-6 text-gray-900"
                      >
                        We care about your privacy
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-base text-justify text-gray-500">
                          We use cookies and similar technologies to provide the
                          best experience on our website. By pressing accept,
                          you agree to our{" "}
                          <Link href="/legal/cookie" className="text-lime-600">
                            cookie
                          </Link>{" "}
                          and{" "}
                          <Link href="/legal/privacy" className="text-lime-600">
                            privacy
                          </Link>{" "}
                          policies.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 ml-4 sm:mt-6 w-full sm:w-max">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-lime-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Accept
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CookieBanner;
