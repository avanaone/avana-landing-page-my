import React, { useState } from "react";
import { useRouter } from "next/router";
import parser from "html-react-parser";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import PromoCard from "../../components/PromoCard";

import "./PromoDetail.scss";

export default function PromoDetail({ data }) {
  const router = useRouter();
  const [promos, setPromos] = useState(data);

  const promo = promos.find((x) => x.code === router.query.code);
  const otherPromo = promos
    .filter((x) => x.code !== router.query.code)
    .slice(0, 5);

  return (
    <div className="PromoDetail">
      {promo && (
        <>
          <Navbar />
          <Header title="Promo" />
          <main>
            <section>
              <div>
                <img src={promo.image} alt="" />
                <h3 className="is-size-4">{promo.title}</h3>
                {parser(promo.description)}
                <ol>
                  {promo.termsConditions.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ol>
              </div>
              <div>
                <h3 className="is-size-5">Promo Lainnya</h3>
                <div>
                  {otherPromo.map((promo) => (
                    <PromoCard key={promo.code} promo={promo} />
                  ))}
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

PromoDetail.getInitialProps = async () => {
  const res = await import("../../json/promo.json");
  const data = res.default;

  return { data };
};
