import type { NextPage } from "next";
import ServicesPage from "../../components/ServicesPages/ServicesPage";
import dogTrainer from "../../data/fixtures/dogTrainer.json";
import { ServicesPageIF } from "../../interfaces/ServicesPageIF";

const DogTrainer: NextPage = () => {
  const { heading, paragraph, connectWith, image }: ServicesPageIF = dogTrainer;
  return (
    <ServicesPage
      heading={heading}
      paragraph={paragraph}
      connectWith={connectWith}
      image={image}
    />
  );
};

export default DogTrainer;
