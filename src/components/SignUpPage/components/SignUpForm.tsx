import CustomCheckBox from "../../SignInPage/components/CustomCheckBox";
import CustomFormButton from "../../SignInPage/components/CustomFormButton";
import CustomInput from "../../SignInPage/components/CustomInput";

const SignUpForm: React.FC = () => {
  return (
    <form className="space-y-3" action="#" method="POST">
      <CustomInput label={"First Name"} name={"first-name"} />
      <CustomInput label={"Last Name"} name={"last-name"} />
      <CustomInput label={"Postcode/ZIP"} name={"postcode"} />
      <CustomInput label={"Email address"} name={"email"} />
      <CustomInput label={"Password"} name={"password"} />

      <div className="flex items-center justify-between">
        <CustomCheckBox
          checkBoxLabel={
            <p>
              By signing up, I agree to Pet Pal{"'"}s{" "}
              <span className="text-lime-600 underline">Terms of Service</span>{" "}
              & <span className="text-lime-600 underline">Privacy Policy</span>,
              confirm that I am 18 years of age or older, and consent to
              receiving email communication.
            </p>
          }
          id={"TnCs"}
        />
      </div>
      <div>
        <CustomFormButton buttonLabel={"Sign up"} />
      </div>
    </form>
  );
};
export default SignUpForm;
