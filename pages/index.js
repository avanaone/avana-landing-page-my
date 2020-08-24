import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Toaster from '../components/Toaster';
import ContainerAnalytic from '../components/AnalyticContainer';
import { LinkButton } from '../components/Button';
import Slider from '../components/Slider';
import SliderTestimonial from '../components/SliderTestimonial';

import styles from './scss/Home.module.scss';

import getTestimonials from '../json/testimonial.json';
import getMilestones from '../json/milestone.json';
const getCw = import('../json/copywriting.json');
// const getPromos = import('../json/promo.json');
const getEvents = import('../json/event.json');

const Home = ({ subscribers }) => {
  const [lang, setLang] = useState('en');
  const [cw, setCw] = useState([]);
  const [isUtm, setIsUtm] = useState(false);

  const [state, setState] = useState({
    dashboard: 0,
    avachat: 0,
    reseller: 0,
    webstore: 0,
    avachatmy: 0,
  });
  const [navbarBg, setNavbarBg] = useState('#f4f7f9');
  // const [promos, setPromos] = useState([]);
  const [events, setEvents] = useState([]);

  // getPromos.then((res) => setPromos(res.default));
  getEvents.then((res) => setEvents(res.default));
  const [isModal, setIsModal] = useState(false);
  const toggleModal = () => setIsModal(!isModal);

  const { dashboard, avachat, reseller, webstore, avachatmy } = state;

  useEffect(() => {
    if (localStorage.getItem('lang')) {
      // console.log(localStorage.getItem('lang'));
      setLang(localStorage.getItem('lang'));
      getCw.then((res) => {
        // console.log(lang);
        // console.log(res.default[localStorage.getItem('lang')]);
        setCw(res.default[localStorage.getItem('lang')]);
      });
    } else {
      localStorage.setItem('lang', 'en');
      getCw.then((res) => {
        setCw(res.default[localStorage.getItem('lang')]);
      });
    }
    if (localStorage.getItem('utm_avana')) {
      setIsUtm(true);
    } else {
      setIsUtm(false);
    }

    setTimeout(() => {
      toggleModal();
    }, 5000);
    window.addEventListener('scroll', handleNavbar);

    return () => {
      window.removeEventListener('scroll', handleNavbar);
    };
  }, []);

  const handleSlider = (id, idx) => {
    setState((s) => ({ ...s, [id]: idx }));
  };

  const callbackSlider = ({ id, activeSlide }) => {
    setState((s) => ({
      ...s,
      [id]: activeSlide,
    }));
  };

  const handleNavbar = (e) => {
    window.scrollY > 10 ? setNavbarBg('#fff') : setNavbarBg('#f4f7f9');
  };

  return (
    <ContainerAnalytic>
      <div className={styles.Home} onScroll={handleNavbar}>
        <Head>
          {/* Primary Meta Tags */}
          <title>
            AVANA | The best social commerce platform for your online business
          </title>
          <link rel='canonical' href='https://avana.asia' />
          <meta
            name='title'
            content='The best social commerce platform for your online business '
          />
          <meta
            name='description'
            content='Our end-to-end commerce platform helps automate your business so that you can sell online with ease'
          />
          {/* Open Graph / Facebook */}
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://avana.asia/' />
          <meta
            property='og:title'
            content='The best social commerce platform for your online business'
          />
          <meta
            property='og:description'
            content='Our end-to-end commerce platform helps automate your business so that you can sell online with ease'
          />
          <meta
            property='og:image'
            content='/assets/images/meta-image.png?resize?webp'
          />
          {/* Twitter */}
          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:url' content='https://avana.asia/' />
          <meta
            property='twitter:title'
            content='The best social commerce platform for your online business'
          />
          <meta
            property='twitter:description'
            content='Our end-to-end commerce platform helps automate your business so that you can sell online with ease'
          />
          <meta
            property='twitter:image'
            content='/assets/images/meta-image.png?resize?webp'
          />
        </Head>
        <Navbar style={{ backgroundColor: navbarBg }} />
        <header>
          <h1 className='is-size-3'>{cw.h1}</h1>
          <p>
            {cw.features
              ? cw.features.map((feature, i) => {
                  if (cw.features.length === i + 1) {
                    return feature;
                  } else {
                    return feature + ' • ';
                  }
                })
              : 'loading...'}
          </p>
          <LinkButton
            href={
              isUtm
                ? `https://app.avana.asia/${localStorage.getItem('utm_avana')}`
                : 'https://app.avana.asia/'
            }
            target='__blank'
            className='btn-primary is-not-mobile'
          >
            {lang === 'en'
              ? 'Try AVANA for Free'
              : 'Cubalah AVANA secara Percuma'}
          </LinkButton>
        </header>
        <main>
          <section className='feature is-mobile'>
            <LinkButton
              href={
                isUtm
                  ? `https://app.avana.asia/${localStorage.getItem(
                      'utm_avana'
                    )}`
                  : 'https://app.avana.asia/'
              }
              target='__blank'
              className='btn-primary is-bigger'
            >
              {lang === 'en'
                ? 'Try AVANA for Free'
                : 'Cubalah AVANA secara Percuma'}
            </LinkButton>
          </section>
          <section className='feature'>
            <div className='description'>
              <h2 className='is-size-4'>
                {/* <span className='hl'>{cw.dashboard ? cw.dashboard[0] : 'loading'}</span> {cw.dashboard ? cw.dashboard[1] : 'loading'} */}
                {cw.dashboard ? cw.dashboard[0] : 'loading'}
              </h2>
              {/* <p>
                {cw.dashboard ? cw.dashboard[2] : 'loading'}
              </p> */}
              <ul>
                <li
                  className={dashboard === 0 ? 'active' : ''}
                  onClick={() => handleSlider('dashboard', 0)}
                >
                  {cw.dashboard ? cw.dashboard[1] : 'loading'}
                </li>
                <li
                  className={dashboard === 1 ? 'active' : ''}
                  onClick={() => handleSlider('dashboard', 1)}
                >
                  {cw.dashboard ? cw.dashboard[2] : 'loading'}
                </li>
                <li
                  className={dashboard === 2 ? 'active' : ''}
                  onClick={() => handleSlider('dashboard', 2)}
                >
                  {cw.dashboard ? cw.dashboard[3] : 'loading'}
                </li>
              </ul>
              <div className='ava-btn-group'>
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
                  {cw.button ? cw.button[0] : 'loading'}
                </LinkButton>
                <LinkButton href='/dashboard' className='btn-secondary'>
                  {cw.button ? cw.button[1] : 'loading'}
                </LinkButton>
              </div>
            </div>
            <div className='feature-img'>
              <img
                srcSet={
                  require('public/assets/images/1-Dashboard.png?resize?webp')
                    .srcSet
                }
                alt=''
              />
            </div>
          </section>
          <section className='feature'>
            <div className='description'>
              <h2 className='is-size-4'>
                {/* <span className='hl'>{cw.avachat ? cw.avachat[0] : 'loading'}</span> {cw.avachat ? cw.avachat[1] : 'loading'} */}
                {cw.avachat ? cw.avachat[0] : 'loading'}
              </h2>
              {/* <p>
                {cw.avachat ? cw.avachat[2] : 'loading'}
              </p> */}
              <ul>
                <li
                  className={avachat === 0 ? 'active' : ''}
                  onClick={() => handleSlider('avachat', 0)}
                >
                  {cw.avachat ? cw.avachat[1] : 'loading'}
                </li>
                <li
                  className={avachat === 1 ? 'active' : ''}
                  onClick={() => handleSlider('avachat', 1)}
                >
                  {cw.avachat ? cw.avachat[2] : 'loading'}
                </li>
                {/* <li
                  className={avachat === 2 ? 'active' : ''}
                  onClick={() => handleSlider('avachat', 2)}
                >
                  {cw.avachat ? cw.avachat[5] : 'loading'}
                </li> */}
              </ul>
              <div className='ava-btn-group'>
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
                  {cw.button ? cw.button[0] : 'loading'}
                </LinkButton>
                <LinkButton href='/avachat' className='btn-secondary'>
                  {cw.button ? cw.button[1] : 'loading'}
                </LinkButton>
              </div>
            </div>
            <div className='feature-img'>
              <img
                srcSet={
                  require('public/assets/images/2-Auto-Reply.png?resize?webp')
                    .srcSet
                }
                alt=''
              />
            </div>
          </section>
          <section className='feature'>
            <div className='description'>
              <h2 className='is-size-4'>
                {/* {cw.reseller ? cw.reseller[0] : 'loading'}&nbsp;
                <span className='hl'>{cw.reseller ? cw.reseller[1] : 'loading'}</span> {cw.reseller ? cw.reseller[2] : 'loading'} */}
                {cw.reseller ? cw.reseller[0] : 'loading'}
              </h2>
              {/* <p>
                {cw.reseller ? cw.reseller[3] : 'loading'}
              </p> */}
              <ul>
                <li
                  className={reseller === 0 ? 'active' : ''}
                  onClick={() => handleSlider('reseller', 0)}
                >
                  {cw.reseller ? cw.reseller[1] : 'loading'}
                </li>
                <li
                  className={reseller === 1 ? 'active' : ''}
                  onClick={() => handleSlider('reseller', 1)}
                >
                  {cw.reseller ? cw.reseller[2] : 'loading'}
                </li>
                <li
                  className={reseller === 2 ? 'active' : ''}
                  onClick={() => handleSlider('reseller', 2)}
                >
                  {cw.reseller ? cw.reseller[3] : 'loading'}
                </li>
              </ul>
              <div className='ava-btn-group'>
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
                  {cw.button ? cw.button[0] : 'loading'}
                </LinkButton>
                {/* <LinkButton href='/reseller' className='btn-secondary'>
                  {cw.button ? cw.button[1] : 'loading'}
                </LinkButton> */}
              </div>
            </div>
            <div className='feature-img'>
              <img
                srcSet={
                  require('public/assets/images/3-Affiliate-Dropship.png?resize?webp')
                    .srcSet
                }
                alt=''
              />
            </div>
          </section>
          <section className='feature'>
            <div className='description'>
              <h2 className='is-size-4'>
                {/* <span className='hl'>{cw.webstore ? cw.webstore[0] : 'loading'}</span> {cw.webstore ? cw.webstore[1] : 'loading'} */}
                {cw.webstore ? cw.webstore[0] : 'loading'}
              </h2>
              {/* <p>
                {cw.webstore ? cw.webstore[2] : 'loading'}
              </p> */}
              <ul>
                <li
                  className={webstore === 0 ? 'active' : ''}
                  onClick={() => handleSlider('webstore', 0)}
                >
                  {cw.webstore ? cw.webstore[1] : 'loading'}
                </li>
                <li
                  className={webstore === 1 ? 'active' : ''}
                  onClick={() => handleSlider('webstore', 1)}
                >
                  {cw.webstore ? cw.webstore[2] : 'loading'}
                </li>
                <li
                  className={webstore === 2 ? 'active' : ''}
                  onClick={() => handleSlider('webstore', 2)}
                >
                  {cw.webstore ? cw.webstore[3] : 'loading'}
                </li>
              </ul>
              <div className='ava-btn-group'>
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
                  {cw.button ? cw.button[0] : 'loading'}
                </LinkButton>
                <LinkButton href='/webstore' className='btn-secondary'>
                  {cw.button ? cw.button[1] : 'loading'}
                </LinkButton>
              </div>
            </div>
            <div className='feature-img'>
              <img
                srcSet={
                  require('../public/assets/images/4-Webstore.png?resize?webp')
                    .srcSet
                }
                className='active'
                alt=''
              />
            </div>
          </section>
          <section className='feature' id='Fb-Store'>
            <div className='description'>
              <h2 className='is-size-4'>
                {/* {cw.fbshop ? cw.fbshop[0] : 'loading'} <span className='hl'>{cw.fbshop ? cw.fbshop[1] : 'loading'}</span> {cw.fbshop ? cw.fbshop[2] : 'loading'} */}
                {cw.fbshop ? cw.fbshop[0] : 'loading'}
              </h2>
              <p>{cw.fbshop ? cw.fbshop[1] : 'loading'}</p>
              <ul />
              <div className='ava-btn-group'>
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
                  {cw.button ? cw.button[0] : 'loading'}
                </LinkButton>
              </div>
            </div>
            <div className='feature-img'>
              <img
                srcSet={
                  require('../public/assets/images/5-Sell-Across-SOCMED.png?resize?webp')
                    .srcSet
                }
                className='active'
                alt=''
              />
            </div>
          </section>
          <section className='feature'>
            <div className='description'>
              <h2 className='is-size-4'>
                {/* <span className='hl'>{cw.webstore ? cw.webstore[0] : 'loading'}</span> {cw.webstore ? cw.webstore[1] : 'loading'} */}
                {cw.avachatmy ? cw.avachatmy[0] : 'loading'}
              </h2>
              <p>{cw.avachatmy ? cw.avachatmy[1] : 'loading'}</p>
              {/* <ul>
                <li
                  className={webstore === 0 ? 'active' : ''}
                  onClick={() => handleSlider('webstore', 0)}
                >
                  {cw.webstore ? cw.webstore[1] : 'loading'}
                </li>
                <li
                  className={webstore === 1 ? 'active' : ''}
                  onClick={() => handleSlider('webstore', 1)}
                >
                  {cw.webstore ? cw.webstore[2] : 'loading'}
                </li>
                <li
                  className={webstore === 2 ? 'active' : ''}
                  onClick={() => handleSlider('webstore', 2)}
                >
                  {cw.webstore ? cw.webstore[3] : 'loading'}
                </li>
              </ul> */}
              <div className='ava-btn-group'>
                {/* <LinkButton
                  href={
                    lang === 'en'
                      ? 'https://api.whatsapp.com/send?phone=60124037044&text=Hi+AVANA+I+wanna+know+more+about+AVAChat+feature'
                      : 'https://api.whatsapp.com/send?phone=60124037044&text=Hai+AVANA+saya+berminat+nak+tau+lebih+lanjut+mengenai+AVAChat'
                  }
                  target='__blank'
                  className='btn-primary'
                >
                  {cw.button ? cw.button[0] : 'loading'}
                </LinkButton> */}
                <LinkButton
                  href={'https://app.avana.asia/'}
                  className='btn-primary'
                >
                  {lang === 'en'
                    ? 'Sign Up Trial Account'
                    : 'Daftar Akaun Percubaan'}
                </LinkButton>
                {/* <LinkButton href='/' className='btn-secondary'>
                  {cw.button ? cw.button[1] : 'loading'}
                </LinkButton> */}
              </div>
            </div>
            <div className='feature-img'>
              <img
                srcSet={
                  require('../public/assets/images/6-AVAchat.png?resize?webp')
                    .srcSet
                }
                className='active'
                alt=''
              />
            </div>
          </section>
          <section className='feature' id='Marketing'>
            <div className='description'>
              <h2 className='is-size-4'>
                {/* {cw.fbshop ? cw.fbshop[0] : 'loading'} <span className='hl'>{cw.fbshop ? cw.fbshop[1] : 'loading'}</span> {cw.fbshop ? cw.fbshop[2] : 'loading'} */}
                {cw.marketing ? cw.marketing[0] : 'loading'}
              </h2>
              <p>{cw.marketing ? cw.marketing[1] : 'loading'}</p>
              <ul />
              <div className='ava-btn-group'>
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
                  {cw.button ? cw.button[0] : 'loading'}
                </LinkButton>
              </div>
            </div>
            <div className='feature-img'>
              <img
                srcSet={
                  require('../public/assets/images/7-MKTG-Build-in.png?resize?webp')
                    .srcSet
                }
                className='active'
                alt=''
              />
            </div>
          </section>
          <section className='feature' id='Whatsapp'>
            <div className='description'>
              <h2 className='is-size-4'>
                {/* {cw.fbshop ? cw.fbshop[0] : 'loading'} <span className='hl'>{cw.fbshop ? cw.fbshop[1] : 'loading'}</span> {cw.fbshop ? cw.fbshop[2] : 'loading'} */}
                {cw.whatsapp ? cw.whatsapp[0] : 'loading'}
              </h2>
              <p>{cw.whatsapp ? cw.whatsapp[1] : 'loading'}</p>
              <ul />
              <div className='ava-btn-group'>
                {/* <LinkButton
                  href={
                    lang === 'en'
                      ? 'https://api.whatsapp.com/send?phone=60124037044&text=Hi+AVANA+I+wanna+know+more+about+WhatsApp+Commerce+feature'
                      : 'https://api.whatsapp.com/send?phone=60124037044&text=Hai+AVANA+saya+berminat+nak+tau+lebih+lanjut+mengenai+WhatsApp+Commerce'
                  }
                  target='__blank'
                  className='btn-primary'
                >
                  {cw.button ? cw.button[0] : 'loading'}
                </LinkButton> */}
                <LinkButton
                  href={'https://app.avana.asia/'}
                  className='btn-primary'
                >
                  {lang === 'en'
                    ? 'Sign Up Trial Account'
                    : 'Daftar Akaun Percubaan'}
                </LinkButton>
              </div>
            </div>
            <div className='feature-img'>
              <img
                srcSet={
                  require('../public/assets/images/8-Whatsapp-commerce.png?resize?webp')
                    .srcSet
                }
                className='active'
                alt=''
              />
            </div>
          </section>
          <section id='support'>
            <h2 className='is-size-4'>{cw.support ? cw.support : 'loading'}</h2>
            <div>
              <img
                srcSet={
                  require('../public/assets/images/Partner-Logos.png?resize?webp')
                    .srcSet
                }
                alt='Partner Logos'
              />
              {/* <div className='border' />
              <img
                srcSet={
                  require('../public/assets/images/bank.png?resize&size=400?webp')
                    .srcSet
                }
                alt='Bank'
              /> */}
            </div>
          </section>
          <section id='testimonial'>
            <h2 className='is-size-4'>
              {cw.testimonial ? cw.testimonial : 'loading'}
            </h2>
            <p style={{ color: `#9a9a9a` }}>Be inspired and inspire others</p>
            <SliderTestimonial
              testimonials={getTestimonials}
              sliderName='testimonial'
            />
            <h2
              className='is-size-4'
              style={{ marginBottom: `1rem`, marginTop: `2rem` }}
            >
              As featured on:
            </h2>
            <div className='featuredon'>
              <a
                href='https://www.bfm.my/podcast/enterprise/tech-talk/tech-talk-avana-luqman-adris-yien-yee-soh'
                target='_blank'
              >
                <img
                  srcSet={
                    require('../public/assets/images/featuredon/BFM.png?resize?webp')
                      .srcSet
                  }
                  alt='BFM'
                />
              </a>
              <a
                href='https://www.digitalnewsasia.com/startups/avana-empowers-local-micro-merchants-through-social-commerce'
                target='_blank'
              >
                <img
                  srcSet={
                    require('../public/assets/images/featuredon/DNA.png?resize?webp')
                      .srcSet
                  }
                  alt='DNA'
                />
              </a>
              <img
                srcSet={
                  require('../public/assets/images/featuredon/Techinasia.png?resize?webp')
                    .srcSet
                }
                alt='Tech In Asia'
              />
              <a
                href='https://e27.co/malaysian-social-commerce-startup-avana-raises-1m-gobi-cradle-th-capital-20180322/'
                target='_blank'
              >
                <img
                  srcSet={
                    require('../public/assets/images/featuredon/E27.png?resize?webp')
                      .srcSet
                  }
                  alt='E27'
                />
              </a>
              <a
                href='https://www.thestar.com.my/metro/community/2017/02/22/empowering-women-to-be-independent-sellers-at-bazaar-help-raise-funds-for-autism-society/'
                target='_blank'
              >
                <img
                  srcSet={
                    require('../public/assets/images/featuredon/TheStar.png?resize?webp')
                      .srcSet
                  }
                  alt='TheStar'
                />
              </a>
              <a
                href='https://vulcanpost.com/589140/avana-ecommerce-platform-malaysia-startup/'
                target='_blank'
              >
                <img
                  srcSet={
                    require('../public/assets/images/featuredon/Vulcan.png?resize?webp')
                      .srcSet
                  }
                  alt='Vulcan'
                />
              </a>
            </div>
          </section>
          <section id='milestone'>
            <h2 className='is-size-4' style={{ marginBottom: `2rem` }}>
              {lang === 'en'
                ? 'We’re the top Ecommerce Service Provider recognized by SITEC'
                : 'Diiktiraf sebagai Penyelesai E-Dagang Terulung oleh SITEC'}
            </h2>
            <div className='milestone-group'>
              <img
                srcSet={
                  require('../public/assets/images/milestone/Google-Partner.png?resize?webp')
                    .srcSet
                }
                alt=''
                style={{ padding: `1rem` }}
              />
              <img
                srcSet={
                  require('../public/assets/images/milestone/SITEC.png?resize?webp')
                    .srcSet
                }
                alt=''
              />
              <img
                srcSet={
                  require('../public/assets/images/milestone/FB-Partner.png?resize?webp')
                    .srcSet
                }
                alt=''
              />
            </div>
            {/* <SliderTestimonial
              testimonials={getMilestones}
              sliderName='milestone'
            /> */}
          </section>
          <section className='trial'>
            <h2 className='is-size-4'>
              {cw.footerCta ? cw.footerCta[0] : 'loading'}
            </h2>
            <LinkButton
              href={
                isUtm
                  ? `https://app.avana.asia/${localStorage.getItem(
                      'utm_avana'
                    )}`
                  : 'https://app.avana.asia/'
              }
              target='__blank'
              className='ava-btn btn-primary'
            >
              {cw.footerCta ? cw.footerCta[1] : 'loading'}
            </LinkButton>
          </section>
          <div className={`modal ${isModal ? 'is-active' : ''}`}>
            <div className='modal-background' onClick={toggleModal} />
            <div
              className='modal-content eventBanner'
              style={{ maxWidth: `500px` }}
            >
              <button
                className='modal-close is-large primary-close'
                onClick={toggleModal}
                aria-label='close'
              >
                Close
              </button>
              <a href='/price'>
                <img
                  srcSet={
                    require('../public/assets/images/popup/merdeka-promo.png?resize?webp')
                      .srcSet
                  }
                  alt='Merdeka Promo'
                  style={{ cursor: `pointer` }}
                />
              </a>
            </div>
          </div>
        </main>
        <Toaster subscribers={subscribers} />
        <Footer />
      </div>
    </ContainerAnalytic>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get latest subscribers.
  // You can use any data fetching library
  const res = await fetch(
    'https://api.avana.asia/recentSignUps?days=30&limit=5&country=Malaysia'
  );
  const subscribers = await res.json();
  // console.log('stan', subscribers);

  // By returning { props: subscribers }, the Home component
  // will receive `subscribers` as a prop at build time
  return {
    props: {
      subscribers,
    },
  };
}

export default Home;
