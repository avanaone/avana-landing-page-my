import Head from "next/head";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { LinkButton } from "../components/Button";

import styles from "./scss/AboutUs.module.scss";

const AboutUs = () => (
  <div className={styles.AboutUs}>
    <Head>
      <title>Tentang Kami • AVANA</title>
    </Head>
    <Navbar />
    <main>
      <section id="section-1">
        <div>
          <div>
            <h2 className="is-size-4">
              AVANA membantu untuk meningkatkan bisnis Anda!
            </h2>
            <p>
              AVANA adalah platform social commerce untuk mendukung para pelaku
              bisnis dengan mengoptimalkan penjualan melalui Website, Facebook,
              Instagram, dan WhatsApp, LINE, hingga Telegram.
            </p>
            <p>
              Dengan menggunakan inovasi teknologi terbaru dan sistem yang
              terintegrasi dengan media sosial, AVANA telah membantu lebih dari
              70.000 pelaku usaha yang ingin mengoptimalkan brand dan
              mengotomatisasi kan kemampuan bisnis secara online.
            </p>
          </div>
          <iframe
            src="https://www.youtube.com/embed/vM4i-LC_8Hw"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <img
          src={require("../public/assets/images/about-us/channels.png?resize?webp")}
          alt="Channels"
          className="channels"
        />
      </section>
      <section id="section-2">
        <div>
          <h2 className="is-size-4">Berkarir dengan AVANA</h2>
          <p>
            Saatnya untuk bergabung bersama kami dan tunjukkan kemampuan Anda.
          </p>
          <LinkButton
            href="https://www.techinasia.com/jobs/search?query=avana%20in&country_name[]=Indonesia"
            target="__blank"
            className="ava-btn btn-primary"
            title="Daftar"
            rel="noopener noreferrer"
          >
            Lowongan Kerja
          </LinkButton>
        </div>
        <img
          src={require("../public/assets/images/about-us/team.png?resize?webp")}
          alt="AVANA Team"
        />
      </section>
    </main>
    <Footer />
  </div>
);

export default AboutUs;
