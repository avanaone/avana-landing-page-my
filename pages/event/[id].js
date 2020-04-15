import { useRouter } from "next/router";
import parser from "html-react-parser";

import styles from "./EventDetail.module.scss";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import EventCard from "../../components/EventCard";

export default function Event({ data }) {
  const router = useRouter();

  const event = data.find((x) => x.id === router.query.id);
  const otherEvents = data.filter((x) => x.id !== router.query.id).slice(0, 2);

  return (
    <div className={styles.EventDetail}>
      <Navbar />
      <Header title="Event" />
      <main>
        <section>
          <div>
            <img src={event.image} alt="" />
            <h3 className="is-size-4">{event.title}</h3>
            {parser(event.description)}
          </div>
          <div>
            <h3 className="is-size-5">Event Lainnya</h3>
            <div>
              {otherEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

Event.getInitialProps = async () => {
  const res = await import("../../json/event.json");
  const data = res.default;

  return { data };
};
