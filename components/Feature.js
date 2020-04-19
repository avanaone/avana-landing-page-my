import React, { useState } from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

import { LinkButton } from "./Button";

const Features = import("../json/features.json");

export default function Feature(props) {
  const { id, title, CS, className } = props;
  const [feature, setFeature] = useState([]);

  Features.then((res) => setFeature(res.default[id]));

  return (
    <div className="features">
      <Head>
        <title>{`${title} • AVANA`}</title>
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
            </div>
            <div className="feature-img">
              <img
                src={require(`../public/assets/images/${feature.image}`)}
                alt=""
              />
            </div>
          </section>
        ))}
        <section className="trial">
          <h2 className="is-size-4">
            {CS ? `Tertarik dengan ${title}?` : "Coba Sekarang GRATIS 14 Hari"}
          </h2>
          <LinkButton
            href={
              CS
                ? `https://ws.avana.asia/6288211047841/Halo, saya tertarik menggunakan produk ${title}`
                : "https://store.avana.asia/"
            }
            target="__blank"
            className="btn-primary"
          >
            {CS ? `Hubungi Kami` : "Coba Gratis"}
          </LinkButton>
        </section>
      </main>
      <Footer />
    </div>
  );
}
