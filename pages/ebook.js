import React, { useState } from 'react';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

import EbookCard from '../components/EbookCard';

import ContainerAnalytic from '../components/AnalyticContainer';

import styles from './scss/Event.module.scss';

const getEvents = import('../json/ebook.json');

const Ebook = () => {
  const [events, setEvents] = useState([]);

  getEvents.then((res) => setEvents(res.default));

  return (
    <ContainerAnalytic>
      <div className={styles.Event}>
        <Head>
          <title>Ebook • AVANA</title>
        </Head>
        <Navbar />
        <Header title='Ebook' />
        <main>
          <section>
            {events.map((event) => (
              <EbookCard key={event.id} event={event} />
            ))}
          </section>
        </main>
        <Footer />
      </div>
    </ContainerAnalytic>
  );
};

export default Ebook;
