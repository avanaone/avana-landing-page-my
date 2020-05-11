import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

import AdditionalService from '../components/AdditionalService';

import { LinkButton } from '../components/Button';

import ContainerAnalytic from '../components/AnalyticContainer';

import styles from './scss/PackagesDetail.module.scss';

import { formatCurrency } from '../utils';

const getPackages = import('../json/packages.json');
const getPackagesDetail = import('../json/packages-detail.json');

const PackagesDetail = () => {
  const [period, setPeriod] = useState('yearly');
  const [packages, setPackages] = useState([]);
  const [packagesDetail, setPackagesDetail] = useState([]);

  getPackages.then((res) => setPackages(res.default.id.packages));

  getPackagesDetail.then((res) => setPackagesDetail(res.default.id.features));

  const handleFilterPeriod = (period) => setPeriod(period);

  return (
    <ContainerAnalytic>
      <div className={styles.PackagesDetail}>
        <Navbar />
        <Header title="Harga Paket" />
        <main>
          <section>
            <div className="tabs-container">
              <ul className="ava-tabs">
                <li
                  className={period === 'monthly' ? 'active' : ''}
                  onClick={() => handleFilterPeriod('monthly')}
                >
                  Bulanan
                </li>
                <li
                  className={period === 'quarterly' ? 'active' : ''}
                  onClick={() => handleFilterPeriod('quarterly')}
                >
                  3 Bulan
                </li>
                <li
                  className={period === 'semi-annually' ? 'active' : ''}
                  onClick={() => handleFilterPeriod('semi-annually')}
                >
                  6 Bulan
                </li>
                <li
                  className={period === 'yearly' ? 'active' : ''}
                  onClick={() => handleFilterPeriod('yearly')}
                >
                  1 Tahun
                </li>
              </ul>
              <AdditionalService />
            </div>
            <div className="packages-detail">
              <table>
                <thead>
                  <tr>
                    <th>
                      <img
                        srcSet={
                          require('public/assets/images/ava-cashier.png?resize&size=300?webp')
                            .srcSet
                        }
                        alt="AVA Cashier"
                      />
                    </th>
                    {packages
                      .filter((pkg) => pkg.period === period)
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
                    {packages.filter((pkg) => pkg.period === period).length <
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
                      {Object.values(value[period]).map((pkg, idx) => (
                        <td key={idx}>
                          {pkg ? (
                            <span
                              className="material-icons"
                              style={{ color: '#fdb816' }}
                            >
                              check_circle
                            </span>
                          ) : (
                            <span
                              className="material-icons"
                              style={{ color: '#e92554' }}
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
                          <LinkButton
                            href={`https://payment.avana.asia/pay?plan=${pkg.slug}`}
                            className="btn-primary"
                          >{`Pilih ${pkg.name}`}</LinkButton>
                        </td>
                      ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ContainerAnalytic>
  );
};

export default PackagesDetail;
