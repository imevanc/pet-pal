import type { NextPage } from "next";
import ContainerContainer from "../components/ContactContainer";
import NewsletterContainer from "../components/NewsletterContainer";
import ReviewsContainer from "../components/ReviewsContainer";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-between bg-white px-6">
      <ReviewsContainer />
      <NewsletterContainer />
      <ContainerContainer />
    </div>
  );
};

export default Home;
