import { useState, useEffect } from 'react';

export default function Footer() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    if(localStorage.getItem("lang")) {
      console.log(localStorage.getItem("lang"));
      setLang(localStorage.getItem("lang"));
    } else {
      localStorage.setItem("lang", "en");
    }
  }, []);

  return (
    <footer>
      <div className="meta">
        <picture>
          <source srcSet="/assets/images/logo.webp" type="image/webp" alt="Avana logo"/> 
          <img src="/assets/images/logo.png" alt="Avana logo" />
        </picture>
        <p>
          {lang === 'en' ? 
          'AVANA is a social commerce platform to help online sales through websites and social media.' : 
          'AVANA merupakan platform social commerce untuk membantu penjualan online melalui website dan sosial media.'}
        </p>
        <span>
          {lang === 'en' ? 'WhatsApp Customer Service:' : 'WhatsApp Khidmat Pelanggan:'}<br />
          <a href="https://wa.me/60149774275" style={{color: `#3273dc`}} className="wa-footer"><img src="/assets/images/footer/whatsapp-contact.png" alt=""  />+60 14 977 4275</a>
        </span>
        <span>Indonesia • Singapore • Malaysia</span>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/avanaindonesia/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="AVANA Facebook Page"
          >
            <img src="/assets/images/footer/facebook-f-brands.svg" alt="" />
          </a>
          <a
            href="https://twitter.com/avana_id"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="AVANA Twitter"
          >
            <img src="/assets/images/footer/twitter-brands.svg" alt="" />
          </a>
          <a
            href="https://www.instagram.com/avana.id/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="AVANA Instagram"
          >
            <img src="/assets/images/footer/instagram-brands.svg" alt="" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCHsdeDF8cJl7C4GzoxPRk0A"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="AVANA Youtube"
          >
            <img src="/assets/images/footer/youtube-brands.svg" alt="" />
          </a>
        </div>
      </div>
      <div>
        <h6>Avana</h6>
        <ul>
          <li>
            <a href="/about-us">{lang === 'en' ? 'About Us' : 'Tentang Kami'}</a>
          </li>
          {/* <li>
            <a href="https://academy.avana.id/">{lang === 'en' ? 'Academy' : 'Akademi'}</a>
          </li> */}
          <li>
            <a href="https://blog.avana.asia/">{lang === 'en' ? 'Blog' : 'Blog'}</a>
          </li>
          <li>
            <a href="https://avana.asia/career/">{lang === 'en' ? 'Career' : 'Kerjaya'}</a>
          </li>
          <li>
            <a>Media</a>
          </li>
          <li>
            <a href="https://avana.asia/contact/">{lang === 'en' ? 'Contact Us' : 'Hubungi Kami'}</a>
          </li>
          {/* <li>
            <a href="https://avana.id/wp-content/uploads/2018/05/AVANA-Privacy-Policy.pdf">
            {lang === 'en' ? 'Privacy Policy' : 'Dasar Privasi'}
            </a>
          </li> */}
        </ul>
      </div>
      <div>
        <h6>{lang === 'en' ? 'Main Features' : 'Fungsi Utama'}</h6>
        <ul>
          {/* <li>
            <a>Facebook Store</a>
          </li> */}
          {/* <li>
            <a href="https://avana.id/features-auto-reply/?lang=id">
              Facebook Auto Reply
            </a>
          </li>
          <li>
            <a href="https://avana.id/features-messenger/?lang=id">
              Messenger Store
            </a>
          </li> */}
          <li>
            <a href="/webstore">Webstore</a>
          </li>
          {/* <li>
            <a>Reporting Tools</a>
          </li>
          <li>
            <a>Facebook Ads</a>
          </li> */}
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/avachat">Live Autoreply</a>
          </li>
          <li>
            <a href="/reseller">{lang === 'en' ? 'Reseller Management' : 'Pengurusan Reseller'}</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
