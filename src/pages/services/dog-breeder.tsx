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

const DogBreeder: NextPage = () => {
  const heading: string = "Upscale Your Game.";
  const paragraph: string =
    "No more waiting list notebooks or last minute puppy purchase cancellations. Our platform gives you the power to compare prospective owners against your criteria, add them to your waiting list (ie they need to pay upfront for the puppy in order to be added) and arrange communication and collection.";
  const connectWith: ConnectionsContext = {
    connectionOne: "Dog Owners",
    connectionTwo: "Food Suppliers",
    connectionThree: "Dog Walkers",
  };
  const image: ImageContext = {
    source: "/dog-breeder.jpg",
    alternative: "dog-breeder-photo",
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

export default DogBreeder;
