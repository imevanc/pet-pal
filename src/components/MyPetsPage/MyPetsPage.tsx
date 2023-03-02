import { Envelope, BagCheck, ChevronCompactRight } from "react-bootstrap-icons";

const MyPetsPage: React.FC = () => {
  const applications = [
    {
      applicant: {
        name: "Ricardo Cooper",
        email: "ricardo.cooper@example.com",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      date: "2020-01-07",
      dateFull: "January 7, 2020",
      stage: "Completed phone screening",
      href: "#",
    },
    {
      applicant: {
        name: "Ricardo Cooper",
        email: "ricardo.cooper@example.com",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      date: "2020-01-07",
      dateFull: "January 7, 2020",
      stage: "Completed phone screening",
      href: "#",
    },
    {
      applicant: {
        name: "Ricardo Cooper",
        email: "ricardo.cooper@example.com",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      date: "2020-01-07",
      dateFull: "January 7, 2020",
      stage: "Completed phone screening",
      href: "#",
    },
    {
      applicant: {
        name: "Ricardo Cooper",
        email: "ricardo.cooper@example.com",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      date: "2020-01-07",
      dateFull: "January 7, 2020",
      stage: "Completed phone screening",
      href: "#",
    },
  ];

  return (
    <div className="grow shrink-0">
      <div className="sm:mx-auto max-w-3xl lg:max-w-5xl bg-gray-100">
        <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
          <h3 className="text-2xl font-semibold leading-6 text-gray-900">
            My Pets
          </h3>
        </div>
        <div className="overflow-hidden bg-white shadow sm:rounded-md">
          <ul role="list" className="divide-y divide-gray-200">
            {applications.map((application) => (
              <li key={application.applicant.email}>
                <div className="block hover:bg-gray-50">
                  <div className="flex items-center px-4 py-4">
                    <div className="flex min-w-0 flex-1 items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-12 w-12 rounded-full"
                          src={application.applicant.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="truncate text-sm font-medium text-lime-600">
                            {application.applicant.name}
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            <span className="truncate">
                              {application.applicant.email}
                            </span>
                          </p>
                        </div>
                        <div className="">
                          <button className="text-lg font-medium text-lime-600">
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyPetsPage;
