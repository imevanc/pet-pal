import { Pet } from "@prisma/client";

interface PetInformationPropsIF {
  selectedPetObj: Pet;
}

const PetInformation: React.FC<PetInformationPropsIF> = ({
  selectedPetObj,
}) => {
  return (
    <div className="mx-auto max-w-xl mt-10 z-40">
      <div className="relative w-full">
        <img
          src={"/bruno.jpeg"}
          alt="dog-image"
          className="aspect-[16/9] w-full rounded-2xl object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="max-w-xl">
        <h3 className="text-lg font-semibold text-gray-900">
          {selectedPetObj.name}
        </h3>
        <p className="text-sm text-gray-600">{selectedPetObj.name}</p>
      </div>
    </div>
  );
};

export default PetInformation;
