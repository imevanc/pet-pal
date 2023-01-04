import CustomInput from "./CustomInput";
import signIn from "../../../data/fixtures/signIn.json";

const SignInForm: React.FC = () => {
  return (
    <form className="space-y-6" action="#" method="POST">
      <CustomInput label={"Email address"} name={"email"} />
      <CustomInput label={"Password"} name={"password"} />
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
          <a href="#" className="font-medium text-lime-600 hover:text-lime-500">
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
  );
};

export default SignInForm;
