import type { NextPage } from "next";
import ServicesPage from "../../components/ServicesPages/ServicesPage";

interface ImageContext {
  source: string;
  alternative: string;
}

interface ConnectionsContext {
  connectionOne: string;
  connectionTwo: string;
  connectionThree: string;
}

const FoodSupplier: NextPage = () => {
  const heading: string =
    "Food Marketing & Social Media Promotions Are Difficult.";
  const paragraph: string = `The solution for you is here! Enlist into our platform as a food
  supplier or stockist and dog owners, dog breeders, dog sitters &
  dog trainers will be able to be informed about your products and
  services today! We support different types of dog food.`;
  const connectWith: ConnectionsContext = {
    connectionOne: "Dog Owners",
    connectionTwo: "Dog Trainers",
    connectionThree: "Dog Breeders",
  };
  const image: ImageContext = {
    source: "/food-supplier.jpg",
    alternative: "food-supplier-photo",
  };
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
