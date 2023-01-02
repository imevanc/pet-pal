import type { NextPage } from "next";
import ContainerContainer from "../components/ContactContainer";
import DescriptionContainer from "../components/DescriptionContainer";
import FooterContainer from "../components/FooterContainer";
import NewsletterContainer from "../components/NewsletterContainer";
import ServicesContainer from "../components/ServicesContainer";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-between bg-white px-6">
      <DescriptionContainer />
      <ServicesContainer />
      <NewsletterContainer />
      <ContainerContainer />
      <FooterContainer />
    </div>
  );
};

export default Home;
