import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import LoadingBar from "./LoadingBar";

const AuthorizationWrapper: React.FC<{
  children: any;
}> = ({ children }): any => {
  const { status, data: user } = useSession();
  const router = useRouter();
  React.useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/account/sign-in");
    }
  }, [router, status]);

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
