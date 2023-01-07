import React from "react";
import axios from "axios";
import CustomInput from "../../SignInPage/components/CustomInput";

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = React.useState<string>("");
  const handleSubmit = async (email: string): Promise<any> => {
    try {
      const payload = { email_address: email };
      const data = await axios.post("/api/createEmailSubscriber", payload);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setEmail(event?.target?.value);
  };

  return (
    <form className="sm:flex" onSubmit={() => handleSubmit(email)}>
      <CustomInput
        label={"Email address"}
        name={"email"}
        value={email}
        onChange={handleChange}
        labelClassName={"sr-only"}
        inputClassName={
          "w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-lime-700"
        }
        placeholder={"Enter Your Email"}
      />
      <button
        type="submit"
        className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-lime-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-lime-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-lime-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
      >
        Notify me
      </button>
    </form>
  );
};
export default NewsletterForm;
