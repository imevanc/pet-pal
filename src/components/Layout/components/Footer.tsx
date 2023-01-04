import { getYear } from "../../../utils/getYear";
import { SOCIAL_NETS } from "../../../data/SOCIAL_NETS";

const Footer: React.FC = () => {
  return (
    <div>
      <div className="bg-lime-50 mx-auto max-w-7xl py-5 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {SOCIAL_NETS.map((net) => (
            <a
              key={net.name}
              href={net.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{net.name}</span>
              <net.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-base text-gray-400">
            &copy; {getYear()} Pet Pal. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
