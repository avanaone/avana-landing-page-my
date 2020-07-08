import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { LinkButton } from '../components/Button';
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

  const [lang, setLang] = useState('en');

  useEffect(() => {
    if (localStorage.getItem('lang')) {
      setLang(localStorage.getItem('lang'));
    } else {
      localStorage.setItem('lang', 'en');
    }
  }, []);

  const toggle = (plan) => {
    if (plan === 'Agent') {
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
          <title>
            {lang === 'en' ? 'Package Price' : 'Harga Pakej'} • AVANA
          </title>
        </Head>
        <Navbar />
        <Header title={`${lang === 'en' ? 'Package Price' : 'Harga Pakej'}`} />
        <main>
          <section>
            <div className='tabs-container'>
              <ul className='ava-tabs'>
                {/* <li
                  className={period === 'monthly' ? 'active' : ''}
                  onClick={() => handleFilterPeriod('monthly')}
                >
                  Bulanan
                </li> */}
                <li
                  className={period === 'quarterly' ? 'active' : ''}
                  onClick={() => handleFilterPeriod('quarterly')}
                >
                  Quarterly
                </li>
                {/* <li
                  className={period === 'semi-annually' ? 'active' : ''}
                  onClick={() => handleFilterPeriod('semi-annually')}
                >
                  6 Bulan
                </li> */}
                <li
                  className={period === 'yearly' ? 'active' : ''}
                  onClick={() => handleFilterPeriod('yearly')}
                >
                  Yearly
                </li>
              </ul>
            </div>
            <div className='packages'>
              {packages
                .filter((pck) => pck.period === period)
                .map((pkg) => (
                  <div
                    key={pkg.code}
                    className={`package ${pkg.is_popular ? 'popular' : ''} ${
                      pkg.is_discount ? 'discounted' : ''
                    } ${pkg.name === 'Basic' ? 'basic' : ''}`}
                  >
                    <div className='package-info'>
                      <span className='name is-size-5'>{pkg.name}</span>
                      <span className='price is-size-4'>
                        {formatCurrency(pkg.price, pkg.currency)}
                      </span>
                      {/* {pkg.price === pkg.discounted_price ? (
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
                      )} */}
                    </div>
                    <div>
                      <ul>
                        {lang === 'en'
                          ? pkg.highlight_feature.en.map((feature, idx) => (
                              <li key={idx}>{feature}</li>
                            ))
                          : pkg.highlight_feature.bm.map((feature, idx) => (
                              <li key={idx}>{feature}</li>
                            ))}
                        <div
                          className={`more-features 
                        more-${pkg.name}
                        ${pkg.name === 'Agent' && hideVIP ? 'toggled' : ''}
                        ${
                          pkg.name === 'Business' && hideBusiness
                            ? 'toggled'
                            : ''
                        }
                        ${
                          pkg.name === 'Advance' && hideAdvance ? 'toggled' : ''
                        }
                        ${
                          pkg.name === 'Beginner' && hideBasic ? 'toggled' : ''
                        }`}
                        >
                          <li className='has-text-weight-light'>
                            Manual Payment from Customer
                          </li>
                          <li className='has-text-weight-light'>
                            Multiple Store Admin
                          </li>
                          <li className='has-text-weight-light'>
                            Blogspot Integration
                          </li>
                          <li className='has-text-weight-light'>
                            Instagram Integration
                          </li>
                          <li className='has-text-weight-light'>
                            Live Chat and Whatsapp Support
                          </li>
                        </div>
                      </ul>
                    </div>
                    <div className='package-info'>
                      <a
                        onClick={() => toggle(`${pkg.name}`)}
                        className='price-more'
                      >
                        {pkg.name === 'Agent' && hideVIP
                          ? lang === 'en'
                            ? 'Hide Features'
                            : 'Sembunyikan Fitur'
                          : pkg.name === 'Business' && hideBusiness
                          ? lang === 'en'
                            ? 'Hide Features'
                            : 'Sembunyikan Fitur'
                          : pkg.name === 'Advance' && hideAdvance
                          ? lang === 'en'
                            ? 'Hide Features'
                            : 'Sembunyikan Fitur'
                          : pkg.name === 'Beginner' && hideBasic
                          ? lang === 'en'
                            ? 'Hide Features'
                            : 'Sembunyikan Fitur'
                          : lang === 'en'
                          ? 'View Full Features'
                          : 'Lihat Ciri Selengkapnya'}
                      </a>
                      <LinkButton
                        href={`https://payment.avana.asia/pay?plan=${pkg.slug}`}
                        target='__blank'
                        className='btn-primary'
                      >
                        {`${
                          pkg.name === 'Beginner' && lang === 'en'
                            ? 'Choose Beginner Plan'
                            : pkg.name === 'Business' && lang === 'en'
                            ? 'Choose Business Plan'
                            : pkg.name === 'Agent' && lang === 'en'
                            ? 'Choose Agent Plan'
                            : pkg.name === 'Beginner' && lang === 'bm'
                            ? 'Daftar Plan Beginner'
                            : pkg.name === 'Business' && lang === 'bm'
                            ? 'Daftar Plan Business'
                            : 'Daftar Plan Agent'
                        }`}
                      </LinkButton>
                    </div>
                  </div>
                ))}
            </div>
            {/* <a href="/packages-detail">Lihat Perbandingan</a> */}
          </section>
        </main>
        <Footer />
      </div>
    </ContainerAnalytic>
  );
};

export default Price;
