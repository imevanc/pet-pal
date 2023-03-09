import { signIn, useSession } from "next-auth/react";
import { ProviderIF } from "../../../interfaces/ProvidersIF";
import { Icon } from "react-bootstrap-icons";

interface SocialNetButtonPropsIF {
  SocialNetIcon: Icon;
  socialNet: string;
  provider: ProviderIF;
}

const SocialNetButton: React.FC<SocialNetButtonPropsIF> = ({
  SocialNetIcon,
  socialNet,
  provider,
}) => {
  const handleClick = async () => {
    const res = await signIn(provider.id, {
      callbackUrl: `${window.location.origin}/account/DOG_OWNER/dashboard`,
    });
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
