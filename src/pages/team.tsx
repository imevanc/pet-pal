import type { NextPage } from "next";
import TeamMemberContainer from "../components/TeamMemberContainer";

const Team: NextPage = () => {
  const team = [
    {
      name: "Bruno Evanson",
      role: "CEO",
      imageUrl: "/bruno.jpeg",
      twitterUrl: "#",
      linkedinUrl: "#",
    },
    {
      name: "Evan C",
      role: "Software Engineer",
      imageUrl: "/evan.jpeg",
      twitterUrl: "#",
      linkedinUrl: "#",
    },
  ];
  return (
    <div className="grow shrink-0">
      <div className="mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Team
            </h2>
            <p className="text-xl text-gray-500">
              From our dog family to yours.
            </p>
          </div>
          <ul
            role="list"
            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
            {team.map((person, idx) => (
              <TeamMemberContainer key={idx} person={person} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Team;
