import type { NextPage } from "next";
import Link from "next/link";
import FacebookIcon from "../components/Layout/components/FacebookICon";
import InstagramIcon from "../components/Layout/components/InstagramIcon";
import TwitterIcon from "../components/Layout/components/TwitterIcon";

const SignIn: NextPage = () => {
  return (
    <div className="flex min-h-full flex-col justify-center py-4 grow shrink-0 px-4 sm:px-6 lg:px-8">
      <div className="bg-lime-100 sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto mt-4 h-14 sm:h-16 w-auto"
          src="/pet-pal-logo.png"
          alt="Pet Pal"
        />
        <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md rounded-lg shadow-xl">
        <div className="bg-white py-6 px-4 sm:px-10">
          <form className="space-y-6" action="#" method="POST">
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
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-lime-600 focus:ring-lime-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-lime-600 hover:text-lime-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-lime-600 py-2 px-4 text-lg font-bold text-white shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div>
                <a
                  href="#"
                  className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                >
                  <span className="sr-only">Sign in with Facebook</span>
                  <FacebookIcon className={"h-6 w-6"} aria-hidden={"true"} />
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                >
                  <span className="sr-only">Sign in with Twitter</span>
                  <TwitterIcon className={"h-6 w-6"} aria-hidden={"true"} />
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                >
                  <span className="sr-only">Sign in with Instagram</span>
                  <InstagramIcon className={"h-6 w-6"} aria-hidden={"true"} />
                </a>
              </div>
            </div>
            <div className="mt-6 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Don't have a Pet Pal account?
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <p className="italic bg-white px-2 text-2xl font-bold text-lime-500 hover:text-lime-600">
                <Link href="/sign-up">Sign up now</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
