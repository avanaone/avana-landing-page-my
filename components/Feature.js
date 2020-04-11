import React, { useState } from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Features = import("../json/features.json");

export default function Feature(props) {
  const { id, title, className } = props;
  const [feature, setFeature] = useState([]);

  Features.then((res) => setFeature(res[id]));

  return (
    <div className="features">
      <Head>
        <title>{`AVANA - ${title}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <header>
        <h2 className="is-size-3">{title}</h2>
      </header>
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
            <div>
              <img src={feature.image} alt="" />
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}
