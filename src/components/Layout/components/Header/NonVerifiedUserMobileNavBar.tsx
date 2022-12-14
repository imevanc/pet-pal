import React from "react";
import { Disclosure } from "@headlessui/react";

const NonVerifiedUserMobileNavBar: React.FC = () => {
  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="space-y-1 pt-2 pb-4">
        <Disclosure.Button
          as="a"
          href="#"
          className="block border-l-4 border-lime-500 bg-lime-50 py-2 pl-3 pr-4 text-base font-medium text-lime-700"
        >
          Sign In / Sign Up
        </Disclosure.Button>
        <Disclosure.Button
          as="a"
          href="#"
          className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
        >
          Home
        </Disclosure.Button>
        <Disclosure.Button
          as="a"
          href="#"
          className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
        >
          Team
        </Disclosure.Button>
        <Disclosure.Button
          as="a"
          href="#"
          className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
        >
          Announcements
        </Disclosure.Button>
      </div>
    </Disclosure.Panel>
  );
};

export default NonVerifiedUserMobileNavBar;
