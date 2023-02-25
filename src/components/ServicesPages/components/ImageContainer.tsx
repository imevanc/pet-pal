import { ImageContainerIF } from "../../../interfaces/ImageContainerIF";

interface ImageContainerPropsIF {
  image: ImageContainerIF;
}

const ImageContainer: React.FC<ImageContainerPropsIF> = ({ image }) => {
  return (
    <div className="mt-2 lg:mt-0">
      <div className="sm:w-full sm:overflow-hidden sm:rounded-lg">
        <div className="px-4 py-8 sm:px-10">
          <div className="flex-shrink-0 overflow-hidden rounded-lg">
            <img
              className="h-full w-full"
              src={image.source}
              alt={image.alternative}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
