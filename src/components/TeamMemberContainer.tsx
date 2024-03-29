import { PersonIF } from "../interfaces/PersonIF";
import { Facebook, Google } from "react-bootstrap-icons";
import Link from "next/link";

interface PersonPropsIF {
  person: PersonIF;
}

const TeamMemberContainer: React.FC<PersonPropsIF> = ({ person }) => {
  return (
    <li>
      <div className="space-y-4">
        <div className="aspect-w-3 aspect-h-2">
          <img
            className="rounded-lg object-cover shadow-lg"
            src={person.imageUrl}
            alt=""
          />
        </div>

        <div className="space-y-2">
          <div className="space-y-1 text-lg font-medium leading-6">
            <h3>{person.name}</h3>
            <p className="text-lime-600">{person.role}</p>
          </div>
          <ul role="list" className="flex space-x-5">
            <li>
              <Link
                href={person.googleUrl}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Google</span>
                <Google className={"w-5 h-5"} aria-hidden={true} />
              </Link>
            </li>
            <li>
              <Link
                href={person.facebookUrl}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className={"w-5 h-5"} aria-hidden={true} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default TeamMemberContainer;
