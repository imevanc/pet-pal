import type { NextPage } from "next";
import SignInPage from "../../components/SignInPage/SignInPage";
import { getProviders } from "next-auth/react";
import { SignInIF } from "../../interfaces/SignInIF";
import { useUserContext } from "../../hooks/useUserContext";
import { NextRouter, useRouter } from "next/router";

const SignIn: NextPage<SignInIF> = ({ providers }) => {
  const user = useUserContext();
  const router: NextRouter = useRouter();
  if (user) {
    router.replace(`/account/${user?.role}/dashboard`);
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
