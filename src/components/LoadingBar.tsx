const LoadingBar: React.FC = () => {
  return (
    <div className="grow shrink-0">
      <div className="p-2 w-full h-full z-50 overflow-hidden bg-lime-50 opacity-65 flex flex-col items-center justify-center">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        <h2 className="text-center text-xl font-semibold text-black">
          Loading...
        </h2>
      </div>
    </div>
  );
};

export default LoadingBar;
