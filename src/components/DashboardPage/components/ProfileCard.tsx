import Link from "next/link";
import { useUserContext } from "../../../hooks/useUserContext";

const ProfileCard: React.FC = () => {
  const user = useUserContext();
  console.log(user?.image);
  //   const user = {
  //     name: "Whitney Francis",
  //     email: "whitney@example.com",
  //     status: "Bruno loves walks",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
  //   };
  //   console.log(userData);
  return (
    <div className="mx-auto max-w-3xl sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
      <div className="flex items-center space-x-5">
        <div className="flex-shrink-0">
          <div className="relative">
            <img
              className="h-16 w-16 rounded-full"
              src={`${user?.image}`}
              alt="user photo"
            />
            <span
              className="absolute inset-0 rounded-full shadow-inner"
              aria-hidden="true"
            />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{user?.name}</h1>
          <p className="text-baseline font-medium text-gray-500">
            {/* {user?.status} */}
            Bruno loves walks
          </p>
        </div>
      </div>
      <div className="justify-stretch mt-6 flex flex-col-reverse space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
        <Link
          href="/account/profile"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-lime-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-gray-100"
        >
          Edit Profile
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
