import React, { useState } from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContainerAnalytic from "../components/AnalyticContainer";

import PromoCard from "../components/PromoCard";

import styles from "./scss/Promo.module.scss";

const getPromo = import("../json/promo.json");

const Promo = () => {
  const [promo, setPromo] = useState([]);

  getPromo.then((res) => setPromo(res.default));

  return (
    <ContainerAnalytic>
      <div className={styles.Promo}>
        <Head>
          <title>Promo • AVANA</title>
        </Head>
        <Navbar />
        <Header title="Promo" />
        <main>
          <section>
            {promo.map((promo) => (
              <PromoCard key={promo.code} promo={promo} />
            ))}
          </section>
        </main>
        <Footer />
      </div>
    </ContainerAnalytic>
  );
};

export default Promo;
