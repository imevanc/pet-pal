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

const DogSitter: NextPage = () => {
  const heading: string =
    "Sick Of Having Delays & Cancellations From Dog Owners?";
  const paragraph: string = `The solution for you is here! Enlist into our platform as a
  verified dog sitter or walker and dog owners can reserve your
  services with a click of a button. All reservations are
  non-refundable, so everyone is happy! All communications go
  through our platform in order to provide safe and smooth
  services. Dog owners that run late will be charged per minute!`;
  const connectWith: ConnectionsContext = {
    connectionOne: "Dog Trainers",
    connectionTwo: "Food Suppliers",
    connectionThree: "Dog Breeders",
  };
  const image: ImageContext = {
    source: "/dog-sitter.jpg",
    alternative: "dog-sitter-photo",
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

export default DogSitter;
