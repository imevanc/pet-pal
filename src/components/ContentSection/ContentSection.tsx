import DotMeshSvg from "./components/DotMeshSvg";
import Intro from "./components/Intro";
import Main from "./components/Main";
import privacyPolicy from "../../data/fixtures/privacyPolicy.json";

interface ContentSectionPropsIF {
  content: string;
}

const ContentSection: React.FC<ContentSectionPropsIF> = ({ content }) => {
  const contentWithData = content === "policy" ? privacyPolicy : null;

  return (
    <div className="relative overflow-hidden bg-white pt-6 pb-16">
      <DotMeshSvg />
      <div className="relative px-6 lg:px-8">
        <Intro introData={contentWithData?.Intro} />
        <Main />
      </div>
    </div>
  );
};

export default ContentSection;
