import { useSession } from "next-auth/react";
import React from "react";
import axios from "axios";
import { UserType } from "../types/UserType";

export const UserContext = React.createContext<UserType | null>(null);

export const UserContextProvider: React.FC<{
  children: any;
}> = ({ children }): any => {
  const { data: session } = useSession();
  const [user, setUser] = React.useState<UserType | null>(null);

  React.useEffect((): void => {
    const fetchProviderUserByEmail = async (email: string): Promise<any> => {
      try {
        const fetchedUser = await axios.get(
          `/api/getProviderUserByEmail?email=${email}`
        );
        if (fetchedUser.data) {
          setUser(fetchedUser.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (session) {
      fetchProviderUserByEmail(JSON.stringify(session.user?.email));
    }
  }, [session]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
