import type { NextPage } from "next";
import ProfilePage from "../../components/ProfilePage/ProfilePage";
import Cookies from "js-cookie";

const Profile: NextPage = () => {
  const userCookie = JSON.parse(`${Cookies.get("user")}`);
  console.log(userCookie);
  return <ProfilePage />;
};

export default Profile;
