import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export const useUserFoundRedirectTo = (path: string): void => {
  const { data: session } = useSession();
  const router = useRouter();
  if (session?.user) {
    router.push("/");
  }
};
