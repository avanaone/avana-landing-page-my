import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

import { LinkButton } from './Button';

const Features = import('../json/features.json');

export default function Feature(props) {
  const { id, title, link, CS, className, showVideo, isAnchor } = props;
  const [lang, setLang] = useState('en');
  const [features, setFeatures] = useState([]);
  const [isUtm, setIsUtm] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('lang')) {
      // console.log('start', localStorage.getItem('lang'));
      setLang(localStorage.getItem('lang'));
    } else {
      localStorage.setItem('lang', 'en');
    }
    if (localStorage.getItem('utm_avana')) {
      setIsUtm(true);
    } else {
      setIsUtm(false);
    }
  }, []);

  useEffect(() => {
    Features.then((res) => {
      // console.log('lang is', lang);
      setFeatures(res.default[id][lang]);
    });
  }, [lang]);

  return (
    <div className='features'>
      <Head>
        <title>{`${title} • AVANA`}</title>
      </Head>
      <Navbar />
      <Header
        title={
          lang === 'bm' && title === 'Webstore'
            ? 'Kedai Online'
            : lang === 'bm' && title === 'Reseller'
            ? 'Sales Agent'
            : title
        }
      />
      <main>
        {showVideo ? (
          <>
            <div>
              <h3 className='video-headline'>
                “
                {lang === 'en'
                  ? 'Convenient and hassle-free live session with AVANA'
                  : 'Pengalaman sesi LIVE bersama AVANA yang MUDAH dan SELESA!'}
                ”
              </h3>
            </div>
            <section id='section-1' className='feature'>
              <div>
                <iframe
                  src='https://www.youtube.com/embed/_4BQZP5nIKo'
                  frameBorder='0'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  style={{
                    width: `600px`,
                    height: `300px`,
                    maxWidth: `100%`,
                    maxHeight: `calc(50vw - 16px)`,
                  }}
                />
              </div>
            </section>
          </>
        ) : (
          ''
        )}
        {features.map((feature, idx) => (
          <section
            key={idx}
            className={`feature ${className ? className : ''}`}
            id={isAnchor ? `${feature.anchor}` : ''}
          >
            <div className='description'>
              <h2 className='is-size-4'>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
            <div className='feature-img'>
              <img
                srcSet={
                  require(`../public/assets/images/${feature.image}?resize?webp`)
                    .srcSet
                }
                alt=''
              />
            </div>
          </section>
        ))}
        <section className='trial'>
          <h2 className='is-size-4'>
            {CS
              ? lang === 'en'
                ? `Interested with ${title}?`
                : `Berminat dengan ${title}?`
              : lang === 'en'
              ? 'Try AVANA 14 days for FREE!'
              : 'Cuba AVANA selama 14 hari secara PERCUMA!'}
            {/* { lang === 'en' ? 'Try AVANA 14 days for FREE!' : 'Cuba AVANA selama 14 hari secara PERCUMA!'} */}
          </h2>
          {title === 'Whatsapp Commerce' ? (
            <LinkButton
              href={
                isUtm
                  ? `https://app.avana.asia/${localStorage.getItem(
                      'utm_avana'
                    )}`
                  : 'https://app.avana.asia/'
              }
              className='btn-primary'
            >
              {lang === 'en'
                ? 'Sign Up Trial Account'
                : 'Daftar Akaun Percubaan'}
            </LinkButton>
          ) : title === 'AVAChat' ? (
            <LinkButton
              href={
                isUtm
                  ? `https://app.avana.asia/${localStorage.getItem(
                      'utm_avana'
                    )}`
                  : 'https://app.avana.asia/'
              }
              className='btn-primary'
            >
              {lang === 'en'
                ? 'Sign Up Trial Account'
                : 'Daftar Akaun Percubaan'}
            </LinkButton>
          ) : (
            <LinkButton
              href={
                isUtm
                  ? `https://app.avana.asia/${localStorage.getItem(
                      'utm_avana'
                    )}`
                  : 'https://app.avana.asia/'
              }
              target='__blank'
              className='btn-primary'
            >
              {CS
                ? lang === 'en'
                  ? 'Contact Us'
                  : 'Hubungi Kami'
                : lang === 'en'
                ? 'Try for FREE'
                : 'Coba Gratis'}
              {/* {lang === 'en' ? 'Sign Up For Free' : 'DAFTAR SEKARANG'} */}
            </LinkButton>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
