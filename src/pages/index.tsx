import type { NextPage } from "next";
import ContactContainer from "../components/ContactContainer";
import DescriptionContainer from "../components/DescriptionContainer";
import NewsletterContainer from "../components/NewsletterContainer/NewsletterContainer";
import ServicesContainer from "../components/ServicesContainer";
// import { useUser } from "../../lib/hooks";

const Home: NextPage = () => {
  // const user = useUser();
  // console.log({ user });
  return (
    <div className="flex flex-col justify-between bg-white px-6">
      <DescriptionContainer />
      <ServicesContainer />
      <NewsletterContainer />
      <ContactContainer />
    </div>
  );
};

export default Home;
