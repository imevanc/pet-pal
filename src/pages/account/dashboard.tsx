import type { NextPage } from "next";
import AuthorizationWrapper from "../../components/AuthorizationWrapper";
import DashboardPage from "../../components/DashboardPage/DashboardPage";

const Dashboards: NextPage = () => {
  return (
    <AuthorizationWrapper>
      <DashboardPage />
    </AuthorizationWrapper>
  );
};

export default Dashboards;
