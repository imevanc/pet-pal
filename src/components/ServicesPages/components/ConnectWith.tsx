import React from "react";

interface ConnectionsContext {
  connectionOne: string;
  connectionTwo: string;
  connectionThree: string;
}

interface ConnectWithProps {
  connectWith: ConnectionsContext;
}

const ConnectWith: React.FC<ConnectWithProps> = ({ connectWith }) => {
  return (
    <React.Fragment>
      <p className="text-2xl font-bold italic mt-10 min-[454px]:mt-10">
        Connect with
      </p>
      <div className="mt-2 w-full text-base font-semibold sm:mx-auto sm:max-w-lg lg:ml-0">
        <div className="flex flex-col min-[454px]:flex-row items-center min-[454px]:items-start justify-between">
          <div className="border-solid border-2 border-lime-500 px-4 rounded-full">
            <div className="h-9 sm:h-10 pt-1">{connectWith.connectionOne}</div>
          </div>
          <div className="border-solid border-2 border-lime-500 px-4 rounded-full mt-2 min-[454px]:mt-0">
            <div className="h-9 sm:h-10 pt-1">{connectWith.connectionTwo}</div>
          </div>
          <div className="border-solid border-2 border-lime-500 px-4 rounded-full mt-2 min-[454px]:mt-0">
            <div className="h-9 sm:h-10 pt-1">
              {connectWith.connectionThree}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ConnectWith;
