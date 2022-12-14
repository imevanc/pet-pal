import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../Logo";
import NavBar from "./NavBar";
import NonVerifiedUserNavBar from "./NonVerifiedUserNavBar";
import ProfileDropDown from "./ProfileDropDown";
import NonVerifiedUserMobileNavBar from "./NonVerifiedUserMobileNavBar";
import MobileNavBar from "./MobileNavBar";
import NotificationsButton from "./NotificationsButton";

const Header: React.FC = () => {
  const isUser = (userVerified?: boolean): boolean => {
    return false;
  };
  return isUser() ? (
    <div className="w-full sticky top-0 flex items-center justify-center bg-white">
      <Disclosure as="nav" className="w-full max-w-8xl bg-white">
        {({ open }) => (
          <React.Fragment>
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <Logo />
                  <NavBar />
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <NotificationsButton />
                  <ProfileDropDown />
                </div>
              </div>
            </div>
            <MobileNavBar />
          </React.Fragment>
        )}
      </Disclosure>
    </div>
  ) : (
    <div className="w-full sticky top-0 flex items-center justify-center bg-white">
      <Disclosure as="nav" className="w-full max-w-8xl bg-white">
        {({ open }) => (
          <React.Fragment>
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <Logo />
                  <NonVerifiedUserNavBar />
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <ProfileDropDown />
                </div>
              </div>
            </div>
            <NonVerifiedUserMobileNavBar />
          </React.Fragment>
        )}
      </Disclosure>
    </div>
  );
};

export default Header;
