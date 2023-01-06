import Link from "next/link";
import FacebookIcon from "../Layout/components/FacebookIcon";
import InstagramIcon from "../../components/Layout/components/InstagramIcon";
import TwitterIcon from "../../components/Layout/components/TwitterIcon";
import SignInForm from "./components/SignInForm";
import SocialNetButton from "./components/SocialNetButton";
import signIn from "../../data/fixtures/signIn.json";

const SignInPage: React.FC = () => {
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
              <SocialNetButton SocialNetIcon={FacebookIcon} signInHref="#" />
              <SocialNetButton SocialNetIcon={TwitterIcon} signInHref="#" />
              <SocialNetButton SocialNetIcon={InstagramIcon} signInHref="#" />
            </div>
            <div className="mt-6 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  {signIn.spanSignUp}
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <p className="italic bg-white px-2 text-2xl font-bold text-lime-500 hover:text-lime-600">
                <Link href="/account/sign-up">{signIn.link}</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
