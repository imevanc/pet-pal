import { useSession } from "next-auth/react";
import React from "react";
import axios from "axios";
import { User } from "@prisma/client";

export const UserContext = React.createContext<User | null>(null);

export const UserContextProvider: React.FC<{
  children: any;
}> = ({ children }): any => {
  const { data: session } = useSession();
  const [user, setUser] = React.useState<User | null>(null);

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
