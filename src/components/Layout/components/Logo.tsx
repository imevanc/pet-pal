import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex flex-shrink-0 items-center py-2">
      <img
        className="block h-[61px] my-2 w-auto lg:hidden"
        src="pet-pal-logo.png"
        alt="Pet Pal"
      />
      <img
        className="hidden h-[61px] my-2 w-auto lg:block"
        src="pet-pal-logo.png"
        alt="Pet Pal"
      />
    </div>
  );
};

export default Logo;
