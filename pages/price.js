import React, { useState } from "react";
import styles from "./scss/Price.module.scss";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { formatCurrency } from "../utils";

const getPackages = import("../json/packages.json");

const Price = () => {
  const [period, setPeriod] = useState("yearly");
  const [packages, setPackages] = useState([]);

  getPackages.then((res) => setPackages(res.default.id.packages));

  const packagesUI = packages
    .filter((pck) => pck.period === period)
    .map((pkg) => (
      <div
        key={pkg.code}
        className={`package ${pkg.is_popular ? "popular" : ""}`}
      >
        <span className="name is-size-5">{pkg.name}</span>
        <span className="price is-size-4">
          {formatCurrency(pkg.price, pkg.currency)}
        </span>
        <ul>
          <li className="has-text-weight-light">Facebook store</li>
          <li className="has-text-weight-light">Webstore</li>
          <li className="has-text-weight-light">Payment gateway</li>
          <li className="has-text-weight-light">Order management</li>
          <li className="has-text-weight-light">Promo code</li>
        </ul>
        <button type="button" className="ava-btn btn-primary">
          Pilih Paket
        </button>
      </div>
    ));

  const handleFilterPeriod = (period) => setPeriod(period);

  return (
    <div className={styles.Price}>
      <Navbar />
      <header>
        <h2 className="is-size-3">Harga Paket</h2>
      </header>
      <main>
        <section>
          <ul>
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
          <div className="packages">{packagesUI}</div>
          <a href="/packages-comparison">See full comparison</a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Price;
