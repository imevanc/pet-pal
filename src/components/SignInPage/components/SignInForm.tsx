import CustomInput from "./CustomInput";
import CustomFormButton from "./CustomFormButton";
import React from "react";
import { useUser } from "../../../../lib/hooks";
import { Magic } from "magic-sdk";
import Router from "next/router";

interface HTMLInputElementIF<T extends HTMLInputElement> extends EventTarget {
  target: T;
  currentTarget: T;
  email: T;
}

const SignInForm: React.FC = () => {
  useUser({ redirectTo: "/", redirectIfFound: true });
  const [errorMsg, setErrorMsg] = React.useState<string>("");

  const handleSubmit = async (
    event: React.ChangeEvent<HTMLInputElementIF<HTMLInputElement>>
  ): Promise<any> => {
    event.preventDefault();
    if (errorMsg) setErrorMsg("");

    const body = {
      email: event.currentTarget.email.value,
    };

    try {
      const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);
      const didToken = await magic.auth.loginWithMagicLink({
        email: body.email,
      });
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + didToken,
        },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        Router.push("/");
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error("An unexpected error happened occurred:", error);
      setErrorMsg(error.message);
    }
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
