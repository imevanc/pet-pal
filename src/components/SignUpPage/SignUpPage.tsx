import Link from "next/link";
import SignUpForm from "./components/SignUpForm";
import signUp from "../../data/fixtures/signUp.json";

const SignUpPage: React.FC = () => {
  return (
    <div className="flex min-h-full flex-col justify-center py-4 grow shrink-0 px-4 sm:px-6 lg:px-8">
      <div className="bg-lime-100 sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
          {signUp.heading}
        </h2>
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-md rounded-lg shadow-xl">
        <div className="bg-white py-6 px-4 sm:px-10">
          <SignUpForm />
          <div className="mt-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  {signUp.spanSignIn}
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <p className="italic bg-white px-2 text-2xl font-bold text-lime-500 hover:text-lime-600">
                <Link href="/account/sign-in">{signUp.link}</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
