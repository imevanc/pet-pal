import React from "react";
import FooterContainer from "../FooterContainer";
import Header from "./components/Header";

interface ChildrenProps {
  children: React.ReactNode;
}

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header />
      {children}
      <FooterContainer />
    </div>
  );
};

export default Layout;
