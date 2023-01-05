import CustomInput from "./CustomInput";
import signIn from "../../../data/fixtures/signIn.json";
import CustomCheckBox from "./CustomCheckBox";
import Link from "next/link";
import CustomFormButton from "./CustomFormButton";

const SignInForm: React.FC = () => {
  return (
    <form className="space-y-6" action="#" method="POST">
      <CustomInput label={"Email address"} name={"email"} />
      <CustomInput label={"Password"} name={"password"} />
      <div className="flex items-center justify-between">
        <CustomCheckBox checkBoxLabel={signIn.rememberMe} id={"remember-me"} />
        <div className="text-sm">
          <Link href="#">
            <p className="font-medium text-lime-600 hover:text-lime-500">
              {signIn.retrievePasswordLink}
            </p>
          </Link>
        </div>
      </div>
      <div>
        <CustomFormButton buttonLabel={"Sign in"} />
      </div>
    </form>
  );
};

export default SignInForm;
