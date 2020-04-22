import Head from "next/head";
import ContainerAnalytic from "../components/AnalyticContainer";
import Feature from "../components/Feature";

const Dashboard = () => (
  <ContainerAnalytic>
    <div>
      <Feature
        id="dashboard"
        title="Dashboard"
        className="flex-d-row-reverse"
      />
    </div>
  </ContainerAnalytic>
);

export default Dashboard;
