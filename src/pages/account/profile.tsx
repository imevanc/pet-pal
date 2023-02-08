import type { NextPage } from "next";
import AuthorizationWrapper from "../../components/AuthorizationWrapper";
import EditProfilePage from "../../components/EditProfilePage/EditProfilePage";

const Profile: NextPage = () => {
  return (
    <AuthorizationWrapper>
      <EditProfilePage />
    </AuthorizationWrapper>
  );
};

export default Profile;
