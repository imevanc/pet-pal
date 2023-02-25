import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import ImageContainer from "./components/ImageContainer";
import ConnectWith from "./components/ConnectWith";
import { ServicesPageIF } from "../../interfaces/ServicesPageIF";

const ServicesPage: React.FC<ServicesPageIF> = ({
  heading,
  paragraph,
  connectWith,
  image,
}) => {
  return (
    <div className="grow shrink-0">
      <div className="w-full mt-6 lg:mt-0">
        <div className="mx-auto max-w-7xl h-[80%] lg:flex lg:justify-center">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="px-4 sm:px-6 text-center lg:text-left md:max-w-2xl lg:flex lg:text-left">
              <div>
                <Heading heading={heading} />
                <Paragraph paragraph={paragraph} />
                <ConnectWith connectWith={connectWith} />
              </div>
            </div>
            <ImageContainer image={image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
