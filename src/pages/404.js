export default function Custom404() {
  return (
    <div className="flex min-h-full flex-col bg-white pt-16 pb-12">
      <div className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="text-center">
            <p className="text-4xl font-sans font-bold text-lime-600 text-8xl">
              404
            </p>
            <h1 className="mt-4 font-bold tracking-tight text-gray-900 sm:text-5xl">
              Page Not Found
            </h1>
            <p className="mt-2 text-base text-gray-500">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-6">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-lime-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
              >
                Go Back Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
