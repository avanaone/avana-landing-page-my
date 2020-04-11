import Head from "next/head";

import styles from "./scss/Home.module.scss";

import Footer from "../components/Footer";
import ScriptNavbar from "../modules/ScriptNavbar";

const Home = () => (
  <div className={styles.Home}>
    <Head>
      <title>AVANA</title>
      <link rel="icon" href="/favicon.ico" />
      {/* <script type="text/javascript" src="/static/navbar.js"></script> */}
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
        <div className="navbar-start">
          <a href="/about-us" className="navbar-item" title="Tentang Kami">
            Tentang Kami
          </a>
          <a href="/event" className="navbar-item" title="Event">
            Event
          </a>
          <a href="/promo" className="navbar-item" title="Promo">
            Promo
          </a>
          <a href="/" className="navbar-item" title="BERANDA &middot; Avana">
            <img src="/assets/images/logo.png" alt="Avana Logo" width="125" />
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
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <a href="/" className="ava-btn btn-secondary" title="Login">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>

    <header>
      <h1 className="is-size-3">
        Satu dashboard untuk mengelola semua aktivitas penjualanmu di sosial
        media
      </h1>
      <p>Chat Multichannel • Auto Reply • Reseller Management • Toko Online</p>
      <button type="button" className="ava-btn btn-primary">
        Coba Gratis
      </button>
      <div className="bg-header"></div>
    </header>
    <main>
      <section className="feature">
        <div className="description">
          <h2 className="is-size-4">
            <span className="hl">Dashboard</span> pintar untuk mengelola
            Aktivitas jualanmu di sosmed
          </h2>
          <p>
            Selain membuatmu lebih produktif dashboard ini juga kaya akan fitur
            yang membantu kamu meningkatkan penjualan.
          </p>
          <ul>
            <li>Management Order</li>
            <li className="active">Manajemen Produk</li>
            <li>Auto Reply Chat & Comment</li>
          </ul>
          <div className="ava-btn-group">
            <button type="button" className="ava-btn btn-primary">
              <a href="price">Saya Tertarik</a>
            </button>
            <a href="/dashboard" className="ava-btn">
              Lihat Selengkapnya
            </a>
          </div>
        </div>
        <div>
          <img src="/assets/images/dashboard.png" alt="" />
        </div>
      </section>
      <section className="feature">
        <div className="description">
          <h2 className="is-size-4">
            <span className="hl">AVAchat</span> Menghubungkan semua chat social
            media menjadi 1 dashboard
          </h2>
          <p>
            AVAChat juga mempunyai banyak fitur yang meningkatkan
            produktifitasmu di berbagai channel sosmed.
          </p>
          <ul>
            <li>Send Product & Invoice</li>
            <li className="active">Quick Reply</li>
            <li>Send Shipping Info</li>
          </ul>
          <div className="ava-btn-group">
            <button type="button" className="ava-btn btn-primary">
              <a href="price">Saya Tertarik</a>
            </button>
            <a href="/avachat" className="ava-btn">
              Lihat Selengkapnya
            </a>
          </div>
        </div>
        <div>
          <img src="/assets/images/avachat.png" alt="" />
        </div>
      </section>
      <section className="feature">
        <div className="description">
          <h2 className="is-size-4">
            Manajement resellermu dengen fitur{" "}
            <span className="hl">Reseller Management</span>
          </h2>
          <p>
            Reseller management salah satu fitur yang membantu kamu mengamati
            performa reseller secara realtime.
          </p>
          <ul>
            <li>Management Database Reseller</li>
            <li className="active">Lihat Performa Reseller</li>
            <li>Atur Komisi & Buat Level Reseller</li>
          </ul>
          <div className="ava-btn-group">
            <button type="button" className="ava-btn btn-primary">
              <a href="price">Saya Tertarik</a>
            </button>
            <a href="/reseller" className="ava-btn">
              Lihat Selengkapnya
            </a>
          </div>
        </div>
        <div>
          <img src="/assets/images/reseller-management.png" alt="" />
        </div>
      </section>
      <section className="feature">
        <div className="description">
          <h2 className="is-size-4">
            Miliki <span className="hl">Webstore</span> (toko online gratis) dan
            custom domain (.com, co.id, id).
          </h2>
          <p>
            Webstore (website toko online) kami mempunyai banyak fitur yang
            sangat membantu calon customermu melakukan transaksi.
          </p>
          <ul>
            <li>Support Payment Gateway</li>
            <li className="active">Theme (Free Update)</li>
            <li>Order Via Whatsapp</li>
          </ul>
          <div className="ava-btn-group">
            <button type="button" className="ava-btn btn-primary">
              <a href="price">Saya Tertarik</a>
            </button>

            <a href="/webstore" className="ava-btn">
              Lihat Selengkapnya
            </a>
          </div>
        </div>
        <div>
          <img src="/assets/images/webstore.png" alt="" />
        </div>
      </section>
      <section id="support">
        <h2 className="is-size-4">
          Didukung oleh berbagai macam metode pengiriman & pembayaran
        </h2>
        <div>
          <img src="/assets/images/courier.png" alt="" />
          <div className="border" />
          <img src="/assets/images/bank.png" alt="" />
        </div>
      </section>
      <section id="testimonial">
        <h2 className="is-size-4">
          Apa kata mereka yang sudah bergabung dengan AVANA?
        </h2>
        <q>
          Toko online itu bukan hanya sekedar wadah untuk memasarkan barang tapi
          sebagai alat untuk membangun brand juga. Bersama AVANA, saya bisa
          memperkenalkan dan membesarkan nama Amity.
        </q>
      </section>
      <section id="trial">
        <h2 className="is-size-4">Mulai uji coba gratis 14 hari Anda</h2>
        <button type="button" className="ava-btn btn-primary">
          Coba Gratis
        </button>
      </section>
    </main>

    <Footer />
  </div>
);

export default Home;
