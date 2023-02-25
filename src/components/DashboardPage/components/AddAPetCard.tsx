import Link from "next/link";
import { PlusCircleDotted } from "react-bootstrap-icons";

const AddAPetCard: React.FC = () => {
  return (
    <Link
      href="#"
      className="text-gray-500 hover:text-gray-700 relative flex flex-col justify-center items-center w-full h-full rounded-lg border-2 border-dashed border-gray-500 p-12 text-center hover:border-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
    >
      <div className="text-4xl sm:text-6xl p-2">
        <PlusCircleDotted />
      </div>
      <span className="mt-2 block text-baseline lg:text-xl font-medium">
        Add A Pet
      </span>
    </Link>
  );
};

export default AddAPetCard;
