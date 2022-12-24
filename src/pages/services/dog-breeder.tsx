const DogBreeder: React.FC = () => {
  return (
    <div className="h-screen w-full mt-6 lg:mt-0">
      <div className="mx-auto h-full max-w-7xl">
        <div className="flex flex-col h-full lg:flex-row justify-start items-center lg:items-center lg:mb-50">
          <div className="px-4 sm:px-6 text-center lg:text-left md:max-w-2xl lg:flex lg:text-left">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Data to enrich your online business
              </h1>
              <p className="text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua ad ad non deserunt sunt.
              </p>
              <p className="text-2xl font-semibold sm:mt-10">Used by</p>
              <div className="mt-5 w-full text-base font-semibold sm:mx-auto sm:max-w-lg lg:ml-0">
                <div className="flex flex-wrap items-start justify-between">
                  <div className="h-9 sm:h-10">Dog Owners</div>
                  <div className="h-9 sm:h-10">Food Suppliers</div>
                  <div className="h-9 sm:h-10">Dog Walkers</div>
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
                    src="/dog-breeder.jpg"
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

export default DogBreeder;
