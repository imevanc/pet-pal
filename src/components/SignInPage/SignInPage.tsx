import SignInForm from "./components/SignInForm";
import SocialNetButton from "./components/SocialNetButton";
import signIn from "../../data/fixtures/signIn.json";
import FacebookIcon from "../Layout/components/FacebookIcon";
import InstagramIcon from "../Layout/components/InstagramIcon";
import GoogleIcon from "../Layout/components/GoogleIcon";
import { SignInIF } from "../../interfaces/SignInIF";
import React from "react";
import Link from "next/link";

const SignInPage: React.FC<SignInIF> = ({ providers }) => {
  return (
    <div className="flex min-h-full flex-col justify-center py-4 grow shrink-0 px-4 sm:px-6 lg:px-8">
      <div className="bg-lime-100 sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto mt-4 h-14 sm:h-16 w-auto"
          src="/pet-pal-logo.png"
          alt="Pet Pal"
        />
        <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
          {signIn.heading}
        </h2>
        <h4 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
          {signIn.subHeading}
        </h4>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md rounded-lg shadow-xl">
        <div className="bg-white py-6 px-4 sm:px-10">
          <SignInForm />
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  {signIn.spanButton}
                </span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <SocialNetButton
                provider={providers.facebook}
                SocialNetIcon={FacebookIcon}
                socialNet={"Facebook"}
              />
              <SocialNetButton
                provider={providers.google}
                SocialNetIcon={GoogleIcon}
                socialNet={"Google"}
              />
              <SocialNetButton
                provider={providers.instagram}
                SocialNetIcon={InstagramIcon}
                socialNet={"Instagram"}
              />
            </div>
          </div>
          <div className="relative mt-4 py-4">
            <div className="absolute inset-0 flex items-center">
              <span className="bg-white text-xs px-2 text-gray-500">
                {signIn.firstPartOfAgreement}{" "}
                <Link
                  className="bg-white text-lime-500 underline"
                  href="/legal/terms"
                >
                  Terms of Service
                </Link>{" "}
                &{" "}
                <Link
                  className="bg-white text-lime-500 underline"
                  href="/legal/policy"
                >
                  {" "}
                  Privacy Policy
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
