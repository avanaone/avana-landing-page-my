import React, { useState } from "react";
import moment from "moment";

import styles from "./scss/Promo.module.scss";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const getPromo = import("../json/promo.json");

const Promo = () => {
  const [promo, setPromo] = useState([]);

  getPromo.then((res) => {
    return setPromo(res.default);
  });

  const promoUI = Array(9).fill(
    promo.map((promo) => (
      <div key={promo.code} className="promo">
        <div
          className="image"
          style={{ backgroundImage: `url(${promo.image})` }}
        />
        <div className="detail">
          <h3 className="name is-size-6">{promo.title}</h3>
          <hr />
          <div>
            <span>
              <b>Masa Berlaku</b>
              <br />
              {`${moment(promo.period.start, "DD/MM/YYYY").format(
                "DD MMM"
              )} - ${moment(promo.period.end, "DD/MM/YYYY").format(
                "DD MMM YYYY"
              )}`}
            </span>
            <Link href="promo/[code]" as={`/promo/${promo.code}`}>
              <a className="ava-btn btn-primary">Lihat Detail</a>
            </Link>
          </div>
        </div>
      </div>
    ))
  );

  return (
    <div className={styles.Promo}>
      <Navbar />
      <Header title="Promo" />
      <main>
        <section>{promoUI}</section>
      </main>
      <Footer />
    </div>
  );
};

export default Promo;
