import React from "react";
import { UserDataContextIF } from "../interfaces/UserDataContextIF";

export const UserDataContext = React.createContext<UserDataContextIF>({
  user: {},
  setUser: (): void => {},
});
