import React from "react";
import { UserDataContext } from "../context/UserDataContext";

export const useUserData = () => React.useContext(UserDataContext);
