import { useState, useEffect } from 'react';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { LinkButton } from '../components/Button';

import CareerCard from '../components/CareerCard';
import ContainerAnalytic from '../components/AnalyticContainer';

import styles from './scss/AboutUs.module.scss';

const getCareers = import('../json/career.json');

export default function AboutUs() {
  const [lang, setLang] = useState('en');
  const [careers, setCareers] = useState([]);

  getCareers.then((res) => setCareers(res.default));

  useEffect(() => {
    if (localStorage.getItem('lang')) {
      setLang(localStorage.getItem('lang'));
    } else {
      localStorage.setItem('lang', 'en');
    }
  }, []);

  return (
    <ContainerAnalytic>
      <div className={styles.AboutUs}>
        <Head>
          <title>Tentang Kami • AVANA</title>
        </Head>
        <Navbar />
        <main>
          <section id='section-1'>
            <div>
              <div>
                <h2 className='is-size-4'>
                  {lang === 'en'
                    ? 'AVANA will help YOU grow your business!'
                    : 'AVANA dapat membantu mengembangkan bisnes anda!'}
                </h2>
                <p>
                  {lang === 'en'
                    ? 'AVANA is a social commerce platform that helps business owners sell through websites, Facebook, Instagram, WhatsApp and Telegram.'
                    : 'AVANA merupakan sebuah platform social commerce untuk membantu pemilik bisnes menjual melalui website, Facebook, Instagram, WhatsApp dan Telegram.'}
                </p>
                <p>
                  {lang === 'en'
                    ? 'By using the latest technological innovations and systems integrated with social media, AVANA has been helping over 70,000 businesses optimize their brands and automate their business capabilities online.'
                    : 'Dengan menggunakan inovasi teknologi terkini dan sistem yang diintegrasikan dengan media sosial, AVANA telah membantu lebih daripada 70,000 bisnes yang ingin mengoptimumkan jenama mereka dan mengautomasikan keupayaan bisnes mereka secara online.'}
                </p>
              </div>
              <iframe
                src='https://www.youtube.com/embed/Q_n5Xx7HjUE'
                frameBorder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            </div>
            <img
              srcSet={
                require('../public/assets/images/about-us/channels.png?resize?webp')
                  .srcSet
              }
              alt=''
              className='channels'
            />
          </section>
          <section id='section-2'>
            <div>
              <h2 className='is-size-4'>
                {lang === 'en'
                  ? 'Be a Part of AVANGERS'
                  : 'Bina karier dengan AVANA'}
              </h2>
              <p>
                {lang === 'en'
                  ? 'Now it’s time to bring your A-Game to the squad. Show us what you’ve got!'
                  : 'Inilah masanya untuk anda berkerjasama dengan kami dan tunjukkan kemampuan anda'}
              </p>
              {/* <LinkButton
                href='mailto:work@avana.asia'
                className='btn-primary'
                title='Daftar'
                rel='noopener noreferrer'
              >
                {lang === 'en' ? 'Send us your CV' : 'Email CV Anda'}
              </LinkButton> */}
            </div>
            <img
              srcSet={
                require('../public/assets/images/about-us/team.png?resize?webp')
                  .srcSet
              }
              alt='AVANA Teams'
            />
          </section>
          <section id='Career'>
            <h2 className='is-size-4' style={{ textAlign: `center` }}>
              Career
            </h2>
            <div className='career-group'>
              {careers
                ? careers
                    .filter((x) => x.id < 11 && !x.isTraining)
                    .map((career) => (
                      <CareerCard key={career.id} event={career} />
                    ))
                : ''}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ContainerAnalytic>
  );
}
