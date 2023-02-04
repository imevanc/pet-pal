import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const AddAPetCard: React.FC = () => {
  return (
    <Link
      href="#"
      className="text-gray-500 hover:text-gray-700 relative flex flex-col justify-center items-center w-full h-full rounded-lg border-2 border-dashed border-gray-500 p-12 text-center hover:border-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
    >
      <div className="w-16">
        <PlusCircleIcon />
      </div>
      <span className="mt-2 block text-baseline font-medium">Add A Pet</span>
    </Link>
  );
};

export default AddAPetCard;
