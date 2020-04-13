import { useRouter } from "next/router";
import Link from "next/link";
import parser from "html-react-parser";
import moment from "moment";

import styles from "./PromoDetail.module.scss";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Event({ data }) {
  const router = useRouter();

  const event = data.find((x) => x.id === router.query.id);
  const otherEvents = data.slice(0, 2);

  return (
    <div className={styles.PromoDetail}>
      <Navbar />
      <Header title="Promo" />
      <main>
        <section>
          <div>
            <img src={event.image} alt="" />
            <h3 className="is-size-4">{event.title}</h3>
            {parser(event.description)}
          </div>
          <div>
            <h3 className="is-size-5">Promo Lainnya</h3>
            <div>
              {otherEvents.map((event) => (
                <div key={event.id} className="promo">
                  <div
                    className="image"
                    style={{ backgroundImage: `url(${event.image})` }}
                  />
                  <div className="detail">
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
                      <span>
                        <br />
                        {event.date}
                      </span>
                      <Link href="[code]" as={`/promo/${event.code}`}>
                        <a className="ava-btn btn-primary">Lihat Detail</a>
                      </Link>
                    </div>
                  </div>
                </div>
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
