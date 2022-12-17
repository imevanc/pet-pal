import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

const ContainerContainer: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-5xl sm:px-6 lg:py-6 lg:grid lg:grid-cols-5">
        <div className="bg-lime-50 px-6 py-6 md:py-6 md:px-12 lg:py-16 lg:px-16 lg:col-span-2">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Get in touch
            </h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Come and say hi or just drop a line. From our dog family to yours.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>12345 ABCDE Str</p>
                  <p>Planet Earth</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <div className="pt-1">
                    <PhoneIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="ml-3">+44 01234567890</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <div className="pt-1">
                    <EnvelopeIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="ml-3">support@example.com</span>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-base text-gray-500">
              Looking for careers?
              <br />
              <a href="#" className="font-medium text-gray-700 underline">
                View all job openings
              </a>
              .
            </p>
          </div>
        </div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-lime-500 focus:ring-lime-500"
                  placeholder="Name"
                />
              </div>
              <div>
                <div className="flex justify-end">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <div id="email-description" className="text-sm text-gray-500">
                    Required
                  </div>
                </div>
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-lime-500 focus:ring-lime-500"
                  placeholder="Email"
                />
              </div>
              <div className="pt-5">
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-lime-500 focus:ring-lime-500"
                  placeholder="Phone"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="message" className="text-sm text-gray-500">
                    Max 500 characters
                  </label>
                  <div
                    id="message-description"
                    className="text-sm text-gray-500"
                  >
                    Required
                  </div>
                </div>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-lime-500 focus:ring-lime-500"
                  placeholder="Message"
                  defaultValue={""}
                  aria-describedby="message-max"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-lime-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerContainer;
