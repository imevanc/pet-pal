import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useUserContext } from "../../hooks/useUserContext";

const Loading: NextPage = () => {
  const user = useUserContext();
  const router = useRouter();
  if (user) {
    router.replace(`/account/${user?.role}/${user?.id}/dashboard`);
  }
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-400 opacity-85 flex flex-col items-center justify-center">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
      <h2 className="text-center text-white text-xl font-semibold">
        Loading...
      </h2>
    </div>
  );
};

export default Loading;
