import Head from "next/head";

import Feature from "../components/Feature";

const Dashboard = () => (
  <div>
    <Head>
      <title>Dashboard • AVANA</title>
    </Head>
    <Feature id="dashboard" title="Dashboard" className="flex-d-row-reverse" />
  </div>
);

export default Dashboard;
