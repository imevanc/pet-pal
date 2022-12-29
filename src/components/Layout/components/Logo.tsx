import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <div className="flex flex-shrink-0 items-center py-2">
      <Image
        className="block my-2 lg:hidden"
        src="/pet-pal-logo.png"
        alt="Pet Pal"
        width={50}
        height={55}
      />
      <Image
        className="hidden my-2 lg:block"
        src="/pet-pal-logo.png"
        alt="Pet Pal"
        width={50}
        height={55}
      />
    </div>
  );
};

export default Logo;
