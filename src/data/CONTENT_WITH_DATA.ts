import privacyPolicy from "../data/fixtures/privacyPolicy.json";
import termsOfService from "../data/fixtures/termsOfService.json";
import cookiePolicy from "../data/fixtures/cookiePolicy.json";
import { IntroSectionIF } from "../interfaces/IntroSectionIF";

interface ContentWithDataIF {
  [key: string]: IntroSectionIF;
}

export const CONTENT_WITH_DATA: ContentWithDataIF = {
  policy: privacyPolicy,
  terms: termsOfService,
  cookie: cookiePolicy,
};
