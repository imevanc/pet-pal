import DotMeshSvg from "./components/DotMeshSvg";
import Intro from "./components/Intro";
import { CONTENT_WITH_DATA } from "../../data/CONTENT_WITH_DATA";
import { IntroSectionIF } from "../../interfaces/IntroSectionIF";
import { MAIN_CONTENT } from "../../data/MAIN_CONTENT";

interface ContentSectionPropsIF {
  content: string;
}

const ContentSection: React.FC<ContentSectionPropsIF> = ({ content }) => {
  const contentWithData: IntroSectionIF = CONTENT_WITH_DATA[content];
  const MainContent: React.FC = MAIN_CONTENT[content];
  return (
    <div className="relative overflow-hidden bg-white pt-6 pb-16">
      <DotMeshSvg />
      <div className="relative px-6 lg:px-8">
        <Intro introData={contentWithData?.Intro} />
        <MainContent />
      </div>
    </div>
  );
};

export default ContentSection;
