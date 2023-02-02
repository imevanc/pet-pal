import type { NextPage } from "next";
import SignInPage from "../../components/SignInPage/SignInPage";
import { getProviders } from "next-auth/react";
import { SignInIF } from "../../interfaces/SignInIF";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const SignIn: NextPage<SignInIF> = ({ providers }) => {
  const userCookie = Cookies.get("user");
  const router = useRouter();
  if (userCookie) {
    router.replace("/account/dashboard");
  }
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
