import React, { useState } from 'react';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Accordion from '../components/Accordion/Accordion';

import ContainerAnalytic from '../components/AnalyticContainer';

import styles from './scss/Promo.module.scss';

const getFAQs = import('../json/faq.json');

const Promo = () => {
  const [faqs, setFaqs] = useState([]);

  getFAQs.then((res) => setFaqs(res.default));

  return (
    <ContainerAnalytic>
      <div className={styles.Promo}>
        <Head>
          <title>FAQ • AVANA</title>
        </Head>
        <Navbar />
        <Header title='FAQ' />
        <main>
          <section className="faq-section">
            {faqs.map((faq) => (
                <Accordion key={faq.code} title={faq.title} content={faq.description} />
            ))}
          </section>
        </main>
        <Footer />
      </div>
    </ContainerAnalytic>
  );
};

export default Promo;
