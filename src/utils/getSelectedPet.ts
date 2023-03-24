import { Pet } from "@prisma/client";

export const getSelectedPet = (
  pets: Pet[],
  selectedPet: string | string[] | undefined
): Pet => {
  return pets.find((pet) => pet.id === selectedPet) || pets[0];
};
