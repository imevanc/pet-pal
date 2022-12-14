import React from "react";

const SignInButton: React.FC = () => {
  return (
    <button
      type="button"
      className="shadow-xl inline-flex items-center rounded-full border border-transparent bg-lime-600 px-4 py-2 text-base font-medium text-white hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
    >
      Sign In
    </button>
  );
};

export default SignInButton;
