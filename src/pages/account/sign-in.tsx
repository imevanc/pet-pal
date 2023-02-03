import type { NextPage } from "next";
import SignInPage from "../../components/SignInPage/SignInPage";
import { getProviders, useSession } from "next-auth/react";
import { SignInIF } from "../../interfaces/SignInIF";
import { useRouter } from "next/router";

const SignIn: NextPage<SignInIF> = ({ providers }) => {
  const { data: user } = useSession();
  const router = useRouter();
  if (user) {
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
