import { Pet } from "@prisma/client";
import {
  BalloonHeart,
  CardImage,
  ChatHeart,
  Megaphone,
} from "react-bootstrap-icons";

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
        <div className="text-center flex flex-1 flex-col p-8">
          <h3 className="mt-6 text-baseline font-medium text-gray-900">
            {selectedPetObj.name}
          </h3>
          <dl className="mt-1 flex flex-grow flex-col justify-between">
            <dt className="sr-only">Breed</dt>
            <dd className="text-baseline text-gray-500">
              {selectedPetObj.breed}
            </dd>
            <dt className="sr-only">Sex</dt>
            <dd className="text-baseline text-gray-500">
              <span>{selectedPetObj.sex}, </span>
              <span>{selectedPetObj.age}, </span>
              <span>{selectedPetObj.weight}</span>
            </dd>
          </dl>
        </div>
        <div className="mt-2">
          <div className="flex text-xl font-bold text-gray-900">
            <span className="pt-1">
              <ChatHeart />
            </span>
            <h3 className="ml-2">About {selectedPetObj.name}</h3>
          </div>
          <div className="mt-3 border-t border-gray-200">
            <dl className="mt-4">
              <div className="mt-1 py-4">
                <dt className="text-base font-semibold text-gray-600">
                  Spayed/Neutered?
                </dt>
                <dd className="text-base text-gray-600">No</dd>
              </div>
              <div className="mt-1 py-4">
                <dt className="text-base font-semibold text-gray-600">
                  Microchipped?
                </dt>
                <dd className="text-base text-gray-600">Yes</dd>
              </div>
              <div className="mt-1 py-4">
                <dt className="text-base font-semibold text-gray-600">
                  House trained?
                </dt>
                <dd className="text-base text-gray-600">Yes</dd>
              </div>
              <div className="mt-1 py-4">
                <dt className="text-base font-semibold text-gray-600">
                  Friendly with dogs?
                </dt>
                <dd className="text-base text-gray-600">Yes</dd>
              </div>
              <div className="mt-1 py-4">
                <dt className="text-base font-semibold text-gray-600">
                  Friendly with cats?
                </dt>
                <dd className="text-base text-gray-600">No</dd>
              </div>
              <div className="mt-1 mb-6 py-4">
                <dt className="text-base font-semibold text-gray-600">
                  Friendly with children?
                </dt>
                <dd className="text-base text-gray-600">Unsure</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex text-xl font-bold text-gray-900">
            <span className="pt-1.5">
              <BalloonHeart />
            </span>
            <h3 className="ml-2">Care Info</h3>
          </div>
          <div className="mt-3 border-t border-gray-200">
            <dl className="mt-4">
              <div className="mt-1 py-4">
                <dt className="text-base font-semibold text-gray-600">
                  Potty break schedule
                </dt>
                <dd className="text-base text-gray-600">7am and 7pm</dd>
              </div>
              <div className="mt-1 py-4">
                <dt className="text-base font-semibold text-gray-600">
                  Energy Level
                </dt>
                <dd className="text-base text-gray-600">High</dd>
              </div>
              <div className="mt-1 py-4">
                <dt className="text-base font-semibold text-gray-600">
                  Feeding schedule
                </dt>
                <dd className="text-base text-gray-600">Twice a day</dd>
              </div>
              <div className="mt-1 py-4">
                <dt className="text-base font-semibold text-gray-600">
                  Can be left alone
                </dt>
                <dd className="text-base text-gray-600">1 - 4 hours</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex text-xl font-bold text-gray-900">
            <span className="pt-1.5">
              <Megaphone />
            </span>
            <h3 className="ml-2">Veterinary Info</h3>
          </div>
          <div className="mt-3 border-t border-gray-200"></div>
        </div>
        <div className="mt-2 mb-16">
          <div className="flex text-xl font-bold text-gray-900">
            <span className="pt-1.5">
              <CardImage />
            </span>
            <h3 className="ml-2">Photo Gallery</h3>
          </div>
          <div className="mt-3 border-t border-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default PetInformation;
