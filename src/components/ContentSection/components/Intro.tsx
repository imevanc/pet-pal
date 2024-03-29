import { IntroData } from "../../../interfaces/IntroData";

interface IntroDataPropsIF {
  introData: IntroData | undefined;
}

const Intro: React.FC<IntroDataPropsIF> = ({ introData }) => {
  return (
    <div className="mx-auto max-w-prose text-lg">
      <h1>
        <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
          {introData?.Heading}
        </span>
      </h1>
      <p className="mt-8 text-xl leading-8 text-gray-500">
        {introData?.Paragraph.Item1}
      </p>
      <p className="mt-8 text-xl leading-8 text-gray-500">
        {introData?.Paragraph.Item2}
      </p>
      <p className="mt-8 text-xl leading-8 text-gray-500">
        {introData?.Paragraph.Item3}
      </p>
      <p className="mt-8 text-xl leading-8 text-gray-500">
        {introData?.Paragraph.Item4}
      </p>
      <p className="mt-8 text-xl leading-8 text-gray-500">
        {introData?.Paragraph.Item5}
      </p>
    </div>
  );
};

export default Intro;
