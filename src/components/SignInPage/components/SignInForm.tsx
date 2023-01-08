import CustomInput from "./CustomInput";
import CustomFormButton from "./CustomFormButton";

const SignInForm: React.FC = () => {
  return (
    <form className="space-y-6" action="#" method="POST">
      <CustomInput label={"Email address"} name={"email"} />
      <div>
        <CustomFormButton buttonLabel={"Sign in"} />
      </div>
    </form>
  );
};

export default SignInForm;
