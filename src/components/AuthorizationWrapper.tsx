import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import LoadingBar from "./LoadingBar";

const AuthorizationWrapper: React.FC<{
  children: any;
}> = ({ children }): any => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    if (router.asPath === "/") {
      return children;
    }
    router.push("/account/sign-in");
  }

  if (status === "authenticated") {
    if (router.asPath === "/") {
      router.push(`${window.location.origin}/account/loading`);
    }
    return children;
  }

  if (status === "loading") {
    return <LoadingBar />;
  }
};

export default AuthorizationWrapper;
