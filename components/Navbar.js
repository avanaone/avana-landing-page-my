import React, { useState } from "react";
import Head from "next/head";

export default function Navbar({ style }) {
  const [isModal, setIsModal] = useState(false);
  const toggleModal = () => setIsModal(!isModal);

  return (
    <>
      <Head>
        <script src="/static/navbar.js" />
      </Head>
      <nav
        className="navbar is-white is-fixed-top"
        role="navigation"
        aria-label="main navigation"
        style={style}
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/" title="BERANDA &middot; Avana">
            <img
              src={require("../public/assets/images/logo.png")}
              alt="AVANA Logo"
              width="100"
            />
          </a>

          <a
            role="button"
            className="navbar-burger"
            data-target="navMenu"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-menu" id="navMenu">
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" title="Produk">
                Produk
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item" href="/dashboard" title="Dashboard">
                  Dashboard
                </a>

                <a className="navbar-item" href="/avachat" title="AVAChat">
                  AVAChat
                </a>

                <a
                  className="navbar-item"
                  href="/reseller"
                  title="Manajemen Reseller"
                >
                  Manajemen Reseller
                </a>

                <a className="navbar-item" href="/webstore" title="Webstore">
                  Webstore
                </a>
              </div>
            </div>

            <a className="navbar-item" href="/price" title="Harga">
              Harga
            </a>

            <a href="/promo" className="navbar-item" title="Promo">
              <span className="dot">Promo</span>
            </a>

            <a href="/event" className="navbar-item" title="Event">
              Event
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" title="Pelajari">
                Pelajari
              </a>
              <div className="navbar-dropdown">
                <a
                  className="navbar-item"
                  title="Tutorial"
                  onClick={toggleModal}
                >
                  Tutorial
                </a>
                {/* <a href="/FAQ" className="navbar-item" title="FAQ">
                  FAQ
                </a> */}
                <a
                  href="https://blog.avana.id/"
                  className="navbar-item"
                  title="Blog"
                >
                  Blog
                </a>
              </div>
            </div>

            <a href="/about-us" className="navbar-item" title="Tentang Kami">
              Tentang Kami
            </a>

            <div className="navbar-item">
              <a
                href="https://store.avana.asia/"
                target="__blank"
                className="ava-btn btn-secondary"
                title="Masuk"
              >
                Masuk
              </a>
              <a
                href="https://store.avana.asia/"
                target="__blank"
                className="ava-btn btn-primary"
                title="Daftar"
              >
                Daftar
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className={`modal ${isModal ? "is-active" : ""}`}>
        <div className="modal-background" onClick={toggleModal} />
        <div className="modal-content">
          <button
            className="modal-close is-large"
            onClick={toggleModal}
            aria-label="close"
          >
            Close
          </button>
          <img src={require("../public/assets/images/download.png")} alt="" />
          <div>
            <h3 className="is-size-5 modalTittle">Download e-Book Gratis</h3>
            <p>
              Baca penggunaan AVANA biar gak pusing. Download juga e-Book AVANA
              lainnya!
            </p>
            <a
              href="/assets/files/tutorial.pdf"
              className="ava-btn btn-primary"
              download
            >
              Download Gratis
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
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

        .modal-content img {
          margin: 1em;
        }

        .modal-content > div {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin: 1em;
          max-width: 325px;
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
      `}</style>
    </>
  );
}
