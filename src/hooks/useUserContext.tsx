import React from "react";
import { UserContext } from "../context/UserContext";

// context consumer hook
export const useUserContext = () => {
  // get the context
  const context = React.useContext(UserContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error("useUserContext was used outside of its Provider");
  }

  return context;
};
