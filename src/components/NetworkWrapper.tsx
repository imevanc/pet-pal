import { useNetwork } from "../hooks/useNetwork";

const NetworkWrapper: React.FC<{
  children: any;
}> = ({ children }): any => {
  const isNetworkOnline: boolean = useNetwork();
  if (!isNetworkOnline) {
    return (
      <div className="grow shrink-0">
        <div className="flex h-full flex-col items-center bg-white p-4 sm:p-0 sm:mt-2">
          <div className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-between px-4 py-2 sm:py-0 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center">
              <div className="text-6xl font-sans font-bold text-lime-600 sm:text-8xl">
                No Internet
              </div>
              <div className="mt-4 font-bold tracking-tight text-gray-900 text-2xl sm:text-5xl">
                Connection
              </div>
              <div className="py-2">
                <img src="/dog-internet.svg" width="400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return children;
};

export default NetworkWrapper;
