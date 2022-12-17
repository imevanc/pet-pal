import Link from "next/link";
import type { NextPage } from "next";

const Custom404: NextPage = () => {
  return (
    <div className="flex h-full flex-col items-center bg-white pt-6 pb-8">
      <div className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-between px-4 py-16 sm:py-0 sm:px-6 lg:px-8">
        <div className="sm:py-10 flex flex-col items-center">
          <div className="text-4xl font-sans font-bold text-lime-600 sm:text-8xl">
            404
          </div>
          <div className="mt-4 font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page Not Found
          </div>
          <div className="py-6">
            <img src="/dog-404.svg" width="400" />
          </div>
          <div className="mt-2 sm:text-base text-gray-500">
            Sorry, we couldn’t find the page you’re looking for.
          </div>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center rounded-md border border-transparent bg-lime-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
