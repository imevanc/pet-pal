import Link from "next/link";
import { PencilSquare, Eye } from "react-bootstrap-icons";
import type { Pet } from "@prisma/client";
import { removeLastPartOfUrl } from "../../../utils/removeLastPartOfUrl";

interface PetCardPropsIF {
  pet: Pet;
}

const PetCard: React.FC<PetCardPropsIF> = ({ pet }) => {
  console.log(removeLastPartOfUrl(window.location.href));
  return (
    <div className="shadow-md">
      <div className="text-center flex flex-1 flex-col p-8">
        <div>
          <img
            className="mx-auto flex-shrink-0 h-64 w-64 object-contain"
            src={pet.image!}
            alt="dog-img"
          />
        </div>
        <h3 className="mt-6 text-baseline font-medium text-gray-900">
          {pet.name}
        </h3>
        <dl className="mt-1 flex flex-grow flex-col justify-between">
          <dt className="sr-only">Breed</dt>
          <dd className="text-baseline text-gray-500">{pet.breed}</dd>
          <dt className="sr-only">Sex</dt>
          <dd className="text-baseline text-gray-500">
            <span>{pet.sex}, </span>
            <span>{pet.age}, </span>
            <span>{pet.weight}</span>
          </dd>
        </dl>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            <Link
              href="#"
              className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-baseline font-medium text-gray-500 hover:text-gray-700"
            >
              <PencilSquare className="h-5 w-5" aria-hidden="true" />
              <span className="ml-3">Edit</span>
            </Link>
          </div>
          <div className="flex w-0 flex-1">
            <Link
              href={{
                pathname: `${removeLastPartOfUrl(window.location.href)}/myPets`,
                query: { petSelected: `${pet.id}` },
              }}
              className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-baseline font-medium text-gray-500 hover:text-gray-700"
            >
              <Eye className="h-5 w-5" aria-hidden="true" />
              <span className="ml-3">View</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
