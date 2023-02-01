import { magic } from "../../../lib/magic";
import { removeTokenCookie } from "../../../lib/auth-cookies";
import { getLoginSession } from "../../../lib/auth";
// import Cookies from "js-cookie";

export default async function logout(req, res) {
  try {
    const session = await getLoginSession(req);

    if (session) {
      await magic.users.logoutByIssuer(session.issuer);
      // console.log(Cookies.get());
      // console.log(Cookies.get("users"));
      // Cookies.remove("user");
      removeTokenCookie(res);
    }
  } catch (error) {
    console.error(error);
  }

  res.writeHead(302, { Location: "/" });
  res.end();
}
