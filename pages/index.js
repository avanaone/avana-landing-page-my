import React, { useState, useEffect } from "react";
import Head from "next/head";

import styles from "./scss/Home.module.scss";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

    return () => {
      clearInterval(id);
    };
  }, [data]);

  const handleSlider = (id, step) =>
    setData({ ...data, [id]: { ...data[id], current: step } });

  return (
    <div className={styles.Home}>
      <Head>
        {/* Primary Meta Tags */}
        <title>AVANA | Social Commerce AVANA Terpercaya di Indonesia</title>
        <meta
          name="title"
          content="Social Commerce AVANA Terpercaya di Indonesia"
        />
        <meta
          name="description"
          content="AVANA dapat mengubah sosial media  Anda layaknya toko online yang dapat melakukan pembelian dan pembayaran langsung"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://avana.id/" />
        <meta
          property="og:title"
          content="Social Commerce AVANA Terpercaya di Indonesia"
        />
        <meta
          property="og:description"
          content="AVANA dapat mengubah sosial media  Anda layaknya toko online yang dapat melakukan pembelian dan pembayaran langsung"
        />
        <meta property="og:image" content="/assets/images/meta-image.png" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://avana.id/" />
        <meta
          property="twitter:title"
          content="Social Commerce AVANA Terpercaya di Indonesia"
        />
        <meta
          property="twitter:description"
          content="AVANA dapat mengubah sosial media  Anda layaknya toko online yang dapat melakukan pembelian dan pembayaran langsung"
        />
        <meta
          property="twitter:image"
          content="/assets/images/meta-image.png"
        />
      </Head>

      <Navbar />

      <header>
        <h1 className="is-size-3">
          Satu dashboard untuk mengelola semua aktivitas penjualanmu di sosial
          media
        </h1>
        <p>Chat Multichannel • Auto Reply • Manajemen Reseller • Toko Online</p>
        <a
          href="https://store.avana.asia/"
          target="__blank"
          className="ava-btn btn-primary"
        >
          Coba Gratis
        </a>
        <div className="bg-hero" />
      </header>
      <main>
        <section className="feature">
          <div className="description">
            <h2 className="is-size-4">
              <span className="hl">Dashboard</span> pintar untuk mengelola
              aktivitas jualanmu di sosial media
            </h2>
            <p>
              Selain membuat Anda lebih produktif dashboard ini juga banyak
              fitur yang membantu Anda meningkatkan penjualan.
            </p>
            <ul>
              <li
                className={data.dashboard.current === 1 ? "active" : ""}
                onClick={() => handleSlider("dashboard", 1)}
              >
                Manajemen Order
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
                Otomatis Membalas Pesan & Komentar Pelanggan Anda
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
              src={require("public/assets/images/dashboard/manajemen-order.png")}
              alt=""
            />
            <img
              className={data.dashboard.current === 2 ? "active" : ""}
              src={require("public/assets/images/dashboard/manajemen-produk.png")}
              alt=""
            />
            <img
              className={data.dashboard.current === 3 ? "active" : ""}
              src={require("public/assets/images/dashboard/auto-reply.png")}
              alt=""
            />
          </div>
        </section>
        <section className="feature">
          <div className="description">
            <h2 className="is-size-4">
              <span className="hl">AVAChat</span> menghubungkan semua chat
              sosial media menjadi 1 dashboard
            </h2>
            <p>
              AVAChat juga mempunyai banyak fitur yang meningkatkan
              produktifitas Anda di berbagai saluran sosial media.
            </p>
            <ul>
              <li
                className={data.avachat.current === 1 ? "active" : ""}
                onClick={() => handleSlider("avachat", 1)}
              >
                Mengirim Informasi Produk & Invoice
              </li>
              <li
                className={data.avachat.current === 2 ? "active" : ""}
                onClick={() => handleSlider("avachat", 2)}
              >
                Quick Reply Untuk Membalas Pesan Lebih Cepat
              </li>
              <li
                className={data.avachat.current === 3 ? "active" : ""}
                onClick={() => handleSlider("avachat", 3)}
              >
                Mengirim Informasi & Status Terbaru Paket Pelanggan Anda
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
              src={require("public/assets/images/avachat/send-product-info.png")}
              alt=""
            />
            <img
              className={data.avachat.current === 2 ? "active" : ""}
              src={require("public/assets/images/avachat/quick-reply.png")}
              alt=""
            />
            <img
              className={data.avachat.current === 3 ? "active" : ""}
              src={require("public/assets/images/avachat/send-shipping-info.png")}
              alt=""
            />
          </div>
        </section>
        <section className="feature">
          <div className="description">
            <h2 className="is-size-4">
              Manajemen resellermu dengan fitur&nbsp;
              <span className="hl">Manajemen Reseller</span>
            </h2>
            <p>
              Manajemen Reseller salah satu fitur yang membantu Anda mengamati
              performa reseller secara realtime.
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
              src={require("public/assets/images/reseller/manajemen-database-reseller.png")}
              alt=""
            />
            <img
              className={data.reseller.current === 2 ? "active" : ""}
              src={require("public/assets/images/reseller/lihat-performa-reseller.png")}
              alt=""
            />
            <img
              className={data.reseller.current === 3 ? "active" : ""}
              src={require("public/assets/images/reseller/atur-komisi-reseller.png")}
              alt=""
            />
          </div>
        </section>
        <section className="feature">
          <div className="description">
            <h2 className="is-size-4">
              Miliki <span className="hl">Webstore</span> (toko online gratis)
              dan custom domain .com
            </h2>
            <p>
              Webstore (website toko online) kami mempunyai banyak fitur yang
              sangat membantu calon customermu melakukan transaksi.
            </p>
            <ul>
              <li
                className={data.webstore.current === 1 ? "active" : ""}
                onClick={() => handleSlider("webstore", 1)}
              >
                Mendukung Berbagai Metode Pembayaran
              </li>
              <li
                className={data.webstore.current === 2 ? "active" : ""}
                onClick={() => handleSlider("webstore", 2)}
              >
                Tema (Pembaruan Gratis)
              </li>
              <li
                className={data.webstore.current === 3 ? "active" : ""}
                onClick={() => handleSlider("webstore", 3)}
              >
                Order Melalui Whatsapp
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
              src={require("public/assets/images/webstore/payment-gateway.png")}
              alt=""
            />
            <img
              className={data.webstore.current === 2 ? "active" : ""}
              src={require("public/assets/images/webstore/theme.png")}
              alt=""
            />
            <img
              className={data.webstore.current === 3 ? "active" : ""}
              src={require("public/assets/images/webstore/order-via-whatsapp.png")}
              alt=""
            />
          </div>
        </section>
        <section className="feature">
          <div className="description">
            <h2 className="is-size-4">
              Miliki <span className="hl">Facebook Store</span> hebat
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
              src={require("public/assets/images/facebook-store.png")}
              className="active"
              alt=""
            />
          </div>
        </section>
        <section id="support">
          <h2 className="is-size-4">
            Didukung oleh berbagai macam metode pengiriman & pembayaran
          </h2>
          <div>
            <img src={require("public/assets/images/courier.png")} alt="" />
            <div className="border" />
            <img src={require("public/assets/images/bank.png")} alt="" />
          </div>
        </section>
        <section id="testimonial">
          <h2 className="is-size-4">
            Apa kata mereka yang sudah bergabung dengan AVANA?
          </h2>
          <q>
            Toko online itu bukan hanya sekedar wadah untuk memasarkan barang
            tapi sebagai alat untuk membangun brand juga. Bersama AVANA, saya
            bisa memperkenalkan dan membesarkan nama Amity.
          </q>
          <span className="name">Amity Indonesia</span>
          <img
            src={require("public/assets/images/testimonial/amity.png")}
            alt=""
          />
        </section>
        <section id="trial">
          <h2 className="is-size-4">Mulai uji coba gratis 14 hari Anda</h2>
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
