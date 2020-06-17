import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import parser from 'html-react-parser';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import EventCard from '../../components/EventCard';

import ContainerAnalytic from '../../components/AnalyticContainer';

import './EventDetail.scss';

export default function Event({ data }) {
  const router = useRouter();
  const [events, setEvents] = useState(data);
  const [lang, setLang] = useState("en");

  useEffect(() => {
    if(localStorage.getItem("lang")) {
      setLang(localStorage.getItem("lang"));
    } else {
      localStorage.setItem("lang", "en");
    }
  }, []);

  const event = events.find((x) => x.id === router.query.id);
  const otherEvents = events
    .filter((x) => x.id !== router.query.id)
    .slice(0, 5);

  return (
    <div className="EventDetail">
      {event && (
        <ContainerAnalytic>
          <Navbar />
          <Header title="Event" />
          <main>
            <section>
              <div>
                <img src={lang === 'en' ? event.image.en : event.image.bm} alt="" />
                <h3 className="is-size-4">{lang === 'en' ? event.title.en : event.title.bm }</h3>
                {lang === 'en' ? parser(event.description.en) : parser(event.description.bm) }
              </div>
              <div>
                <h3 className="is-size-5">{lang === 'en' ? "Other Event" : "Event lainnya" }</h3>
                <div>
                  {otherEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </ContainerAnalytic>
      )}
    </div>
  );
}

Event.getInitialProps = async () => {
  const res = await import('../../json/event.json');
  const data = res.default;

  return { data };
};
