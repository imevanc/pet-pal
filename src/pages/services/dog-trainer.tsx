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

const DogTrainer: NextPage = () => {
  const heading: string = "Expand Your Dog Owners Network.";
  const paragraph: string = `You run classes, 121s or home consultations? We are here for
  you! Enlist into our application as a qualified dog trainer &
  your local dog owners can reserve your services. Late show ups,
  cancellations & delays? Dog Owners pay per minute, so everyone
  is happy!`;
  const connectWith: ConnectionsContext = {
    connectionOne: "Dog Owners",
    connectionTwo: "Food Suppliers",
    connectionThree: "Dog Breeders",
  };
  const image: ImageContext = {
    source: "/dog-trainer.jpg",
    alternative: "dog-trainer-photo",
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

export default DogTrainer;
