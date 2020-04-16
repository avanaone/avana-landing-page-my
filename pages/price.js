import React, { useState } from "react";
import Head from "next/head";

import styles from "./scss/Price.module.scss";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { formatCurrency } from "../utils";

const getPackages = import("../json/packages.json");

const Price = () => {
  const [period, setPeriod] = useState("yearly");
  const [packages, setPackages] = useState([]);
  const [additionalService, setAdditionalServices] = useState([]);
  const [isModal, setIsModal] = useState(false);

  getPackages.then((res) => {
    setPackages(res.default.id.packages);
    setAdditionalServices(res.default.id.additional_services);
  });

  const handleFilterPeriod = (period) => setPeriod(period);
  const toggleModal = () => setIsModal(!isModal);

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
            <button
              type="button"
              className="ava-btn btn-primary"
              onClick={toggleModal}
            >
              Layanan Tambahan
            </button>
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
                    <li className="has-text-weight-light">Facebook store</li>
                    <li className="has-text-weight-light">Webstore</li>
                    <li className="has-text-weight-light">Payment gateway</li>
                    <li className="has-text-weight-light">Order management</li>
                    <li className="has-text-weight-light">Promo code</li>
                  </ul>
                  <a
                    href={`https://payment.avana.asia/pay?plan=${pkg.slug}`}
                    target="__blank"
                    className="ava-btn btn-primary"
                  >
                    Pilih Paket
                  </a>
                </div>
              ))}
          </div>
          <a href="/packages-detail">Lihat Perbandingan</a>
        </section>
        <div className={`modal ${isModal ? "is-active" : ""}`}>
          <div className="modal-background" onClick={toggleModal} />
          <div className="modal-content">
            <button
              className="modal-close is-large"
              aria-label="close"
              onClick={toggleModal}
            >
              Close
            </button>
            <h2>Layanan Tambahan</h2>
            <table>
              <tbody>
                {additionalService.map((service, idx) => (
                  <tr key={idx}>
                    <td>{service.name}</td>
                    <td>
                      <ul>
                        {service.services.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </td>
                    <td>{service.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Price;
