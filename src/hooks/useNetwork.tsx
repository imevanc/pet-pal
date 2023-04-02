import React from "react";

export const useNetwork = (): boolean => {
  const [network, setNetwork] = React.useState<boolean>(true);

  React.useEffect((): (() => void) => {
    setNetwork(window.navigator.onLine);

    window.addEventListener("online", () => {
      setNetwork(true);
    });
    window.addEventListener("offline", () => {
      setNetwork(false);
    });

    return () => {
      window.removeEventListener("online", () => {
        setNetwork(true);
      });
      window.removeEventListener("offline", () => {
        setNetwork(false);
      });
    };
  });

  return network;
};
