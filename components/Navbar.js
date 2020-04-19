import React, { useState, useEffect, useRef } from "react";

import { LinkButton } from "./Button";

const getWidth = () => (typeof window !== "undefined" ? window.innerWidth : "");

export default function Navbar({ style }) {
  const [isModal, setIsModal] = useState(false);
  const toggleModal = () => setIsModal(!isModal);

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
    const onResize = window.addEventListener("resize", () =>
      resizeRef.current()
    );

    return () => {
      window.removeEventListener("resize", onResize);
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
            className={`navbar-burger ${isActive ? "is-active" : ""}`}
            data-target="navMenu"
            aria-label="menu"
            aria-expanded="false"
            onClick={toggleNavbar}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
          <div className="navbar-end">
            <div
              className={`navbar-item has-dropdown 
              ${innerWidth >= 1023 ? "is-hoverable" : ""}
              ${
                dropdownActive["produk"] && innerWidth < 1023 ? "is-active" : ""
              }`}
              onClick={() => toggleDropdown("produk")}
            >
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
            <div
              className={`navbar-item has-dropdown ${
                innerWidth >= 1023 ? "is-hoverable" : ""
              } ${
                dropdownActive["pelajari"] && innerWidth < 1023
                  ? "is-active"
                  : ""
              }`}
              onClick={() => toggleDropdown("pelajari")}
            >
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
              <LinkButton
                href="https://store.avana.asia/"
                target="__blank"
                className="btn-secondary"
                title="Masuk"
              >
                Masuk
              </LinkButton>
              <LinkButton
                href="https://store.avana.asia/"
                target="__blank"
                className="btn-primary"
                title="Daftar"
              >
                Daftar
              </LinkButton>
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
            <LinkButton
              href="/assets/files/tutorial.pdf"
              className="btn-primary"
              download
            >
              Download Gratis
            </LinkButton>
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
