import Head from "next/head";
import ScriptNavbar from "../modules/ScriptNavbar";

export default function Navbar() {
  return (
    <nav>
      <Head>
        <ScriptNavbar />
      </Head>
      <nav
        className="navbar is-white is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a href="/" className="navbar-item" title="BERANDA &middot; Avana">
            <img src="/assets/images/logo.png" alt="Avana Logo" width="100" />
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
            <a href="/about-us" className="navbar-item" title="Tentang Kami">
              Tentang Kami
            </a>
            <a href="/event" className="navbar-item" title="Event">
              Event
            </a>
            <a href="/promo" className="navbar-item" title="Promo">
              Promo
            </a>
            <a href="/price" className="navbar-item" title="Harga">
              Harga
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a href="#" className="navbar-link" title="Pelajari">
                Pelajari
              </a>
              <div className="navbar-dropdown">
                <a href="/tutorial" className="navbar-item" title="Tutorial">
                  Tutorial
                </a>
                <a href="/FAQ" className="navbar-item" title="FAQ">
                  FAQ
                </a>
                <a href="/Blog" className="navbar-item" title="Blog">
                  Blog
                </a>
              </div>
            </div>
            <div className="navbar-item">
              <a href="/" className="ava-btn btn-secondary" title="Login">
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
    </nav>
  );
}
