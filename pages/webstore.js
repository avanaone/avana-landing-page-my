import Head from "next/head";
import ContainerAnalytic from "../components/AnalyticContainer";
import Feature from "../components/Feature";

const Webstore = () => (
  <ContainerAnalytic>
    <div>
      <Head>
        <title>Webstore • AVANA</title>
      </Head>
      <Feature id="webstore" title="Webstore" className="flex-d-row-reverse" />
    </div>
  </ContainerAnalytic>
);

export default Webstore;
