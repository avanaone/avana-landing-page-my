import React, { useState, useEffect } from "react";

import Head from "next/head";

import styles from "./scss/Home.module.scss";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Slider from "../components/Slider/";

import Testimonial from "../json/testimonal.json";

const Home = () => {
  const [data, setData] = useState({
    dashboard: {
      current: 1,
    },
    avachat: {
      current: 1,
    },
    reseller: {
      current: 1,
    },
    webstore: {
      current: 1,
    },
  });

  const [navbarBg, setNavbarBg] = useState("#f4f7f9");

  useEffect(() => {
    const id = setInterval(() => {
      setData({
        dashboard: {
          current: data.dashboard.current < 3 ? data.dashboard.current + 1 : 1,
        },
        avachat: {
          current: data.avachat.current < 3 ? data.avachat.current + 1 : 1,
        },
        reseller: {
          current: data.reseller.current < 3 ? data.reseller.current + 1 : 1,
        },
        webstore: {
          current: data.webstore.current < 3 ? data.webstore.current + 1 : 1,
        },
      });
    }, 5000);

    window.addEventListener("scroll", handleNavbar);

    return () => {
      clearInterval(id);
      window.removeEventListener("scroll", handleNavbar);
    };
  }, [data]);

  const handleSlider = (id, step) =>
    setData({ ...data, [id]: { ...data[id], current: step } });

  const handleNavbar = (e) => {
    window.scrollY > 0 ? setNavbarBg("#fff") : setNavbarBg("#f4f7f9");
  };

  return (
    <div className={styles.Home} onScroll={handleNavbar}>
      <Head>
        {/* Primary Meta Tags */}
        <title>AVANA | #1 Leading Social Commerce Platform in Indonesia</title>
        <meta
          name="title"
          content="#1 Leading Social Commerce Platform in Indonesia"
        />
        <meta
          name="description"
          content=" AVANA adalah platform social commerce untuk mendukung para pelaku bisnis dengan mengoptimalkan penjualan melalui website, facebook, instagram, dan whatsapp"
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
          content=" AVANA adalah platform social commerce untuk mendukung para pelaku bisnis dengan mengoptimalkan penjualan melalui website, facebook, instagram, dan whatsapp"
        />
        <meta property="og:image" content="/assets/images/meta-image.png" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://avana.id/" />
        <meta
          property="twitter:title"
          content="#1 Leading Social Commerce Platform in Indonesia"
        />
        <meta
          property="twitter:description"
          content=" AVANA adalah platform social commerce untuk mendukung para pelaku bisnis dengan mengoptimalkan penjualan melalui website, facebook, instagram, dan whatsapp"
        />
        <meta
          property="twitter:image"
          content="/assets/images/meta-image.png"
        />
      </Head>

      <Navbar style={{ backgroundColor: navbarBg }} />

      <header>
        <h1 className="is-size-3">
          Satu Dashboard Untuk Mengelola Semua Penjualan Sosial Mediamu
        </h1>
        <p>
          Toko Online • Chat Lintas Sosial Media • Auto Reply • Manajemen
          Reseller
        </p>
        <a
          href="https://store.avana.asia/"
          target="__blank"
          className="ava-btn btn-primary"
        >
          Coba Gratis
        </a>
        <div className="channels" />
        <div className="bg-hero" />
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
                className={data.dashboard.current === 1 ? "active" : ""}
                onClick={() => handleSlider("dashboard", 1)}
              >
                Manajemen Pesanan
              </li>
              <li
                className={data.dashboard.current === 2 ? "active" : ""}
                onClick={() => handleSlider("dashboard", 2)}
              >
                Manajemen Produk
              </li>
              <li
                className={data.dashboard.current === 3 ? "active" : ""}
                onClick={() => handleSlider("dashboard", 3)}
              >
                Balas Pesan & Komen Otomatis
              </li>
            </ul>
            <div className="ava-btn-group">
              <a
                href="https://store.avana.asia/"
                target="__blank"
                className="ava-btn btn-primary"
              >
                Saya Tertarik
              </a>
              <a href="/dashboard" className="ava-btn btn-secondary">
                Lihat Selengkapnya
              </a>
            </div>
          </div>
          <div className="feature-img">
            <img
              className={data.dashboard.current === 1 ? "active" : ""}
              src={require("../public/assets/images/dashboard/manajemen-order.png")}
              alt=""
            />
            <img
              className={data.dashboard.current === 2 ? "active" : ""}
              src={require("../public/assets/images/dashboard/manajemen-produk.png")}
              alt=""
            />
            <img
              className={data.dashboard.current === 3 ? "active" : ""}
              src={require("../public/assets/images/dashboard/auto-reply.png")}
              alt=""
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
                className={data.avachat.current === 1 ? "active" : ""}
                onClick={() => handleSlider("avachat", 1)}
              >
                Kirim Produk & Invois
              </li>
              <li
                className={data.avachat.current === 2 ? "active" : ""}
                onClick={() => handleSlider("avachat", 2)}
              >
                Quick Reply
              </li>
              <li
                className={data.avachat.current === 3 ? "active" : ""}
                onClick={() => handleSlider("avachat", 3)}
              >
                Info Pengiriman Barang
              </li>
            </ul>
            <div className="ava-btn-group">
              <a
                href="https://wa.me/6288211047841?text=Halo, saya tertarik menggunakan produk AVAChat"
                target="__blank"
                className="ava-btn btn-primary"
              >
                Saya Tertarik
              </a>
              <a href="/avachat" className="ava-btn btn-secondary">
                Lihat Selengkapnya
              </a>
            </div>
          </div>
          <div className="feature-img">
            <img
              className={data.avachat.current === 1 ? "active" : ""}
              src={require("../public/assets/images/avachat/send-product-info.png")}
              alt=""
            />
            <img
              className={data.avachat.current === 2 ? "active" : ""}
              src={require("../public/assets/images/avachat/quick-reply.png")}
              alt=""
            />
            <img
              className={data.avachat.current === 3 ? "active" : ""}
              src={require("../public/assets/images/avachat/send-shipping-info.png")}
              alt=""
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
                className={data.reseller.current === 1 ? "active" : ""}
                onClick={() => handleSlider("reseller", 1)}
              >
                Manajemen Database Reseller
              </li>
              <li
                className={data.reseller.current === 2 ? "active" : ""}
                onClick={() => handleSlider("reseller", 2)}
              >
                Lihat Performa Reseller
              </li>
              <li
                className={data.reseller.current === 3 ? "active" : ""}
                onClick={() => handleSlider("reseller", 3)}
              >
                Atur Komisi & Buat Level Reseller
              </li>
            </ul>
            <div className="ava-btn-group">
              <a
                href="https://wa.me/6288211047841?text=Halo, saya tertarik menggunakan produk Manajemen Reseller"
                target="__blank"
                className="ava-btn btn-primary"
              >
                Saya Tertarik
              </a>
              <a href="/reseller" className="ava-btn btn-secondary">
                Lihat Selengkapnya
              </a>
            </div>
          </div>
          <div className="feature-img">
            <img
              className={data.reseller.current === 1 ? "active" : ""}
              src={require("../public/assets/images/reseller/manajemen-database-reseller.png")}
              alt=""
            />
            <img
              className={data.reseller.current === 2 ? "active" : ""}
              src={require("../public/assets/images/reseller/lihat-performa-reseller.png")}
              alt=""
            />
            <img
              className={data.reseller.current === 3 ? "active" : ""}
              src={require("../public/assets/images/reseller/atur-komisi-reseller.png")}
              alt=""
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
                className={data.webstore.current === 1 ? "active" : ""}
                onClick={() => handleSlider("webstore", 1)}
              >
                Dukungan Payment Gateway
              </li>
              <li
                className={data.webstore.current === 2 ? "active" : ""}
                onClick={() => handleSlider("webstore", 2)}
              >
                Berbagai Macam Pilihan Tema
              </li>
              <li
                className={data.webstore.current === 3 ? "active" : ""}
                onClick={() => handleSlider("webstore", 3)}
              >
                Order Melalui WhatsApp
              </li>
            </ul>
            <div className="ava-btn-group">
              <a
                href="https://store.avana.asia/"
                target="__blank"
                className="ava-btn btn-primary"
              >
                Saya Tertarik
              </a>
              <a href="/webstore" className="ava-btn btn-secondary">
                Lihat Selengkapnya
              </a>
            </div>
          </div>
          <div className="feature-img">
            <img
              className={data.webstore.current === 1 ? "active" : ""}
              src={require("../public/assets/images/webstore/payment-gateway.png")}
              alt=""
            />
            <img
              className={data.webstore.current === 2 ? "active" : ""}
              src={require("../public/assets/images/webstore/theme.png")}
              alt=""
            />
            <img
              className={data.webstore.current === 3 ? "active" : ""}
              src={require("../public/assets/images/webstore/order-via-whatsapp.png")}
              alt=""
            />
          </div>
        </section>
        <section className="feature">
          <div className="description">
            <h2 className="is-size-4">
              Miliki <span className="hl">toko facebook</span> yang kaya fitur
            </h2>
            <p>
              Ubah teman jadi pelanggan. Pelanggan bisa belanja sampai bayar
              langsung di Facebook Page Anda tanpa keluar dari laman ini.
            </p>
            <ul />
            <div className="ava-btn-group">
              <a
                href="https://wa.me/6288211047841?text=Halo, saya tertarik menggunakan produk Facebook Store"
                target="__blank"
                className="ava-btn btn-primary"
              >
                Saya Tertarik
              </a>
            </div>
          </div>
          <div className="feature-img">
            <img
              src={require("../public/assets/images/facebook-store.png")}
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
              src={require("../public/assets/images/courier.png")}
              alt="Kurir"
            />
            <div className="border" />
            <img
              src={require("../public/assets/images/bank.png")}
              alt="Banks"
            />
          </div>
        </section>
        <section id="testimonial">
          <h2 className="is-size-4">
            Apa kata mereka yang sudah bergabung dengan AVANA?
          </h2>

          {/* <q>
            Toko online itu bukan hanya sekedar wadah untuk memasarkan barang
            tapi sebagai alat untuk membangun brand juga. Bersama AVANA, saya
            bisa memperkenalkan dan membesarkan nama Amity.
          </q>
          <span className="name">Amity Indonesia</span>

          <img
            src={require("../public/assets/images/testimonial/amity.png")}
            alt=""
          /> */}
          <Slider testimonial={Testimonial} />
        </section>
        <section id="trial">
          <h2 className="is-size-4">Coba Sekarang GRATIS 14 Hari</h2>
          <a
            href="https://store.avana.asia/"
            target="__blank"
            className="ava-btn btn-primary"
          >
            Coba Gratis
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
