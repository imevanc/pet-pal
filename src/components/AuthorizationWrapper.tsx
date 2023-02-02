import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

const AuthorizationWrapper: React.FC<{
  children: any;
}> = ({ children }): any => {
  const { status } = useSession();
  const router = useRouter();
  React.useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/account/sign-in");
    }
  }, [router, status]);

  if (status === "authenticated") {
    return children;
  }

  if (status === "loading") {
    return "Loading....";
  }
};

export default AuthorizationWrapper;
