import React, { useState } from 'react';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

import EventCard from '../components/EventCard';

import ContainerAnalytic from '../components/AnalyticContainer';

import styles from './scss/Event.module.scss';

const getEvents = import('../json/event.json');

const Event = () => {
  const [events, setEvents] = useState([]);

  getEvents.then((res) => setEvents(res.default));
  console.log(events);
  return (
    <ContainerAnalytic>
      <div className={styles.Event}>
        <Head>
          <title>Event • AVANA</title>
        </Head>
        <Navbar />
        <Header title='Event' />
        <main>
          {/* <section className="section-title">
            <h3>Upcoming</h3>
          </section>
          <section>
            {events ? events.filter((x) => x.id > 10).map((event) => (
              <EventCard key={event.id} event={event} />
            )): ''}
          </section>
          <section className="section-title">
            <h3>Past</h3>
          </section> */}
          <section>
            {events ? events.filter((x) => x.id < 11 && !x.isTraining).map((event) => (
              <EventCard key={event.id} event={event} />
            )): ''}
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

export default Event;
