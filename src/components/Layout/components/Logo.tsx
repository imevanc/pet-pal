import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex flex-shrink-0 items-center">
      {/* <img
        className="block h-8 w-auto lg:hidden"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Pet Pal"
      />
      <img
        className="hidden h-8 w-auto lg:block"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Pet Pal"
      /> */}
      <div className="block h-8 w-auto lg:hidden pt-2">Pet Pal</div>
      <div className="hidden h-8 w-auto lg:block pt-2">Pet Pal</div>
    </div>
  );
};

export default Logo;
