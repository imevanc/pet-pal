import Link from "next/link";
import { useUserContext } from "../../../hooks/useUserContext";
import { getRole } from "../../../utils/getRole";

const ProfileCard: React.FC = () => {
  const user = useUserContext();
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
            <span>{user?.status} - </span>
            <span>{getRole(user?.role)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
