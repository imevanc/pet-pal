import React from "react";
import CookieBanner from "./components/CookieBanner";
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
      <CookieBanner />
    </div>
  );
};

export default Layout;
