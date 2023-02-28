import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useUserContext } from "../../hooks/useUserContext";
import LoadingBar from "../../components/LoadingBar";

const Loading: NextPage = () => {
  const user = useUserContext();
  const router = useRouter();
  if (user) {
    router.replace(`/account/${user?.role}/${user?.id}/dashboard`);
  }
  return <LoadingBar />;
};

export default Loading;
