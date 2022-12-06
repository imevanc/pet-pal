import React from "react";

const NavBar: React.FC = () => {
  return (
    <React.Fragment>
      <div className="hidden md:flex">NavBar</div>
      <div className="md:hidden">burger</div>
    </React.Fragment>
  );
};

export default NavBar;
