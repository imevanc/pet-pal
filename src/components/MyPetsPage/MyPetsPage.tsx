import { Pet } from "@prisma/client";
import { usePetsContext } from "../../hooks/usePetsContext";
import { NextRouter, useRouter } from "next/router";
import React from "react";
import { getSelectedPet } from "../../utils/getSelectedPet";
import PetSelector from "./components/PetSelector";
import PetInformation from "./components/PetInformation";
import AddAPetSelector from "./components/AddAPetSelector";
import { setPetSelectedQuery } from "../../utils/setPetSelectedQuery";

const MyPetsPage: React.FC = () => {
  const pets: Pet[] = usePetsContext();
  const router: NextRouter = useRouter();
  const selectedPet: string | string[] | undefined = setPetSelectedQuery(
    router.query.petSelected,
    pets.length
  );
  const selectedPetObj: Pet = getSelectedPet(pets, selectedPet!);
  return (
    <div className="grow shrink-0">
      <div className="sm:mx-auto max-w-2xl lg:max-w-3xl mx-4">
        <PetSelector pets={pets} />
        {selectedPetObj ? (
          <PetInformation selectedPetObj={selectedPetObj} />
        ) : (
          <AddAPetSelector />
        )}
      </div>
    </div>
  );
};

export default MyPetsPage;
