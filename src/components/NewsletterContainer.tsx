import React from "react";

const NewsletterContainer: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-5xl py-12 sm:px-6 lg:py-12">
        <div className="rounded-lg bg-lime-700 px-6 py-6 md:py-12 md:px-12 lg:py-12 lg:px-16 xl:flex xl:items-center">
          <div className="xl:w-0 xl:flex-1">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Want product news and updates?
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-6 text-lime-200">
              Sign up for our woof-letter to stay up to date.
            </p>
          </div>
          <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-lime-700"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-lime-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-lime-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-lime-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
              >
                Notify me
              </button>
            </form>
            <p className="mt-3 text-sm text-lime-200">
              We care about the protection of your data. Read our{" "}
              <a href="#" className="font-medium text-white underline">
                Privacy Policy.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterContainer;
