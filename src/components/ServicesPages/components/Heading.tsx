interface HeadingIF {
  heading: string;
}

const Heading: React.FC<HeadingIF> = ({ heading }) => {
  return (
    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
      {heading}
    </h1>
  );
};

export default Heading;
