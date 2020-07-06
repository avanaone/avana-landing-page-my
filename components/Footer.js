import { useState, useEffect } from 'react';

export default function Footer() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    if (localStorage.getItem('lang')) {
      console.log(localStorage.getItem('lang'));
      setLang(localStorage.getItem('lang'));
    } else {
      localStorage.setItem('lang', 'en');
    }
  }, []);

  return (
    <footer>
      <div className='meta'>
        <picture>
          <source
            srcSet='/assets/images/logo.webp'
            type='image/webp'
            alt='Avana logo'
          />
          <img src='/assets/images/logo.png' alt='Avana logo' />
        </picture>
        <p>
          {lang === 'en'
            ? 'AVANA is a social commerce platform to help online sales through websites and social media.'
            : 'AVANA merupakan platform social commerce untuk membantu penjualan online melalui website dan sosial media.'}
        </p>
        <span>
          {lang === 'en'
            ? 'WhatsApp Customer Service:'
            : 'WhatsApp Khidmat Pelanggan:'}
          <br />
          <a
            href='https://wa.me/60149774275'
            style={{ color: `#3273dc` }}
            className='wa-footer'
          >
            <img src='/assets/images/footer/whatsapp-contact.png' alt='' />
            +60 14 977 4275
          </a>
        </span>
        <span>Malaysia • Indonesia • Singapore</span>
        <div className='social-icons'>
          <a
            href={
              lang === 'en'
                ? 'https://www.facebook.com/avana.asia/'
                : 'https://www.facebook.com/avanamalaysia'
            }
            target='_blank'
            rel='noreferrer noopener'
            aria-label='AVANA Facebook Page'
          >
            <img src='/assets/images/footer/facebook-f-brands.svg' alt='' />
          </a>
          <a
            href='https://twitter.com/avanaasia'
            target='_blank'
            rel='noreferrer noopener'
            aria-label='AVANA Twitter'
          >
            <img src='/assets/images/footer/twitter-brands.svg' alt='' />
          </a>
          <a
            href='https://www.instagram.com/avana.asia/'
            target='_blank'
            rel='noreferrer noopener'
            aria-label='AVANA Instagram'
          >
            <img src='/assets/images/footer/instagram-brands.svg' alt='' />
          </a>
          <a
            href='https://www.youtube.com/channel/UCRtW-cCOi4B_-k0wAur2vOg'
            target='_blank'
            rel='noreferrer noopener'
            aria-label='AVANA Youtube'
          >
            <img src='/assets/images/footer/youtube-brands.svg' alt='' />
          </a>
        </div>
      </div>
      <div>
        <h6>Avana</h6>
        <ul>
          <li>
            <a href='/about-us'>
              {lang === 'en' ? 'About Us' : 'Tentang Kami'}
            </a>
          </li>
          <li>
            <a href='/about-us#Career'>
              {lang === 'en' ? 'Career' : 'Kerjaya'}
            </a>
          </li>
          {/* <li>
            <a href="https://academy.avana.id/">{lang === 'en' ? 'Academy' : 'Akademi'}</a>
          </li> */}
          <li>
            <a href='https://blog.avana.asia/'>
              {lang === 'en' ? 'Blog' : 'Blog'}
            </a>
          </li>
          {/* <li>
            <a href="https://avana.asia/career/">{lang === 'en' ? 'Career' : 'Kerjaya'}</a>
          </li>
          <li>
            <a>Media</a>
          </li>
          <li>
            <a href="https://avana.asia/contact/">{lang === 'en' ? 'Contact Us' : 'Hubungi Kami'}</a>
          </li> */}
          <li>
            <a href='/assets/files/AVANA-Privacy-Policy.pdf' target='_blank'>
              {lang === 'en' ? 'Privacy Policy' : 'Dasar Privasi'}
            </a>
          </li>
          <li>
            <a href='/assets/files/AVANA-terms-of-use.pdf' target='_blank'>
              {lang === 'en' ? 'Terms of Use' : 'Syarat Penggunaan'}
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h6>{lang === 'en' ? 'Main Features' : 'Fungsi Utama'}</h6>
        <ul>
          {/* <li>
            <a href='/webstore'>Webstore</a>
          </li>
          <li>
            <a href='/dashboard'>Dashboard</a>
          </li>
          <li>
            <a href='/avachat'>Live Autoreply</a>
          </li> */}
          {/* <li>
            <a href='/reseller'>
              {lang === 'en' ? 'Reseller Management' : 'Pengurusan Reseller'}
            </a>
          </li> */}

          <li>
            <a href='/webstore'>Webstore Builder</a>
          </li>
          <li>
            <a href='/dashboard#Order-Management'>Order Management</a>
          </li>
          <li>
            <a href='/dashboard#Product-Management'>Inventory Management</a>
          </li>
          <li>
            <a href='/dashboard'>Shipping & Logistics</a>
          </li>
          <li>
            <a href='/dashboard'>Online Payment</a>
          </li>
          <li>
            <a href='/dashboard#Auto-Reply'>Comment & Message Auto Reply </a>
          </li>
          <li>
            <a href='/liveautoreply'>FB Live Auto Reply</a>
          </li>
          <li>
            <a href='/#Fb-Store'>FB Store</a>
          </li>
          <li>
            <a href='https://avana.page.link/MobileApp' target='_blank'>
              {lang === 'en' ? 'AVANA Mobile App' : 'App Mudah Alih AVANA'}
            </a>
          </li>
          <li>
            <a href='/#Marketing'>
              {lang === 'en'
                ? 'Built-in Marketing tools'
                : "Peranti 'Built-in' Pemasaran"}
            </a>
          </li>
          <li>
            <a href='/avachat'>AVAChat</a>
          </li>
          <li>
            <a href='/#Whatsapp'>WhatsApp Commerce</a>
          </li>
        </ul>
      </div>
      <div
        className='meta'
        style={{ minWidth: `150px`, width: `200px`, maxWidth: `250px` }}
      >
        <h6 style={{ marginBottom: `0` }}>
          The Future Commerce Sdn Bhd (1182523-T)
        </h6>
        <p>
          Address: B-3-3A Pacific Place, 4, Jalan PJU 1a/4, Ara Damansara, 47301
          Petaling Jaya, Selangor, Malaysia
        </p>
      </div>
    </footer>
  );
}
