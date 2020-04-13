import React, { useState } from "react";
import Link from "next/link";
import moment from "moment";

import styles from "./scss/Promo.module.scss";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const getPromo = import("../json/promo.json");

const Promo = () => {
  const [promo, setPromo] = useState([]);

  getPromo.then((res) => {
    return setPromo(res.default);
  });

  return (
    <div className={styles.Promo}>
      <Navbar />
      <Header title="Promo" />
      <main>
        <section>
          {promo.map((promo) => (
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
                        )} - ${moment(promo.period.end, "DD/MM/YYYY").format(
                          "DD MMM YYYY"
                        )}`
                      : `${moment(promo.period.start, "DD/MM/YYYY").format(
                          "DD MMM YYYY"
                        )}`}
                  </span>
                  <Link href="promo/[code]" as={`/promo/${promo.code}`}>
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

export default Promo;
