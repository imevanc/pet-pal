import type { NextPage } from "next";
import ServicesPage from "../../components/ServicesPages/ServicesPage";
import dogOwner from "../../data/fixtures/dogOwner.json";
import { ServicesPageIF } from "../../interfaces/ServicesPageIF";

const DogOwner: NextPage = () => {
  const { heading, paragraph, connectWith, image }: ServicesPageIF = dogOwner;
  return (
    <ServicesPage
      heading={heading}
      paragraph={paragraph}
      connectWith={connectWith}
      image={image}
    />
  );
};

export default DogOwner;
