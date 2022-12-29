import type { NextPage } from "next";
import ServicesPage from "../../components/ServicesPages/ServicesPage";
import foodSupplier from "../../data/fixtures/foodSupplier.json";
import { ServicesPageIF } from "../../interfaces/ServicesPageIF";

const FoodSupplier: NextPage = () => {
  const { heading, paragraph, connectWith, image }: ServicesPageIF =
    foodSupplier;
  return (
    <ServicesPage
      heading={heading}
      paragraph={paragraph}
      connectWith={connectWith}
      image={image}
    />
  );
};

export default FoodSupplier;
