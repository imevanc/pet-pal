import React from "react";
import { PetsContext } from "../context/PetsContext";

// context consumer hook
export const usePetsContext = () => {
  // get the context
  const context = React.useContext(PetsContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error("usePetsContext was used outside of its Provider");
  }

  return context;
};
