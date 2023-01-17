import type { NextPage } from "next";
import SignInPage from "../../components/SignInPage/SignInPage";
import { getProviders } from "next-auth/react";
import { SignInIF } from "../../interfaces/SignInIF";

const SignIn: NextPage<SignInIF> = ({ providers }) => {
  return <SignInPage providers={providers} />;
};

export default SignIn;

export async function getServerSideProps(context: any) {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
