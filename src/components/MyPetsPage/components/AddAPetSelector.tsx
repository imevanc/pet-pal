import { PlusCircleDotted } from "react-bootstrap-icons";
import Link from "next/link";

const AddAPetSelector: React.FC = () => {
  return (
    <Link
      href="#"
      className="text-gray-500 hover:text-gray-700 flex flex-col justify-center items-center w-full h-full p-1 rounded-lg border-2 border-dashed border-gray-500 text-center hover:border-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
    >
      <div className="text-xl sm:text-2xl p-1">
        <PlusCircleDotted />
      </div>
      <span className="block text-sm font-medium">Add a pet</span>
    </Link>
  );
};

export default AddAPetSelector;
