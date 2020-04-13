import React, { useState } from "react";
import styles from "./scss/PackagesDetail.module.scss";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { formatCurrency } from "../utils";

const getPackages = import("../json/packages.json");
const getPackagesDetail = import("../json/packages-detail.json");

const Price = () => {
  const [period, setPeriod] = useState("yearly");
  const [packages, setPackages] = useState([]);
  const [packagesDetail, setPackagesDetail] = useState([]);

  getPackages.then((res) => setPackages(res.default.id.packages));
  getPackagesDetail.then((res) => setPackagesDetail(res.default.id.features));

  const handleFilterPeriod = (period) => setPeriod(period);

  return (
    <div className={styles.PackagesDetail}>
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
          <div className="packages-detail">
            <table>
              <thead>
                <tr>
                  <th></th>
                  {packages
                    .filter((pck) => pck.period === period)
                    .map((pkg) => (
                      <th key={pkg.code}>
                        <div
                          className={`package ${
                            pkg.is_popular ? "popular" : ""
                          }`}
                        >
                          <span className="name is-size-5">{pkg.name}</span>
                          <span className="price is-size-4 has-text-success">
                            {formatCurrency(pkg.price, pkg.currency)}
                          </span>
                        </div>
                      </th>
                    ))}
                  {packages.filter((pck) => pck.period === period).length <
                    3 && (
                    <th>
                      <div className="package">
                        <span className="name is-size-5">VIP</span>
                        <span className="price is-size-4 has-text-success">
                          -
                        </span>
                      </div>
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {/* <tr> */}
                {Object.entries(packagesDetail).map(([key, value]) => (
                  <tr>
                    <td>{key}</td>
                    {Object.values(value[period]).map((pkg) => (
                      <td>
                        {pkg ? (
                          <span
                            className="material-icons"
                            style={{ color: "#fdb816" }}
                          >
                            check_circle
                          </span>
                        ) : (
                          <span
                            className="material-icons"
                            style={{ color: "#E92554" }}
                          >
                            cancel
                          </span>
                        )}
                      </td>
                    ))}
                    {Object.values(value[period]).length < 3 && <td>-</td>}
                  </tr>
                ))}
                {/* </tr> */}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Price;
