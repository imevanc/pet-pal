import { Bell } from "react-bootstrap-icons";

const NotificationsButton: React.FC = () => {
  return (
    <button
      type="button"
      className="rounded-full bg-white p-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
    >
      <span className="sr-only">View notifications</span>
      <Bell className="h-8 w-8" aria-hidden="true" />
    </button>
  );
};

export default NotificationsButton;
