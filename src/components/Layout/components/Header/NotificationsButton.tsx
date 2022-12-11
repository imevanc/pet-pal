import { BellIcon } from "@heroicons/react/24/outline";

const NotificationsButton: React.FC = () => {
  return (
    <button
      type="button"
      className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
    >
      <span className="sr-only">View notifications</span>
      <BellIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};

export default NotificationsButton;
