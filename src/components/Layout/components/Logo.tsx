import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex flex-shrink-0 items-center">
      <img
        className="block h-[64px] mt-2 w-auto lg:hidden"
        src="pet-pal-logo.png"
        alt="Pet Pal"
      />
      <img
        className="hidden h-[64px] mt-2 w-auto lg:block"
        src="pet-pal-logo.png"
        alt="Pet Pal"
      />
    </div>
  );
};

export default Logo;
