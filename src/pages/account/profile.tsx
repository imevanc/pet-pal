import type { NextPage } from "next";
import AuthorizationWrapper from "../../components/AuthorizationWrapper";

const Profile: NextPage = () => {
  return (
    <AuthorizationWrapper>
      <div>My Profile</div>
    </AuthorizationWrapper>
  );
};

export default Profile;
