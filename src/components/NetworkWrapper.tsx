import { useNetwork } from "../hooks/useNetwork";

const NetworkWrapper: React.FC<{
  children: any;
}> = ({ children }): any => {
  const isNetworkOnline: boolean = useNetwork();
  if (!isNetworkOnline) {
    return (
      <div className="grow shrink-0">
        <div className="flex h-full flex-col items-center bg-white pt-6 pb-8">
          <div className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-between px-4 py-16 sm:py-0 sm:px-6 lg:px-8">
            <div className="sm:py-10 flex flex-col items-center">
              <div className="text-4xl font-sans font-bold text-lime-600 sm:text-8xl">
                No Internet
              </div>
              <div className="mt-4 font-bold tracking-tight text-gray-900 sm:text-5xl">
                Connection
              </div>
              <div className="py-6">
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
