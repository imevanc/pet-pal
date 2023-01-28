import React from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import type { CookieAttributes } from "js-cookie";
import { SAME_SITE_OPTIONS } from "../../../data/SAME_SITE_OPTIONS";
import {
  DEFAULT_COOKIE_EXPIRATION,
  DEFAULT_SAME_SITE,
  DEFAULT_COOKIE_NAME,
  DEFAULT_COOKIE_VALUE,
  ACCEPT_ONSCROLL_PERCENTAGE,
} from "../../../data/COOKIE_CONSENT";
import { getLegacyCookieName } from "../../../utils/getLegacyCookieName";
import { getCookieConsentValue } from "../../../utils/getCookieConsentValue";

interface CookieBannerPropsIF {
  cookieSecurity?: boolean;
  debug?: boolean;
  acceptOnScroll?: boolean;
}

const CookieBanner: React.FC<CookieBannerPropsIF> = ({
  acceptOnScroll = false,
  debug = false,
}) => {
  const [visible, setVisible] = React.useState<boolean>(false);
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

  const accept = React.useCallback(() => {
    setCookie(DEFAULT_COOKIE_NAME, DEFAULT_COOKIE_VALUE.toString());
    setVisible(false);
    removeScrollListener();
  }, [setCookie]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleScroll = React.useCallback(() => {
    // (top / height) - height * 100
    const rootNode = document.documentElement,
      body = document.body,
      top = "scrollTop",
      height = "scrollHeight";

    const percentage =
      ((rootNode[top] || body[top]) /
        ((rootNode[height] || body[height]) - rootNode.clientHeight)) *
      100;

    if (percentage > ACCEPT_ONSCROLL_PERCENTAGE) {
      accept();
    }
  }, [accept]);

  const removeScrollListener = React.useCallback(() => {
    if (acceptOnScroll) {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [acceptOnScroll, handleScroll]);

  React.useEffect(() => {
    const cookieValue = getCookieConsentValue(DEFAULT_COOKIE_NAME);

    // if cookie undefined or debug
    if (cookieValue === undefined || debug) {
      setVisible(true);
      // if acceptOnScroll is set to true and (cookie is undefined or debug is set to true), add a listener.
      if (acceptOnScroll) {
        window.addEventListener("scroll", handleScroll, { passive: true });
      }
    }

    return () => {
      // Remove listener if still set
      removeScrollListener();
    };
  }, [acceptOnScroll, debug, handleScroll, removeScrollListener, setVisible]);

  if (!visible) {
    return null;
  }

  return (
    <div className="w-full fixed inset-0 z-40 bg-gray-900 bg-opacity-75">
      <div className="fixed bottom-0 left-0 z-50 w-full bg-white">
        <div className="flex flex-col md:flex-row justify-evenly items-center px-6 py-4 lg:py-8 mx-auto text-lg tracking-tight">
          <div className="md:mr-8 mb-8 md:mb-0 text-justify text-gray-600">
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">
              We care about your privacy
            </h3>
            We use cookies and similar technologies to provide the best
            experience on our website. By pressing <i>accept</i> or scrolling
            further down the page, you agree to our{" "}
            <Link
              href="/legal/cookie"
              className="text-lime-600 hover:text-lime-700"
            >
              cookie
            </Link>{" "}
            and{" "}
            <Link
              href="/legal/policy"
              className="text-lime-600 hover:text-lime-700"
            >
              privacy
            </Link>{" "}
            policies.
          </div>

          <button
            key="acceptButton"
            className="block w-full md:w-auto md:inline-block px-6 py-3 bg-lime-600 hover:bg-lime-700 text-white rounded-3xl font-semibold"
            onClick={accept}
            data-cy="accept-cookies"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
