import React, { useState, useEffect } from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import SliderTestimonial from "../components/SliderTestimonial";
import Slider from "../components/Slider";
import { LinkButton } from "../components/Button";

import styles from "./scss/Home.module.scss";

import Testimonial from "../json/testimonial.json";

const Home = () => {
  const [state, setState] = useState({
    dashboard: 0,
    avachat: 0,
    reseller: 0,
    webstore: 0,
  });

  const { dashboard, avachat, reseller, webstore } = state;
  const [navbarBg, setNavbarBg] = useState("#f4f7f9");

  useEffect(() => {
    window.addEventListener("scroll", handleNavbar);

    return () => {
      window.removeEventListener("scroll", handleNavbar);
    };
  }, []);

  const handleSlider = (id, idx) => {
    setState((s) => ({ ...s, [id]: idx }));
  };

  const callbackSlider = ({ id, activeSlide }) =>
    setState((s) => ({
      ...s,
      [id]: activeSlide,
    }));

  const handleNavbar = (e) => {
    window.scrollY > 10 ? setNavbarBg("#fff") : setNavbarBg("#f4f7f9");
  };

  return (
    <div className={styles.Home} onScroll={handleNavbar}>
      <Head>
        {/* Primary Meta Tags */}
        <title>AVANA | #1 Leading Social Commerce Platform in Indonesia</title>
        <link rel="canonical" href="https://avana.id" />
        <meta
          name="title"
          content="#1 Leading Social Commerce Platform in Indonesia"
        />
        <meta
          name="description"
          content="AVANA adalah platform social commerce untuk mendukung para pelaku bisnis dengan mengoptimalkan penjualan melalui website, facebook, instagram, dan whatsapp"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://avana.id/" />
        <meta
          property="og:title"
          content="#1 Leading Social Commerce Platform in Indonesia"
        />
        <meta
          property="og:description"
          content="AVANA adalah platform social commerce untuk mendukung para pelaku bisnis dengan mengoptimalkan penjualan melalui website, facebook, instagram, dan whatsapp"
        />
        <meta
          property="og:image"
          content="/assets/images/meta-image.png?resize0?webp"
        />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://avana.id/" />
        <meta
          property="twitter:title"
          content="#1 Leading Social Commerce Platform in Indonesia"
        />
        <meta
          property="twitter:description"
          content="AVANA adalah platform social commerce untuk mendukung para pelaku bisnis dengan mengoptimalkan penjualan melalui website, facebook, instagram, dan whatsapp"
        />
        <meta
          property="twitter:image"
          content="/assets/images/meta-image.png?resize0?webp"
        />
      </Head>
      <Navbar style={{ backgroundColor: navbarBg }} />
      <header>
        <h1 className="is-size-3">
          Satu Dashboard Untuk Mengelola Semua Penjualan Sosial Mediamu
        </h1>
        <p>
          Toko Online • Integrasi Chat Sosial Media • Auto Reply • Manajemen
          Reseller
        </p>
        <LinkButton
          href="https://store.avana.asia/"
          target="__blank"
          className="ava-btn btn-primary"
        >
          Coba Gratis
        </LinkButton>
        <div className="channels" />
        <img
          srcSet={require("public/assets/images/hero.png?resize?webp").srcSet}
          alt=""
        />
      </header>
      <main>
        <section className="feature">
          <div className="description">
            <h2 className="is-size-4">
              <span className="hl">Dashboard</span> pintar untuk mengelola
              seluruh aktivitas jualanmu
            </h2>
            <p>
              Ada banyak fitur yang dapat membantu meningkatkan penjualan anda!
            </p>
            <ul>
              <li
                className={dashboard === 0 ? "active" : ""}
                onClick={() => handleSlider("dashboard", 0)}
              >
                Manajemen Pesanan
              </li>
              <li
                className={dashboard === 1 ? "active" : ""}
                onClick={() => handleSlider("dashboard", 1)}
              >
                Manajemen Produk
              </li>
              <li
                className={dashboard === 2 ? "active" : ""}
                onClick={() => handleSlider("dashboard", 2)}
              >
                Balas Pesan & Komen Otomatis
              </li>
            </ul>
            <div className="ava-btn-group">
              <LinkButton
                href="https://store.avana.asia/"
                target="__blank"
                className="btn-primary"
              >
                Saya Tertarik
              </LinkButton>
              <LinkButton href="/dashboard" className="btn-secondary">
                Lihat Selengkapnya
              </LinkButton>
            </div>
          </div>
          <div className="slider-container">
            <Slider
              id="dashboard"
              slides={[
                <img
                  srcSet={
                    require("public/assets/images/dashboard/manajemen-order.png?resize?webp")
                      .srcSet
                  }
                  alt=""
                />,
                <img
                  srcSet={
                    require("public/assets/images/dashboard/manajemen-produk.png?resize?webp")
                      .srcSet
                  }
                  alt=""
                />,
                <img
                  srcSet={
                    require("public/assets/images/dashboard/auto-reply.png?resize?webp")
                      .srcSet
                  }
                  alt=""
                />,
              ]}
              currentSlide={dashboard}
              hasDots
              autoPlay
              callback={callbackSlider}
            />
          </div>
        </section>
        <section className="feature">
          <div className="description">
            <h2 className="is-size-4">
              <span className="hl">AVAChat</span> menghubungkan semua pesan
              sosial media dalam satu dashboard
            </h2>
            <p>
              Avachat memiliki banyak fitur yang meningkatkan produktifitas Anda
              di berbagai saluran media sosial.
            </p>
            <ul>
              <li
                className={avachat === 0 ? "active" : ""}
                onClick={() => handleSlider("avachat", 0)}
              >
                Kirim Produk & Invois
              </li>
              <li
                className={avachat === 1 ? "active" : ""}
                onClick={() => handleSlider("avachat", 1)}
              >
                Quick Reply
              </li>
              <li
                className={avachat === 2 ? "active" : ""}
                onClick={() => handleSlider("avachat", 2)}
              >
                Info Pengiriman Barang
              </li>
            </ul>
            <div className="ava-btn-group">
              <LinkButton
                href="https://ws.avana.asia/6288211047841/Halo, saya tertarik menggunakan produk AVAChat"
                target="__blank"
                className="btn-primary"
              >
                Saya Tertarik
              </LinkButton>
              <LinkButton href="/avachat" className="btn-secondary">
                Lihat Selengkapnya
              </LinkButton>
            </div>
          </div>
          <div className="slider-container">
            <Slider
              id="avachat"
              slides={[
                <img
                  srcSet={
                    require("public/assets/images/avachat/send-product-info.png?resize?webp")
                      .srcSet
                  }
                  alt=""
                />,
                <img
                  srcSet={
                    require("public/assets/images/avachat/quick-reply.png?resize?webp")
                      .srcSet
                  }
                  alt=""
                />,
                <img
                  srcSet={
                    require("public/assets/images/avachat/send-shipping-info.png?resize?webp")
                      .srcSet
                  }
                  alt=""
                />,
              ]}
              currentSlide={avachat}
              hasDots
              autoPlay
              callback={callbackSlider}
            />
          </div>
        </section>
        <section className="feature">
          <div className="description">
            <h2 className="is-size-4">
              Dilengkapi dengan fitur&nbsp;
              <span className="hl">Manajemen Reseller</span>
            </h2>
            <p>
              Dengan fitur ini, Anda bisa mengamati performa resellermu secara
              langsung.
            </p>
            <ul>
              <li
                className={reseller === 0 ? "active" : ""}
                onClick={() => handleSlider("reseller", 0)}
              >
                Manajemen Database Reseller
              </li>
              <li
                className={reseller === 1 ? "active" : ""}
                onClick={() => handleSlider("reseller", 1)}
              >
                Lihat Performa Reseller
              </li>
              <li
                className={reseller === 2 ? "active" : ""}
                onClick={() => handleSlider("reseller", 2)}
              >
                Atur Komisi & Buat Level Reseller
              </li>
            </ul>
            <div className="ava-btn-group">
              <LinkButton
                href="https://ws.avana.asia/6288211047841/Halo, saya tertarik menggunakan produk Manajemen Reseller"
                target="__blank"
                className="btn-primary"
              >
                Saya Tertarik
              </LinkButton>
              <LinkButton href="/reseller" className="btn-secondary">
                Lihat Selengkapnya
              </LinkButton>
            </div>
          </div>
          <div className="slider-container">
            <Slider
              id="reseller"
              slides={[
                <img
                  srcSet={
                    require("public/assets/images/reseller/manajemen-database-reseller.png?resize?webp")
                      .srcSet
                  }
                  alt=""
                />,
                <img
                  srcSet={
                    require("public/assets/images/reseller/lihat-performa-reseller.png?resize?webp")
                      .srcSet
                  }
                  alt=""
                />,
                <img
                  srcSet={
                    require("public/assets/images/reseller/atur-komisi-reseller.png?resize?webp")
                      .srcSet
                  }
                  alt=""
                />,
              ]}
              currentSlide={reseller}
              hasDots
              autoPlay
              callback={callbackSlider}
            />
          </div>
        </section>
        <section className="feature">
          <div className="description">
            <h2 className="is-size-4">
              <span className="hl">Buat Website</span> untuk tokomu dan tentukan
              sendiri domain.com pilihanmu
            </h2>
            <p>
              Website yang kami sediakan untuk anda memiliki banyak fitur yang
              membantu calon pelanggan untuk bertransaksi.
            </p>
            <ul>
              <li
                className={webstore === 0 ? "active" : ""}
                onClick={() => handleSlider("webstore", 0)}
              >
                Dukungan Payment Gateway
              </li>
              <li
                className={webstore === 1 ? "active" : ""}
                onClick={() => handleSlider("webstore", 1)}
              >
                Berbagai Macam Pilihan Tema
              </li>
              <li
                className={webstore === 2 ? "active" : ""}
                onClick={() => handleSlider("webstore", 2)}
              >
                Order Melalui WhatsApp
              </li>
            </ul>
            <div className="ava-btn-group">
              <LinkButton
                href="https://store.avana.asia/"
                target="__blank"
                className="btn-primary"
              >
                Saya Tertarik
              </LinkButton>
              <LinkButton href="/webstore" className="btn-secondary">
                Lihat Selengkapnya
              </LinkButton>
            </div>
          </div>
          <div className="slider-container">
            <Slider
              id="webstore"
              slides={[
                <img
                  srcSet={
                    require("public/assets/images/webstore/payment-gateway.png?resize?webp")
                      .srcSet
                  }
                  alt=""
                />,
                <img
                  srcSet={
                    require("public/assets/images/webstore/theme.png?resize?webp")
                      .srcSet
                  }
                  alt=""
                />,
                <img
                  srcSet={
                    require("public/assets/images/webstore/order-via-whatsapp.png?resize?webp")
                      .srcSet
                  }
                  alt=""
                />,
              ]}
              currentSlide={webstore}
              hasDots
              autoPlay
              callback={callbackSlider}
            />
          </div>
        </section>
        <section className="feature">
          <div className="description">
            <h2 className="is-size-4">
              Miliki <span className="hl">Toko Facebook</span> dengan fitur
              terbaik
            </h2>
            <p>
              Ubah teman jadi pelanggan. Pelanggan bisa belanja sampai bayar
              langsung di Facebook Page Anda tanpa keluar dari laman ini.
            </p>
            <ul />
            <div className="ava-btn-group">
              <LinkButton
                href="https://ws.avana.asia/6288211047841/Halo, saya tertarik menggunakan produk Facebook Store"
                target="__blank"
                className="btn-primary"
              >
                Saya Tertarik
              </LinkButton>
            </div>
          </div>
          <div className="feature-img">
            <img
              srcSet={
                require("../public/assets/images/facebook-store.png?resize?webp")
                  .srcSet
              }
              className="active"
              alt=""
            />
          </div>
        </section>
        <section id="support">
          <h2 className="is-size-4">
            AVANA sudah didukung oleh berbagai metode pengiriman & pembayaran
          </h2>
          <div>
            <img
              srcSet={
                require("../public/assets/images/courier.png?resize&size=400?webp")
                  .srcSet
              }
              alt="Kurir"
            />
            <div className="border" />
            <img
              srcSet={
                require("../public/assets/images/bank.png?resize&size=400?webp")
                  .srcSet
              }
              alt="Bank"
            />
          </div>
        </section>
        <section id="testimonial">
          <h2 className="is-size-4">
            Apa kata mereka yang sudah bergabung dengan AVANA?
          </h2>
          <SliderTestimonial testimonial={Testimonial} />
        </section>
        <section className="trial">
          <h2 className="is-size-4">Coba Sekarang GRATIS 14 Hari</h2>
          <LinkButton
            href="https://store.avana.asia/"
            target="__blank"
            className="ava-btn btn-primary"
          >
            Coba Gratis
          </LinkButton>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
