import CustomInput from "./CustomInput";
import CustomFormButton from "./CustomFormButton";
import React from "react";
import { getErrorMessage } from "../../../utils/getErrorMessage";

const SignInForm: React.FC = () => {
  const [errorMsg, setErrorMsg] = React.useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {errorMsg && <p>{errorMsg}</p>}
      <CustomInput label={"Email address"} name={"email"} />
      <div>
        <CustomFormButton buttonLabel={"Sign in"} />
      </div>
    </form>
  );
};

export default SignInForm;
