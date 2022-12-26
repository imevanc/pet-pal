import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import Image from "./components/Image";
import ConnectWith from "./components/ConnectWith";

interface ImageContext {
  source: string;
  alternative: string;
}

interface ConnectionsContext {
  connectionOne: string;
  connectionTwo: string;
  connectionThree: string;
}

interface ServicesContextProps {
  heading: string;
  paragraph: string;
  connectWith: ConnectionsContext;
  image: ImageContext;
}

const ServicesPage: React.FC<ServicesContextProps> = ({
  heading,
  paragraph,
  connectWith,
  image,
}) => {
  return (
    <div className="w-full mt-6 lg:mt-0 h-screen">
      <div className="mx-auto max-w-7xl lg:h-[80%] lg:flex lg:justify-center">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="px-4 sm:px-6 text-center lg:text-left md:max-w-2xl lg:flex lg:text-left">
            <div>
              <Heading heading={heading} />
              <Paragraph paragraph={paragraph} />
              <ConnectWith connectWith={connectWith} />
            </div>
          </div>
          <Image image={image} />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
