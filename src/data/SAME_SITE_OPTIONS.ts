import type { CookieAttributes } from "js-cookie";

export const SAME_SITE_OPTIONS: {
  [key: string]: CookieAttributes["sameSite"];
} = {
  STRICT: "strict",
  LAX: "lax",
  NONE: "none",
};
