import { Pet } from "@prisma/client";
import { useRouter } from "next/router";
import { classNames } from "../../../utils/classNames";

interface PetSelectorPropsIF {
  pets: Pet[];
}

const PetSelector: React.FC<PetSelectorPropsIF> = ({ pets }) => {
  const router = useRouter();
  const selectedPet = router.query.petSelected;
  const isSelectedPet = (petId: string): boolean => {
    return petId === selectedPet;
  };
  const handleClick = (petId: string) => {
    router.replace({
      query: { ...router.query, petSelected: petId },
    });
  };
  return (
    <div>
      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <h3 className="text-2xl font-semibold leading-6 text-gray-900">
          My Pets
        </h3>
      </div>
      <div className="overflow-hidden bg-white shadow sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {pets.map((pet: Pet) => (
            <li key={pet.id}>
              <div
                onClick={() => handleClick(pet.id)}
                className={classNames(
                  isSelectedPet(pet.id) ? "bg-gray-100" : "hover:bg-gray-50",
                  "block hover:cursor-pointer"
                )}
              >
                <div className="flex items-right px-4 py-4">
                  <div className="flex flex-1 min-w-0 items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full"
                        src={pet.image!}
                        alt="pet-image"
                      />
                    </div>
                    <div className="flex-1 px-4 grid grid-cols-2 md:gap-4">
                      <div>
                        <p className="truncate text-lg font-medium text-lime-600">
                          {pet.name}
                        </p>
                        <p className="mt-2 flex items-center text-base text-gray-500">
                          <span className="truncate">{pet.breed}</span>
                        </p>
                      </div>
                      <div className="self-center justify-self-end">
                        <button className="text-lg font-medium text-lime-600">
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PetSelector;
