import CustomInput from "./CustomInput";
import signIn from "../../../data/fixtures/signIn.json";
import CustomCheckBox from "./CustomCheckBox";

const SignInForm: React.FC = () => {
  return (
    <form className="space-y-6" action="#" method="POST">
      <CustomInput label={"Email address"} name={"email"} />
      <CustomInput label={"Password"} name={"password"} />
      <div className="flex items-center justify-between">
        <CustomCheckBox label={signIn.rememberMe} />
        <div className="text-sm">
          <a href="#" className="font-medium text-lime-600 hover:text-lime-500">
            {signIn.retrievePasswordLink}
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
