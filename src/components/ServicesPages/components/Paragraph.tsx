interface ParagraphProps {
  paragraph: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ paragraph }) => {
  return (
    <p className="text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
      {paragraph}
    </p>
  );
};

export default Paragraph;
