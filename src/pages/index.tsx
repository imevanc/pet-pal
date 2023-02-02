import type { NextPage } from "next";
import ContactContainer from "../components/ContactContainer";
import DescriptionContainer from "../components/DescriptionContainer";
import NewsletterContainer from "../components/NewsletterContainer/NewsletterContainer";
import ServicesContainer from "../components/ServicesContainer";
import { useSession } from "next-auth/react";
import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import type { CookieAttributes } from "js-cookie";
import { SAME_SITE_OPTIONS } from "../data/SAME_SITE_OPTIONS";
import {
  DEFAULT_COOKIE_EXPIRATION,
  DEFAULT_SAME_SITE,
} from "../data/COOKIE_CONSENT";
import { getLegacyCookieName } from "../utils/getLegacyCookieName";

const Home: NextPage = () => {
  /**
   * Function to set the consent cookie based on the provided variables
   * Sets two cookies to handle incompatible browsers, more details:
   * https://web.dev/samesite-cookie-recipes/#handling-incompatible-clients
   */
  const setCookie = React.useCallback(
    (cookieName: string, cookieValue: string): void => {
      const cookieSecurity = location ? location.protocol === "https:" : true;

      const cookieOptions: CookieAttributes = {
        expires: DEFAULT_COOKIE_EXPIRATION,
        sameSite: DEFAULT_SAME_SITE,
        secure: cookieSecurity,
      };

      // Fallback for older browsers where can not set SameSite=None, SEE: https://web.dev/samesite-cookie-recipes/#handling-incompatible-clients
      if (DEFAULT_SAME_SITE === SAME_SITE_OPTIONS.NONE) {
        Cookies.set(
          getLegacyCookieName(cookieName),
          cookieValue,
          cookieOptions
        );
      }

      // set the regular cookie
      Cookies.set(cookieName, cookieValue, cookieOptions);
    },
    []
  );

  const setUserDataCookie = React.useCallback(
    (cookieName: string, cookieValue: string) => {
      setCookie(cookieName, cookieValue);
    },
    [setCookie]
  ); // eslint-disable-line react-hooks/exhaustive-deps

  const { data: session } = useSession();

  React.useEffect((): void => {
    const fetchProviderUserByEmail = async (email: string): Promise<any> => {
      try {
        const fetchedUser = await axios.get(
          `/api/getProviderUserByEmail?email=${email}`
        );
        if (fetchedUser.data) {
          setUserDataCookie("user", JSON.stringify(fetchedUser.data));
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (session) {
      fetchProviderUserByEmail(JSON.stringify(session.user?.email));
    }
  }, [session, setUserDataCookie]);
  return (
    <div className="flex flex-col justify-between bg-white px-6">
      <DescriptionContainer />
      <ServicesContainer />
      <NewsletterContainer />
      <ContactContainer />
    </div>
  );
};

export default Home;
