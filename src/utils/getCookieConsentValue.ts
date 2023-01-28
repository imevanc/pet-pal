import Cookies from "js-cookie";
import { DEFAULT_COOKIE_NAME } from "../data/COOKIE_CONSENT";
import { getLegacyCookieName } from "./getLegacyCookieName";

export const getCookieConsentValue = (name = DEFAULT_COOKIE_NAME) => {
  const cookieValue = Cookies.get(name);

  // if the cookieValue is undefined check for the legacy cookie
  if (cookieValue === undefined) {
    return Cookies.get(getLegacyCookieName(name));
  }

  return cookieValue;
};
