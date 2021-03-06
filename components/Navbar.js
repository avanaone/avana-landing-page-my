import React, { useState, useEffect, useRef } from 'react';

import { LinkButton } from './Button';

const getCw = import('../json/copywriting.json');
const getWidth = () => (typeof window !== 'undefined' ? window.innerWidth : '');

export default function Navbar({ style }) {
  const [lang, setLang] = useState('en');
  const [isUtm, setIsUtm] = useState(false);
  const [cw, setCw] = useState([]);

  // const [isModal, setIsModal] = useState(false);
  // const toggleModal = () => setIsModal(!isModal);
  const toggleLang = (language) => {
    localStorage.setItem('lang', language);
    setLang(language);
    location.reload();
  };

  const [state, setState] = useState({
    isActive: false,
    dropdownActive: {
      event: false,
    },
    innerWidth: 1023,
  });

  const { isActive, dropdownActive, innerWidth } = state;

  const resizeRef = useRef();

  useEffect(() => {
    resizeRef.current = handleResize;
  });

  useEffect(() => {
    if (localStorage.getItem('lang')) {
      // console.log(localStorage.getItem('lang'));
      setLang(localStorage.getItem('lang'));
      getCw.then((res) => {
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
    const onResize = window.addEventListener('resize', () =>
      resizeRef.current()
    );

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const handleResize = () =>
    setState((s) => ({
      ...s,
      innerWidth: getWidth(),
    }));
  const toggleNavbar = () => setState((s) => ({ ...s, isActive: !s.isActive }));
  const toggleDropdown = (k) =>
    setState((s) => ({
      ...s,
      dropdownActive: { ...s.dropdownActive, [k]: !s.dropdownActive[k] },
    }));

  return (
    <>
      <nav
        className='navbar is-transparent'
        role='navigation'
        aria-label='main navigation'
        style={style}
      >
        <div className='navbar-brand'>
          <a className='navbar-item' href='/' title='BERANDA &middot; Avana'>
            <picture style={{ display: `flex`, alignItems: `center` }}>
              <source srcSet='/assets/images/logo.webp' type='image/webp' />
              <img src='/assets/images/logo.png' alt='Avana logo' />
            </picture>
          </a>
          <div className='navbar-lang'>
            <a
              role='button'
              onClick={() => toggleLang('en')}
              className={`lang-switcher ${lang === 'en' ? 'active' : ''}`}
            >
              ENG
            </a>
            <a
              role='button'
              onClick={() => toggleLang('bm')}
              className={`lang-switcher ${lang === 'en' ? '' : 'active'}`}
            >
              BM
            </a>
          </div>
          {/* <div
              className={`navbar-item has-dropdown ${
                innerWidth >= 1023 ? 'is-hoverable' : ''
              } ${
                dropdownActive['lang'] && innerWidth < 1023
                  ? 'is-active'
                  : ''
              }`}
              onClick={() => toggleDropdown('lang')}
            >
              <a className="navbar-link lang-title" title="lang">
                {lang === 'en' ? 'En' : 'Bm'}
              </a>
              <div className="navbar-dropdown lang-dropdown">
                <a
                  className={`navbar-item ${lang === 'en' ? 'lang-active' : ''}`}
                  title="Tutorial"
                  onClick={() => toggleLang("en")}
                >
                  En
                </a>
                <a
                  className={`navbar-item ${lang === 'bm' ? 'lang-active' : ''}`}
                  title="Blog"
                  onClick={() => toggleLang("bm")}
                >
                  Bm
                </a>
              </div>
            </div> */}

          <a
            role='button'
            className={`navbar-burger ${isActive ? 'is-active' : ''}`}
            data-target='navMenu'
            aria-label='menu'
            aria-expanded='false'
            onClick={toggleNavbar}
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>

        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className='navbar-end'>
            <div
              className={`navbar-item has-dropdown 
              ${innerWidth >= 1023 ? 'is-hoverable' : ''}
              ${
                dropdownActive['produk'] && innerWidth < 1023 ? 'is-active' : ''
              }`}
              onClick={() => toggleDropdown('produk')}
            >
              <a className='navbar-link' title='Produk'>
                {cw.navbar ? cw.navbar[0] : 'Product'}
              </a>
              <div className='navbar-dropdown'>
                <a className='navbar-item' href='/dashboard' title='Dashboard'>
                  {lang === 'en' ? 'Dashboard' : 'Dashboard'}
                </a>
                <a
                  className='navbar-item'
                  href='/liveautoreply'
                  title='Live autoreply'
                >
                  {lang === 'en' ? 'Live Autoreply' : 'Live Autoreply'}
                </a>
                {/* <a className='navbar-item' href='/reseller' title='Reseller'>
                  {lang === 'en' ? 'Reseller' : 'Sales Agent'}
                </a> */}
                <a className='navbar-item' href='/webstore' title='Webstore'>
                  {lang === 'en' ? 'Webstore' : 'Kedai Online'}
                </a>
                <a className='navbar-item' href='/avachat' title='AVAChat'>
                  {lang === 'en' ? 'AVAChat' : 'AVAChat'}
                </a>
                <a
                  className='navbar-item'
                  href='/whatsapp-commerce'
                  title='AVAChat'
                >
                  {lang === 'en' ? 'WhatsApp Commerce' : 'WhatsApp Commerce'}
                </a>
              </div>
            </div>
            <a
              className='navbar-item'
              href='https://promo.avana.asia/'
              title='Promo'
            >
              <span className='dot'>Promo</span>
            </a>
            <a className='navbar-item' href='/price' title='Harga'>
              {cw.navbar ? cw.navbar[1] : 'Price'}
            </a>
            {/* <a href="/promo" className="navbar-item" title="Promo">
              <span className="dot">{cw.navbar ? cw.navbar[2] : 'loading'}</span>
            </a> */}
            <a href='/event' className='navbar-item' title='Event'>
              {cw.navbar ? cw.navbar[3] : 'Events'}
            </a>
            <div
              className={`navbar-item has-dropdown ${
                innerWidth >= 1023 ? 'is-hoverable' : ''
              } ${
                dropdownActive['pelajari'] && innerWidth < 1023
                  ? 'is-active'
                  : ''
              }`}
              onClick={() => toggleDropdown('pelajari')}
            >
              <a
                className='navbar-link'
                title={cw.navbar ? cw.navbar[4] : 'Learn'}
              >
                {cw.navbar ? cw.navbar[4] : 'Learn'}
              </a>
              <div className='navbar-dropdown'>
                {/* <a
                  className="navbar-item"
                  title="Tutorial"
                  onClick={toggleModal}
                >
                  {cw.navbar ? cw.navbar[5] : 'loading'}
                </a> */}
                {/* <a href="/FAQ" className="navbar-item" title="FAQ">
                  FAQ
                </a> */}
                <a
                  href={
                    lang === 'en'
                      ? 'http://bit.ly/avanaeng'
                      : 'http://bit.ly/avanabm'
                  }
                  className='navbar-item'
                  title='Tutorial'
                  target='_blank'
                >
                  {cw.navbar ? cw.navbar[6] : 'Tutorial'}
                </a>
                <a
                  href='https://blog.avana.asia/'
                  className='navbar-item'
                  title='Blog'
                  target='_blank'
                >
                  {cw.navbar ? cw.navbar[7] : 'Blog'}
                </a>
                <a href='/ebook' className='navbar-item' title='eBook'>
                  {cw.navbar ? cw.navbar[8] : 'Ebook'}
                </a>
              </div>
            </div>
            <a
              href='/about-us'
              className='navbar-item'
              title={cw.navbar ? cw.navbar[9] : 'About Us'}
            >
              {cw.navbar ? cw.navbar[9] : 'About Us'}
            </a>
            <div className='navbar-item'>
              <LinkButton
                href={
                  isUtm
                    ? `https://app.avana.asia/${localStorage.getItem(
                        'utm_avana'
                      )}`
                    : 'https://app.avana.asia/?utm_source=website&utm_medium=button&utm_campaign=trial_web'
                }
                target='__blank'
                className='btn-secondary'
                title='Masuk'
              >
                {cw.navbar ? cw.navbar[10] : 'Log In'}
              </LinkButton>
              <LinkButton
                href={
                  isUtm
                    ? `https://app.avana.asia/${localStorage.getItem(
                        'utm_avana'
                      )}`
                    : 'https://app.avana.asia/?utm_source=website&utm_medium=button&utm_campaign=trial_web'
                }
                target='__blank'
                className='btn-primary'
                title='Daftar'
              >
                {cw.navbar ? cw.navbar[11] : 'Sign Up'}
              </LinkButton>
            </div>
          </div>
        </div>
      </nav>
      {/* <div className={`modal ${isModal ? 'is-active' : ''}`}>
        <div className='modal-background' onClick={toggleModal} />
        <div className='modal-content tutorial'>
          <button
            className='modal-close is-large'
            onClick={toggleModal}
            aria-label='close'
          >
            Close
          </button>
          <iframe
            src='https://www.youtube.com/embed/xq5475VItVM'
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
          <div className='tutorial-desc'>
            <h3 className='is-size-5 modalTittle'>Gratis eBook Tutorial!</h3>
            <p>
              Pelajari tahapan untuk mengembangkan Bisnismu menggunakan Fitur
              Canggih AVANA dengan klik tombol dibawah ini!
            </p>
            <LinkButton
              href='/assets/files/tutorial.pdf'
              className='btn-primary'
              download
            >
              Download Gratis
            </LinkButton>
          </div>
        </div>
      </div> */}
      {/* <style jsx>{`
        .modal-content {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;
          width: fit-content;
          padding: 0.75em 1em 0.5em;
          text-align: left;
        }
        .modal-content.tutorial {
          width: 560px;
        }

        .modal-content img {
          margin: 1em;
        }

        .modal-content iframe {
          margin: auto;
          width: 460px;
          height: 260px;
        }

        .modal-content > div {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin: 1em;
          max-width: 325px;
          min-width: 100%;
        }
        .modal-content .tutorial-desc > p {
          width: calc(100% - 100px);
          margin: auto;
        }
        @media (max-width: 768px) {
          .modal-content {
            max-width: calc(100% - 30px);
          }
          .modal-content iframe {
            max-width: calc(100% - 50px);
            height: auto;
          }
          .modal-content .tutorial-desc > p {
            width: 100%;
          }
        }
        @media (max-width: 385px) {
          .modal-content > div {
            align-items: center;
            text-align: center;
          }
        }

        .modal-content > div .ava-btn {
          margin: 1em 0;
        }
      `}</style> */}
    </>
  );
}
