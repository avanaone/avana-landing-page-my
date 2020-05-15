import React, { useState } from 'react';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

import PromoCard from '../components/PromoCard';

import ContainerAnalytic from '../components/AnalyticContainer';

import styles from './scss/Promo.module.scss';

const getPromos = import('../json/promo.json');

const Promo = () => {
  const [promos, setPromos] = useState([]);

  getPromos.then((res) => setPromos(res.default));

  return (
    <ContainerAnalytic>
      <div className={styles.Promo}>
        <Head>
          <title>Promo • AVANA</title>
        </Head>
        <Navbar />
        <Header title='Promo' />
        <main>
          <section className="section-title">
            <h3>Promo</h3>
          </section>
          <section>
            {promos.filter((x) => x.isPromo ).map((promo) => (
              <PromoCard key={promo.code} promo={promo} />
            ))}
          </section>
          <section className="section-title">
            <h3>Program</h3>
          </section>
          <section>
            {promos.filter((x) => !x.isPromo ).map((promo) => (
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
