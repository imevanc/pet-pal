import React from "react";

const SignUpButton: React.FC = () => {
  return (
    <button
      type="button"
      className="inline-flex items-center rounded-full shadow-xl border border-transparent bg-lime-100 px-4 py-2 text-base font-medium text-lime-700 hover:bg-lime-200 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
    >
      Sign Up
    </button>
  );
};

export default SignUpButton;
