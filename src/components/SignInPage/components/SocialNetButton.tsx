import { SocialNetIconIF } from "../../../interfaces/SocialNetIconIF";

interface SocialNetButtonPropsIF {
  SocialNetIcon: React.FC<SocialNetIconIF>;
  signInHref: string;
}

const SocialNetButton: React.FC<SocialNetButtonPropsIF> = ({
  SocialNetIcon,
  signInHref,
}) => {
  return (
    <div>
      <a
        href={`${signInHref}`}
        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
      >
        <span className="sr-only">Sign in with Facebook</span>
        <SocialNetIcon className={"h-6 w-6"} aria-hidden={"true"} />
      </a>
    </div>
  );
};

export default SocialNetButton;
