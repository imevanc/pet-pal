import type { NextPage } from "next";
import AuthorizationWrapper from "../../components/AuthorizationWrapper";

const Dashboard: NextPage = () => {
  return (
    <AuthorizationWrapper>
      <div>Dashboard</div>
    </AuthorizationWrapper>
  );
};

export default Dashboard;
