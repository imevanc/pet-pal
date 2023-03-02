import type { NextPage } from "next";
import AuthorizationWrapper from "../../../../components/AuthorizationWrapper";
import MyPetsPage from "../../../../components/MyPetsPage/MyPetsPage";

const MyPets: NextPage = () => {
  return (
    <AuthorizationWrapper>
      <MyPetsPage />
    </AuthorizationWrapper>
  );
};

export default MyPets;
