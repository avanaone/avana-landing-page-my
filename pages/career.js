import React, { useState } from 'react';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

import CareerCard from '../components/CareerCard';

import ContainerAnalytic from '../components/AnalyticContainer';

import styles from './scss/Career.module.scss';

const getEvents = import('../json/career.json');

const Career = () => {
  const [events, setEvents] = useState([]);

  getEvents.then((res) => setEvents(res.default));
  // console.log(events);
  return (
    <ContainerAnalytic>
      <div className={styles.Career}>
        <Head>
          <title>Career • AVANA</title>
        </Head>
        <Navbar />
        <Header title='Career' />
        <main>
          <section className='section-title'>
            <h3>The Role That Suits You</h3>
            <p>
              Discover the role where you can hone your skills for your personal
              growth and use your superpower to help more sellers sell better
            </p>
          </section>
          <section>
            {events
              ? events
                  .filter((x) => x.id < 11 && !x.isTraining)
                  .map((event) => <CareerCard key={event.id} event={event} />)
              : ''}
          </section>
          {/* <section className="section-title">
            <h3>Training</h3>
          </section>
          <section>
            {events ? events.filter((x) => x.isTraining).map((event) => (
              <EventCard key={event.id} event={event} />
            )): ''}
          </section> */}
        </main>
        <Footer />
      </div>
    </ContainerAnalytic>
  );
};

export default Career;
