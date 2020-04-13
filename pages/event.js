import React, { useState } from "react";
import Link from "next/link";
import moment from "moment";

import styles from "./scss/Promo.module.scss";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const getEvents = import("../json/event.json");

const Event = () => {
  const [events, setEvents] = useState([]);

  getEvents.then((res) => {
    return setEvents(res.default);
  });

  return (
    <div className={styles.Promo}>
      <Navbar />
      <Header title="Event" />
      <main>
        <section>
          {events.map((event, idx) => (
            <div key={idx} className="promo">
              <div
                className="image"
                style={{ backgroundImage: `url(${event.image})` }}
              />
              <div className="detail">
                <span className="has-text-success has-text-weight-bold">
                  {event.date}
                </span>
                <div>
                  <h3
                    className="name is-size-6"
                    title={event.title}
                  >{`${event.title.slice(0, 75)}${
                    event.title.length > 75 ? " ..." : ""
                  }`}</h3>
                </div>
                <hr />
                <div>
                  <div>
                    <span title={event.location}>{`${event.location.slice(
                      0,
                      75
                    )}${event.location.length > 75 ? " ..." : ""}`}</span>
                  </div>
                  <Link href="/event/[id]" as={`/event/${event.id}`}>
                    <a className="ava-btn btn-primary">Lihat Detail</a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Event;
