import DotMeshSvg from "./components/DotMeshSvg";
import Intro from "./components/Intro";
import MainPolicy from "./components/MainPolicy";
import privacyPolicy from "../../data/fixtures/privacyPolicy.json";
import termsOfService from "../../data/fixtures/termsOfService.json";
import { IntroSectionIF } from "../../interfaces/IntroSectionIF";
import MainTerms from "./components/MainTerms";

interface ContentSectionPropsIF {
  content: string;
}

const ContentSection: React.FC<ContentSectionPropsIF> = ({ content }) => {
  const contentWithData: IntroSectionIF =
    content === "policy" ? privacyPolicy : termsOfService;
  const MainContent: React.FC = content === "policy" ? MainPolicy : MainTerms;
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
