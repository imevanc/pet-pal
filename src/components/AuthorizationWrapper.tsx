import { useSession } from "next-auth/react";
import { NextRouter, useRouter } from "next/router";
import React from "react";
import LoadingBar from "./LoadingBar";

const AuthorizationWrapper: React.FC<{
  children: any;
}> = ({ children }): any => {
  const { status } = useSession();
  const router: NextRouter = useRouter();

  if (status === "unauthenticated") {
    if (router.pathname === "/") {
      return children;
    }
    router.push("/account/sign-in");
  }

  if (status === "authenticated") {
    if (router.pathname === "/") {
      router.push(`${window.location.origin}/account/DOG_OWNER/dashboard`);
    }
    return children;
  }

  if (status === "loading") {
    return <LoadingBar />;
  }
};

export default AuthorizationWrapper;
