import type { NextPage } from "next";
import ContactContainer from "../components/ContactContainer";
import DescriptionContainer from "../components/DescriptionContainer";
import NewsletterContainer from "../components/NewsletterContainer/NewsletterContainer";
import ServicesContainer from "../components/ServicesContainer";
import React from "react";
import AuthorizationWrapper from "../components/AuthorizationWrapper";

const Home: NextPage = () => {
  return (
    <AuthorizationWrapper>
      <div className="flex flex-col justify-between bg-white px-6">
        <DescriptionContainer />
        <ServicesContainer />
        <NewsletterContainer />
        <ContactContainer />
      </div>
    </AuthorizationWrapper>
  );
};

export default Home;
