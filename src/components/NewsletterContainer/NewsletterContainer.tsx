import NewsletterForm from "./components/NewsletterForm";

const NewsletterContainer: React.FC = () => {
  return (
    <div className="bg-white pt-2">
      <div className="mx-auto max-w-5xl py-6 sm:px-6 lg:py-6">
        <div className="rounded-lg bg-lime-700 px-6 py-6 md:py-6 md:px-12 lg:py-6 lg:px-16 xl:flex xl:items-center">
          <div className="xl:w-0 xl:flex-1">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Want services news and updates?
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-6 text-lime-200">
              Sign up for our woof-letter to stay up to date.
            </p>
          </div>
          <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
            <NewsletterForm />
            <p className="mt-3 text-sm text-lime-200">
              We care about the protection of your data. Read our{" "}
              <a href="#" className="font-medium text-white underline">
                Privacy Policy.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterContainer;
