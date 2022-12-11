import React from "react";

const NavBar: React.FC = () => {
  return (
    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
      <a
        href="#"
        className="inline-flex items-center border-b-2 border-lime-500 px-1 pt-1 text-lg font-medium text-gray-900"
      >
        Dashboard
      </a>
      <a
        href="#"
        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-lg font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
      >
        Team
      </a>
      <a
        href="#"
        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-lg font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
      >
        Projects
      </a>
      <a
        href="#"
        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-lg font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
      >
        Calendar
      </a>
    </div>
  );
};

export default NavBar;
