import PetCard from "./PetCard";
import AddAPetCard from "./AddAPetCard";
import type { Pet } from "@prisma/client";

interface MyPetsCardPropsIF {
  pets: Pet[];
}

const MyPetsCard: React.FC<MyPetsCardPropsIF> = ({ pets }) => {
  console.log(pets);

  return (
    <div className="space-y-6 lg:col-span-2 lg:col-start-1">
      <section aria-labelledby="applicant-information-title">
        <div className="bg-white shadow-2xl sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2
              id="applicant-information-title"
              className="text-xl font-medium leading-6 text-gray-900"
            >
              My Pets
            </h2>
            <p className="mt-1 max-w-2xl text-baseline text-gray-500">
              Add a new pet or edit their details
            </p>
          </div>
          {pets.length === 0 ? (
            <div className="p-2 w-full h-full z-50 overflow-hidden bg-lime-50 opacity-65 flex flex-col items-center justify-center">
              <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
              <h2 className="text-center text-white text-xl font-semibold text-black">
                Loading...
              </h2>
            </div>
          ) : (
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                {pets.map((pet) => {
                  return (
                    <div key={pet.id} className="sm:col-span-1">
                      <PetCard pet={pet} />
                    </div>
                  );
                })}
                <AddAPetCard />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MyPetsCard;
