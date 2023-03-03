import { useSession } from "next-auth/react";
import React from "react";
import axios from "axios";
import { Pet, User } from "@prisma/client";
import { useUserContext } from "../hooks/useUserContext";

export const PetsContext = React.createContext<Pet[] | []>([]);

export const PetsContextProvider: React.FC<{
  children: any;
}> = ({ children }): any => {
  const user: User = useUserContext()!;
  const [pets, setPets] = React.useState<Pet[] | []>([]);

  React.useEffect((): void => {
    const fetchPetsByUserId = async (userId: string): Promise<void> => {
      const fetchedPets = await axios.get(
        `/api/getPetsByUserId?userId=${userId}`
      );
      if (fetchedPets.data) {
        setPets(fetchedPets.data);
      }
    };
    if (user) {
      fetchPetsByUserId(user?.id);
    }
  }, [user, setPets]);

  return <PetsContext.Provider value={pets}>{children}</PetsContext.Provider>;
};
