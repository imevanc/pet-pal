import type { NextPage } from "next";

const DogSitter: NextPage = () => {
  return (
    <div className="w-full mt-6 lg:mt-0 h-screen">
      <div className="mx-auto max-w-7xl lg:h-[80%] lg:flex lg:justify-center">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="px-4 sm:px-6 text-center lg:text-left md:max-w-2xl lg:flex lg:text-left">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Sick Of Having Delays & Cancellations From Dog Owners?
              </h1>
              <p className="text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                The solution for you is here! Enlist into our platform as a
                verified dog sitter or walker and dog owners can reserve your
                services with a click of a button. All reservations are
                non-refundable, so everyone is happy! All communications go
                through our platform in order to provide safe and smooth
                services. Dog owners that run late will be charged per minute!
              </p>
              <p className="text-2xl font-bold italic mt-10 min-[454px]:mt-10">
                Connect with
              </p>
              <div className="mt-2 w-full text-base font-semibold sm:mx-auto sm:max-w-lg lg:ml-0">
                <div className="flex flex-col min-[454px]:flex-row items-center min-[454px]:items-start justify-between">
                  <div className="border-solid border-2 border-lime-500 px-4 rounded-full">
                    <div className="h-9 sm:h-10 pt-1">Dog Trainers</div>
                  </div>
                  <div className="border-solid border-2 border-lime-500 px-4 rounded-full mt-2 min-[454px]:mt-0">
                    <div className="h-9 sm:h-10 pt-1">Food Suppliers</div>
                  </div>
                  <div className="border-solid border-2 border-lime-500 px-4 rounded-full mt-2 min-[454px]:mt-0">
                    <div className="h-9 sm:h-10 pt-1">Dog Breeders</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 lg:mt-0">
            <div className="sm:w-full sm:overflow-hidden sm:rounded-lg">
              <div className="px-4 py-8 sm:px-10">
                <div className="flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    className="h-full w-full object-cover"
                    src="/dog-sitter.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogSitter;
