import Link from "next/link";

const SignInButton: React.FC = () => {
  return (
    <Link href="/sign-in">
      <p className="shadow-xl inline-flex items-center rounded-full border border-transparent bg-lime-600 px-3 sm:px-6 py-2 text-lg sm:text-xl font-lg text-white font-bold hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2">
        Sign In
      </p>
    </Link>
  );
};

export default SignInButton;
