import type { NextPage } from "next";
import AuthorizationWrapper from "../../../components/AuthorizationWrapper";
import EditProfilePage from "../../../components/EditProfilePage/EditProfilePage";

const EditProfile: NextPage = () => {
  return (
    <AuthorizationWrapper>
      <EditProfilePage />
    </AuthorizationWrapper>
  );
};

export default EditProfile;
