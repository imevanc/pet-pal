import { ReactElement } from "react";

interface TitleParagraphSectionPropsIF {
  titleTag: ReactElement;
  title: string;
  paragraphs: string[];
}

const TitleParagraphSection: React.FC<TitleParagraphSectionPropsIF> = ({
  titleTag,
  title,
  paragraphs,
}) => {
  return <titleTag>{title}</titleTag>;
};

export default TitleParagraphSection;
