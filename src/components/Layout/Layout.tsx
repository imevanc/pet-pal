import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

interface ChildrenPropsIF {
  children: React.ReactNode;
}

const Layout: React.FC<ChildrenPropsIF> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
