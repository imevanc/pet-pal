import { UserDataIF } from "./UserDataIF";

export interface UserDataContextIF {
  user: UserDataIF;
  setUser: React.Dispatch<React.SetStateAction<UserDataIF>>;
}
