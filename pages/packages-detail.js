import React, { useState } from "react";

import styles from "./scss/PackagesDetail.module.scss";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { formatCurrency } from "../utils";

const getPackages = import("../json/packages.json");
const getPackagesDetail = import("../json/packages-detail.json");

const Price = () => {
  const [period, setPeriod] = useState("yearly");
  const [packages, setPackages] = useState([]);
  const [packagesDetail, setPackagesDetail] = useState([]);
  const [additionalService, setAdditionalServices] = useState([]);
  const [isModal, setIsModal] = useState(false);

  getPackages.then((res) => {
    setPackages(res.default.id.packages);
    setAdditionalServices(res.default.id.additional_services);
  });

  getPackagesDetail.then((res) => setPackagesDetail(res.default.id.features));

  const handleFilterPeriod = (period) => setPeriod(period);
  const toggleModal = () => setIsModal(!isModal);

  return (
    <div className={styles.PackagesDetail}>
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
              Additional Service
            </button>
          </div>
          <div className="packages-detail">
            <table>
              <thead>
                <tr>
                  <th>
                    <img
                      src={require("public/assets/images/ava-cashier.png")}
                      alt=""
                    />
                  </th>
                  {packages
                    .filter((pck) => pck.period === period)
                    .map((pkg) => (
                      <th key={pkg.code}>
                        <div className="package">
                          <span className="name is-size-5">{pkg.name}</span>
                          {pkg.price === pkg.discounted_price ? (
                            <>
                              <span className="price is-size-4 has-text-success">
                                {formatCurrency(pkg.price, pkg.currency)}
                              </span>
                            </>
                          ) : (
                            <div>
                              <strike className="is-size-6">
                                {formatCurrency(pkg.price, pkg.currency)}
                              </strike>
                              <div className="price is-size-4 has-text-success">
                                {formatCurrency(
                                  pkg.discounted_price,
                                  pkg.currency
                                )}
                              </div>
                            </div>
                          )}
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
                {Object.entries(packagesDetail).map(([key, value], idx) => (
                  <tr key={idx}>
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
                            style={{ color: "#e92554" }}
                          >
                            cancel
                          </span>
                        )}
                      </td>
                    ))}
                    {Object.values(value[period]).length < 3 && <td>-</td>}
                  </tr>
                ))}
                <tr>
                  <td />
                  {packages
                    .filter((pck) => pck.period === period)
                    .map((pkg) => (
                      <td key={pkg.code}>
                        <a
                          href="/"
                          className="ava-btn btn-primary"
                        >{`Pilih ${pkg.name}`}</a>
                      </td>
                    ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <div className={`modal ${isModal ? "is-active" : ""}`}>
          <div className="modal-background" />
          <div className="modal-content">
            <button
              className="modal-close is-large"
              aria-label="close"
              onClick={toggleModal}
            >
              Close
            </button>
            <h2>Additional Service</h2>
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
