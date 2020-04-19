import React, { useState } from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { LinkButton } from "../components/Button";
import AdditionalService from "../components/AdditionalService";

import styles from "./scss/Price.module.scss";

import { formatCurrency } from "../utils";

const getPackages = import("../json/packages.json");

const Price = () => {
  const [period, setPeriod] = useState("yearly");
  const [packages, setPackages] = useState([]);

  getPackages.then((res) => {
    setPackages(res.default.id.packages);
  });

  const handleFilterPeriod = (period) => setPeriod(period);

  return (
    <div className={styles.Price}>
      <Head>
        <title>Harga Paket • AVANA</title>
      </Head>
      <Navbar />
      <Header title="Harga Paket" />
      <main>
        <section>
          <div className="tabs-container">
            <ul className="ava-tabs">
              <li
                className={period === "monthly" ? "active" : ""}
                onClick={() => handleFilterPeriod("monthly")}
              >
                Bulanan
              </li>
              <li
                className={period === "quarterly" ? "active" : ""}
                onClick={() => handleFilterPeriod("quarterly")}
              >
                3 Bulan
              </li>
              <li
                className={period === "semi-annually" ? "active" : ""}
                onClick={() => handleFilterPeriod("semi-annually")}
              >
                6 Bulan
              </li>
              <li
                className={period === "yearly" ? "active" : ""}
                onClick={() => handleFilterPeriod("yearly")}
              >
                1 Tahun
              </li>
            </ul>
            <AdditionalService />
          </div>
          <div className="packages">
            {packages
              .filter((pck) => pck.period === period)
              .map((pkg) => (
                <div
                  key={pkg.code}
                  className={`package ${pkg.is_popular ? "popular" : ""}`}
                >
                  <span className="name is-size-5">{pkg.name}</span>
                  {pkg.price === pkg.discounted_price ? (
                    <>
                      <span className="price is-size-4">
                        {formatCurrency(pkg.price, pkg.currency)}
                      </span>
                    </>
                  ) : (
                    <div>
                      <strike className="is-size-6">
                        {formatCurrency(pkg.price, pkg.currency)}
                      </strike>
                      <div className="price is-size-4">
                        {formatCurrency(pkg.discounted_price, pkg.currency)}
                      </div>
                    </div>
                  )}
                  <ul>
                    {pkg.highlight_feature.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                    <li className="has-text-weight-light">Webstore</li>
                    <li className="has-text-weight-light">Payment gateway</li>
                    <li className="has-text-weight-light">Manajemen order</li>
                  </ul>
                  <LinkButton
                    href={`https://payment.avana.asia/pay?plan=${pkg.slug}`}
                    target="__blank"
                    className="btn-primary"
                  >
                    Pilih Paket
                  </LinkButton>
                </div>
              ))}
          </div>
          <a href="/packages-detail">Lihat Perbandingan</a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Price;
