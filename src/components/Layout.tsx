import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <div>L</div>
      {children}
    </React.Fragment>
  );
};

export default Layout;
