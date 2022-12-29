import type { NextPage } from "next";
import ServicesPage from "../../components/ServicesPages/ServicesPage";
import dogBreeder from "../../data/fixtures/dogBreeder.json";
import { ServicesPageIF } from "../../interfaces/ServicesPageIF";

const DogBreeder: NextPage = () => {
  const { heading, paragraph, connectWith, image }: ServicesPageIF = dogBreeder;
  return (
    <ServicesPage
      heading={heading}
      paragraph={paragraph}
      connectWith={connectWith}
      image={image}
    />
  );
};

export default DogBreeder;
