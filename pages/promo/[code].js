import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import parser from "html-react-parser";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import PromoCard from "../../components/PromoCard";

import ContainerAnalytic from "../../components/AnalyticContainer";

import "./PromoDetail.module.scss";

export default function PromoDetail({ data }) {
  const router = useRouter();
  const [promos, setPromos] = useState(data);
  const [lang, setLang] = useState("en");

  useEffect(() => {
    if (localStorage.getItem("lang")) {
      setLang(localStorage.getItem("lang"));
    } else {
      localStorage.setItem("lang", "en");
    }
  }, []);

  const promo = promos.find((x) => x.code === router.query.code);
  const otherPromo = promos
    .filter((x) => x.code !== router.query.code)
    .slice(0, 5);

  return (
    <div className="PromoDetail">
      {promo && (
        <ContainerAnalytic>
          <Navbar />
          <Header title="Promo" />
          <main>
            <section>
              <div>
                <img
                  src={lang === "en" ? promo.image.en : promo.image.bm}
                  alt=""
                />
                <h3 className="is-size-4">
                  {lang === "en" ? promo.title.en : promo.title.bm}
                </h3>
                {lang === "en"
                  ? parser(promo.description.en)
                  : parser(promo.description.bm)}
                <ol>
                  {promo.termsConditions.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ol>
              </div>
              <div>
                <h3 className="is-size-5">
                  {lang === "en" ? "Other Promo" : "Promo lainnya"}
                </h3>
                <div>
                  {otherPromo.map((promo) => (
                    <PromoCard key={promo.code} promo={promo} />
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

PromoDetail.getInitialProps = async () => {
  const res = await import("../../json/promo.json");
  const data = res.default;

  return { data };
};
