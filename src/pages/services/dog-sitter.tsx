import type { NextPage } from "next";
import ServicesPage from "../../components/ServicesPages/ServicesPage";
import dogSitter from "../../data/fixtures/dogSitter.json";
import { ServicesPageIF } from "../../interfaces/ServicesPageIF";

const DogSitter: NextPage = () => {
  const { heading, paragraph, connectWith, image }: ServicesPageIF = dogSitter;
  return (
    <ServicesPage
      heading={heading}
      paragraph={paragraph}
      connectWith={connectWith}
      image={image}
    />
  );
};

export default DogSitter;
