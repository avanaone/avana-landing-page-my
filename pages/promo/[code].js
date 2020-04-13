import { useRouter } from "next/router";
import Link from "next/link";
import parser from "html-react-parser";
import moment from "moment";

import styles from "./PromoDetail.module.scss";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Promo({ data }) {
  const router = useRouter();

  const promo = data.find((x) => x.code === router.query.code);
  const otherPromo = data.slice(0, 2);

  return (
    <div className={styles.PromoDetail}>
      <Navbar />
      <Header title="Promo" />
      <main>
        <section>
          <div>
            <img src={promo.image} alt="" />
            <h3 className="is-size-4">{promo.title}</h3>
            <p>
              <b>{`KODE PROMO: ${promo.code}`}</b>
            </p>
            {parser(promo.description)}
            <ol>
              {promo.termsConditions.map((x, idx) => (
                <li>{x}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="is-size-5">Promo Lainnya</h3>
            <div>
              {otherPromo.map((promo) => (
                <div key={promo.code} className="promo">
                  <div
                    className="image"
                    style={{ backgroundImage: `url(${promo.image})` }}
                  />
                  <div className="detail">
                    <div>
                      <h3
                        className="name is-size-6"
                        title={promo.title}
                      >{`${promo.title.slice(0, 75)}${
                        promo.title.length > 75 ? " ..." : ""
                      }`}</h3>
                    </div>
                    <hr />
                    <div>
                      <span>
                        <b>Masa Berlaku</b>
                        <br />
                        {promo.period.start !== promo.period.end
                          ? `${moment(promo.period.start, "DD/MM/YYYY").format(
                              "DD MMM"
                            )} - ${moment(
                              promo.period.end,
                              "DD/MM/YYYY"
                            ).format("DD MMM YYYY")}`
                          : `${moment(promo.period.start, "DD/MM/YYYY").format(
                              "DD MMM YYYY"
                            )}`}
                      </span>
                      <Link href="/promo/[code]" as={`/promo/${promo.code}`}>
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

Promo.getInitialProps = async () => {
  const res = await import("../../json/promo.json");
  const data = res.default;

  return { data };
};
