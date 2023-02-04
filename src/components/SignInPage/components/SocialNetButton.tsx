import { SocialNetIconIF } from "../../../interfaces/SocialNetIconIF";
import { signIn, useSession } from "next-auth/react";
import { ProviderIF } from "../../../interfaces/ProviderIF";
import { useUserContext } from "../../../hooks/useUserContext";

interface SocialNetButtonPropsIF {
  SocialNetIcon: React.FC<SocialNetIconIF>;
  socialNet: string;
  provider: ProviderIF;
}

const SocialNetButton: React.FC<SocialNetButtonPropsIF> = ({
  SocialNetIcon,
  socialNet,
  provider,
}) => {
  const { data: user } = useSession();
  const handleClick = async () => {
    const res = await signIn(provider.id, {
      callbackUrl: `${window.location.origin}/account/loading`,
    });
    if (!res) {
      console.log({ user });
    }
    console.log({ res });
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
      >
        <span className="sr-only">Sign in with {socialNet}</span>
        <SocialNetIcon className={"h-6 w-6"} aria-hidden={"true"} />
      </button>
    </div>
  );
};

export default SocialNetButton;
