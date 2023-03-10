import { Pet } from "@prisma/client";
import {
  BalloonHeart,
  CardImage,
  ChatHeart,
  Megaphone,
  PlusCircleDotted,
} from "react-bootstrap-icons";
import Link from "next/link";
import QAndAContainer from "./QAndAContainer";
interface PetInformationPropsIF {
  selectedPetObj: Pet;
}

const files = [
  {
    path: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    path: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    path: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    path: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    path: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    path: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
];

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
        <div className="mt-4">
          <div className="flex text-xl font-bold text-gray-900">
            <span className="pt-1">
              <ChatHeart />
            </span>
            <h3 className="ml-2">About {selectedPetObj.name}</h3>
          </div>
          <div className="mt-3 border-t border-gray-200">
            <dl className="mt-2">
              <QAndAContainer
                question={"Spayed/Neutered?"}
                answer={selectedPetObj.sprayedOrNeutered}
              />
              <QAndAContainer
                question={"Microchipped?"}
                answer={selectedPetObj.microchipped}
              />
              <QAndAContainer
                question={"House trained?"}
                answer={selectedPetObj.houseTrained}
              />
              <QAndAContainer
                question={"Friendly with dogs?"}
                answer={selectedPetObj.friendlyWithDogs}
              />
              <QAndAContainer
                question={"Friendly with cats?"}
                answer={selectedPetObj.friendlyWithCats}
              />
              <QAndAContainer
                question={"Friendly with children?"}
                answer={selectedPetObj.friendlyWithChildren}
              />
            </dl>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex text-xl font-bold text-gray-900">
            <span className="pt-1.5">
              <BalloonHeart />
            </span>
            <h3 className="ml-2">Care Info</h3>
          </div>
          <div className="mt-3 border-t border-gray-200">
            <dl className="mt-2">
              <QAndAContainer
                question={"Potty break schedule"}
                answer={selectedPetObj.pottyBreak}
              />
              <QAndAContainer
                question={"Energy Level"}
                answer={selectedPetObj.energyLevel}
              />
              <QAndAContainer
                question={"Feeding schedule"}
                answer={selectedPetObj.feedingSchedule}
              />
              <QAndAContainer
                question={"Can be left alone"}
                answer={selectedPetObj.leftAlone}
              />
            </dl>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex text-xl font-bold text-gray-900">
            <span className="pt-1.5">
              <Megaphone />
            </span>
            <h3 className="ml-2">Veterinary Info</h3>
          </div>
          <div className="mt-3 border-t border-gray-200"></div>
        </div>
        <div className="mt-8 mb-16">
          <div className="flex text-xl font-bold text-gray-900">
            <span className="pt-1.5">
              <CardImage />
            </span>
            <h3 className="ml-2">Photo Gallery</h3>
          </div>
          <div className="mt-3 border-t border-gray-200">
            <ul
              role="list"
              className="mt-4 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
            >
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-700 flex flex-col justify-center items-center w-full h-full rounded-lg border-2 border-dashed border-gray-500 text-center hover:border-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
              >
                <div className="text-xl sm:text-2xl p-2">
                  <PlusCircleDotted />
                </div>
                <span className="block text-sm font-medium">Upload</span>
              </Link>
              {files.map((file, idx) => (
                <li key={idx} className="relative">
                  <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-lime-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                    <img
                      src={"/bruno.jpeg"}
                      alt="random"
                      className="pointer-events-none object-cover group-hover:opacity-75"
                    />
                    <button
                      type="button"
                      className="absolute inset-0 focus:outline-none"
                    ></button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetInformation;
