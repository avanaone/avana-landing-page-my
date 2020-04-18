import React, { useState } from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

const Features = import("../json/features.json");

export default function Feature(props) {
  const { id, title, className } = props;
  const [feature, setFeature] = useState([]);

  Features.then((res) => setFeature(res.default[id]));

  return (
    <div className="features">
      <Head>
        <title>{`AVANA - ${title}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header title={title} />
      <main>
        {feature.map((feature, idx) => (
          <section
            key={idx}
            className={`feature ${className ? className : ""}`}
          >
            <div className="description">
              <h2 className="is-size-4">{feature.title}</h2>
              <p>{feature.description}</p>
              {/* <a
                href={feature.slug}
                target="__blank"
                className="ava-btn btn-primary"
              >
                Saya Tertarik
              </a> */}
            </div>
            <div className="feature-img">
              <img
                src={require(`../public/assets/images/${feature.image}`)}
                alt=""
              />
            </div>
          </section>
        ))}
        <section id="trial">
          <h2 className="is-size-4">
            {title == "Manajemen Reseller"
              ? "Tertarik dengan Manajemen Reseller?"
              : title == "AVAChat"
              ? "Tertarik dengan AVAChat?"
              : " Mulai uji coba gratis 14 hari Anda"}
          </h2>
          <a
            href="https://store.avana.asia/"
            target="__blank"
            className="ava-btn btn-primary"
          >
            {title == "Manajemen Reseller" || title == "AVAChat"
              ? "Hubungi kami"
              : "Coba Sekarang GRATIS 14 Hari"}
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
