import { Pet } from "@prisma/client";
import { usePetsContext } from "../../hooks/usePetsContext";
import { useRouter } from "next/router";
import React from "react";
import { getSelectedPet } from "../../utils/getSelectedPet";
import PetSelector from "./components/PetSelector";
import PetInformation from "./components/PetInformation";

const MyPetsPage: React.FC = () => {
  const pets: Pet[] = usePetsContext();
  const router = useRouter();
  const selectedPet = router.query.petSelected;
  const selectedPetObj: Pet = getSelectedPet(pets, selectedPet?.toString()!);

  return (
    <div className="grow shrink-0">
      <div className="sm:mx-auto max-w-2xl lg:max-w-3xl mx-4">
        <PetSelector pets={pets} />
        <PetInformation selectedPetObj={selectedPetObj} />
      </div>
    </div>
  );
};

export default MyPetsPage;
