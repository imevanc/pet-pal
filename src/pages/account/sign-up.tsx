import type { NextPage } from "next";
import Link from "next/link";

const SignUp: NextPage = () => {
  return (
    <div className="flex min-h-full flex-col justify-center py-4 grow shrink-0 px-4 sm:px-6 lg:px-8">
      <div className="bg-lime-100 sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign up for Pet Pal
        </h2>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md rounded-lg shadow-xl">
        <div className="bg-white py-6 px-4 sm:px-10">
          <form className="space-y-3" action="#" method="POST">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <div className="mt-1">
                <input
                  id="first-name"
                  name="first-name"
                  type="first-name"
                  autoComplete="first-name"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <div className="mt-1">
                <input
                  id="last-name"
                  name="last-name"
                  type="last-name"
                  autoComplete="last-name"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="postcode"
                className="block text-sm font-medium text-gray-700"
              >
                Postcode/ZIP
              </label>
              <div className="mt-1">
                <input
                  id="postcode"
                  name="postcode"
                  type="postcode"
                  autoComplete="postcode"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="TnCs"
                  name="TnCs"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-lime-600 focus:ring-lime-500"
                />
                <label
                  htmlFor="TnCs"
                  className="ml-2 block text-sm text-gray-600"
                >
                  By signing up, I agree to Pet Pal{"'"}s{" "}
                  <span className="text-lime-600 underline">
                    Terms of Service
                  </span>{" "}
                  &{" "}
                  <span className="text-lime-600 underline">
                    Privacy Policy
                  </span>
                  , confirm that I am 18 years of age or older, and consent to
                  receiving email communication.
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-lime-600 py-2 px-4 text-lg font-bold text-white shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
              >
                Sign up
              </button>
            </div>
          </form>

          <div className="mt-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Already have a Pet Pal account?
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <p className="italic bg-white px-2 text-2xl font-bold text-lime-500 hover:text-lime-600">
                <Link href="/account/sign-in">Sign in here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
