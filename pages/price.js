import React, { useState } from 'react';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { LinkButton } from '../components/Button';
import AdditionalService from '../components/AdditionalService';
import ContainerAnalytic from '../components/AnalyticContainer';

import styles from './scss/Price.module.scss';

import { formatCurrency } from '../utils';

const getPackages = import('../json/packages.json');

const Price = () => {
  const [period, setPeriod] = useState('yearly');
  const [packages, setPackages] = useState([]);
  const [hideBasic, setHideBasic] = useState(false);
  const [hideAdvance, setHideAdvance] = useState(false);
  const [hideBusiness, setHideBusiness] = useState(false);
  const [hideVIP, setHideVIP] = useState(false);

  const toggle = (plan) => {
    if (plan === 'VIP') {
      setHideVIP(!hideVIP);
    } else if (plan === 'Business') {
      setHideBusiness(!hideBusiness);
    } else if (plan === 'Advance') {
      setHideAdvance(!hideAdvance);
    } else {
      setHideBasic(!hideBasic);
    }
  };

  getPackages.then((res) => {
    setPackages(res.default.id.packages);
  });

  const handleFilterPeriod = (period) => setPeriod(period);

  return (
    <ContainerAnalytic>
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
            <div className="packages">
              {packages
                .filter((pck) => pck.period === period)
                .map((pkg) => (
                  <div
                    key={pkg.code}
                    className={`package ${pkg.is_popular ? 'popular' : ''} ${
                      pkg.is_discount ? 'discounted' : ''
                    } ${pkg.name === 'Basic' ? 'basic' : ''}`}
                  >
                    <div className="package-info">
                      <span className="name is-size-5">{pkg.name}</span>
                      {pkg.price === pkg.discounted_price ? (
                        <span className="price is-size-4">
                          {formatCurrency(pkg.price, pkg.currency)}
                        </span>
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
                    </div>
                    <div>
                      <ul>
                        {pkg.highlight_feature.map((feature, idx) => (
                          <li key={idx}>
                            {feature === 'AVAChat' ? (
                              <>
                                <span>{feature}</span>
                                <a
                                  href="/avachat"
                                  title="AVAChat"
                                  className="avachatBtn"
                                >
                                  pelajari lebih lanjut
                                </a>
                              </>
                            ) : (
                              feature
                            )}
                          </li>
                        ))}
                        {pkg.period === 'yearly' && pkg.name === 'Basic' ? (
                          <>
                            {/* <li className="has-text-weight-light">Whatsapp Commerce</li> */}
                          </>
                        ) : (
                          ''
                        )}
                        {pkg.name !== 'Basic' ? (
                          <li className="has-text-weight-light">
                            Order via Comment
                          </li>
                        ) : (
                          ''
                        )}

                        <li className="has-text-weight-light">
                          Integrasi Facebook Store
                        </li>
                        {pkg.name === 'Basic' ? (
                          <>
                            <li className="has-text-weight-light">
                              Unlimited Upload Produk
                            </li>
                            <li className="has-text-weight-light">
                              Integrasi Payment Gateway
                            </li>
                            <li className="has-text-weight-light">
                              Integrasi Logistik
                            </li>
                            <li className="has-text-weight-light">
                              Laporan Order
                            </li>
                            <li className="has-text-weight-light">
                              Manajemen Database Pelanggan
                            </li>
                            <li className="has-text-weight-light">
                              Manajement Promo
                            </li>
                          </>
                        ) : (
                          ''
                        )}

                        {pkg.name !== 'Basic' ? (
                          <>
                            <li className="has-text-weight-light">
                              SEO & Integrasi Facebook Pixel
                            </li>
                            {pkg.name !== 'VIP' ? (
                              <li className="has-text-weight-light">
                                Website Toko Online
                              </li>
                            ) : (
                              ''
                            )}
                          </>
                        ) : (
                          ''
                        )}
                        {pkg.period === 'yearly' && pkg.name !== 'Basic' ? (
                          <>
                            {pkg.name !== 'VIP' ? (
                              <li className="has-text-weight-light">
                                Domain.com
                              </li>
                            ) : (
                              ''
                            )}
                          </>
                        ) : (
                          ''
                        )}
                        {/* {pkg.period !== "yearly" && (
                        <>
                          <li className="has-text-weight-light">
                            Toko Facebook
                          </li>
                          <li className="has-text-weight-light">Kode Promo</li>
                        </>
                      )} */}
                        {pkg.name !== 'VIP' && pkg.name !== 'Basic' ? (
                          <li className="has-text-weight-light">
                            Auto Reply Facebook Messenger
                          </li>
                        ) : (
                          ''
                        )}
                        <div
                          className={`more-features 
                        more-${pkg.name}
                        ${pkg.name === 'VIP' && hideVIP ? 'toggled' : ''}
                        ${
                          pkg.name === 'Business' && hideBusiness
                            ? 'toggled'
                            : ''
                        }
                        ${
                          pkg.name === 'Advance' && hideAdvance ? 'toggled' : ''
                        }
                        ${pkg.name === 'Basic' && hideBasic ? 'toggled' : ''}`}
                        >
                          {pkg.name === 'VIP' ? (
                            <>
                              <li className="has-text-weight-light">
                                Website Toko Online
                              </li>
                              <li className="has-text-weight-light">
                                Domain.com
                              </li>
                              <li className="has-text-weight-light">
                                Auto Reply Facebook Messenger
                              </li>
                            </>
                          ) : (
                            ''
                          )}
                          {pkg.name !== 'Basic' ? (
                            <>
                              <li className="has-text-weight-light">
                                Messenger Blast
                              </li>
                              <li className="has-text-weight-light">
                                Unlimited Upload Produk
                              </li>
                              <li className="has-text-weight-light">
                                Integrasi Payment Gateway
                              </li>
                              <li className="has-text-weight-light">
                                Integrasi Logistik
                              </li>
                              <li className="has-text-weight-light">
                                Laporan Order
                              </li>
                              <li className="has-text-weight-light">
                                Manajemen Database Pelanggan
                              </li>
                              <li className="has-text-weight-light">
                                Manajement Promo
                              </li>
                            </>
                          ) : (
                            ''
                          )}
                        </div>
                      </ul>
                    </div>
                    <div className="package-info">
                      {pkg.name !== 'Basic' ? (
                        <a
                          onClick={() => toggle(`${pkg.name}`)}
                          className="price-more"
                        >
                          {pkg.name === 'VIP' && hideVIP
                            ? 'Sembunyikan Fitur'
                            : pkg.name === 'Business' && hideBusiness
                            ? 'Sembunyikan Fitur'
                            : pkg.name === 'Advance' && hideAdvance
                            ? 'Sembunyikan Fitur'
                            : pkg.name === 'Basic' && hideBasic
                            ? 'Sembunyikan Fitur'
                            : 'Lihat Fitur Selengkapnya'}
                        </a>
                      ) : (
                        ''
                      )}
                      <LinkButton
                        href={`https://payment.avana.asia/pay?plan=${pkg.slug}`}
                        target="__blank"
                        className="btn-primary"
                      >
                        Pilih Paket
                      </LinkButton>
                    </div>
                  </div>
                ))}
            </div>
            <a href="/packages-detail">Lihat Perbandingan</a>
          </section>
        </main>
        <Footer />
      </div>
    </ContainerAnalytic>
  );
};

export default Price;
