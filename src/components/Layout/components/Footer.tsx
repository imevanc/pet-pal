import React from "react";
import Logo from "./Logo";

const Footer: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-white px-4 py-6">
      <div className="max-w-8xl bg-slate-500 w-full flex items-center justify-between rounded-xl px-2 py-2">
        <Logo />
        Footer
      </div>
    </div>
  );
};

export default Footer;
