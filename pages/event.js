import React, { useState } from "react";
import Head from "next/head";

import styles from "./scss/Event.module.scss";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

import EventCard from "../components/EventCard";

const getEvents = import("../json/event.json");

const Event = () => {
  const [events, setEvents] = useState([]);

  // getEvents.then((res) => {
  //   return setEvents(res.default);
  // });

  return (
    <div className={styles.Event}>
      <Head>
        <title>Event • AVANA</title>
      </Head>
      <Navbar />
      <Header title="Event" />
      <main>
        <section>
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Event;
