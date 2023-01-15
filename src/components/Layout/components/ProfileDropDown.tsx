import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { classNames } from "../../../utils/classNames";
import Link from "next/link";

const ProfileDropDown: React.FC = () => {
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2">
          <span className="sr-only">Open user menu</span>
          <UserCircleIcon className="h-9 w-9 rounded-full text-gray-400 hover:text-gray-600" />
        </Menu.Button>
      </div>
      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <Link
                href="/account/profile"
                className={classNames(
                  active ? "border-lime-500 bg-lime-50" : "border-transparent",
                  "block border-l-4 px-4 py-2 text-lg font-medium text-gray-800"
                )}
              >
                Your Profile
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                href="/account/settings"
                className={classNames(
                  active ? "border-lime-500 bg-lime-50" : "border-transparent",
                  "block border-l-4 px-4 py-2 text-lg font-medium text-gray-800"
                )}
              >
                Settings
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                href="/api/logout"
                className={classNames(
                  active ? "border-lime-500 bg-lime-50" : "border-transparent",
                  "block border-l-4 px-4 py-2 text-lg font-medium text-gray-800"
                )}
              >
                Sign out
              </Link>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileDropDown;
