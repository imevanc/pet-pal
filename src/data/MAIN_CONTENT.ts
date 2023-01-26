import MainPolicy from "../components/ContentSection/components/MainPolicy";
import MainTerms from "../components/ContentSection/components/MainTerms";
import MainCookie from "../components/ContentSection/components/MainCookie";

interface MainContentIF {
  [key: string]: React.FC<{}>;
}

export const MAIN_CONTENT: MainContentIF = {
  policy: MainPolicy,
  terms: MainTerms,
  cookie: MainCookie,
};
