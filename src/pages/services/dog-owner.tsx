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

const DogOwner: NextPage = () => {
  const heading: string = "Socialise, Learn & Become A Responsible Dog Owner.";
  const paragraph: string = `Does your dog react unsual and you do not know what to do? We
  have been there! Use our platform to connect with dog trainers
  that can help you with different dog issues. Do you like group
  dog walks or want to avoid some local dogs? You can use our
  platform and connect with other dog owners globally.`;
  const connectWith: ConnectionsContext = {
    connectionOne: "Dog Trainers",
    connectionTwo: "Food Suppliers",
    connectionThree: "Dog Walkers",
  };
  const image: ImageContext = {
    source: "/dog-owner.jpg",
    alternative: "dog-owner-photo",
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

export default DogOwner;
