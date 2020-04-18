import Head from "next/head";

import styles from "./scss/AboutUs.module.scss";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
              AVANA membantu untuk meningkatkan bisnis Anda
            </h2>
            <p style={{ marginTop: "10px" }}>
              Dengan menggunakan inovasi teknologi terbaru dan sistem yang
              terintegrasi dengan media sosial, AVANA telah membantu lebih dari
              70.000 pelaku usaha yang ingin mengoptimalkan brand dan
              mengotomatisasi kan kemampuan bisnis secara online.<br></br>
              <br></br> Saat ini AVANA tersebar di Malaysia, Singapore dan
              Indonesia.
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
          src={require("../public/assets/images/about-us/channels.png")}
          alt="Channels"
          className="channels"
        />
      </section>
      <section id="section-2">
        <div className="about-us-Text">
          <h2 className="is-size-4">Berkarir dengan AVANA</h2>
          <p>
            Saatnya untuk bergabung bersama kami dan tunjukkan kemampuan Anda.
          </p>
          <a
            href="https://avana.id/available-roles/?lang=id"
            target="__blank"
            className="ava-btn btn-primary"
            title="Daftar"
          >
            Lowongan Kerja
          </a>
        </div>
        <img
          src={require("../public/assets/images/about-us/team.png")}
          alt="AVANA Team"
        />
      </section>
    </main>
    <Footer />
  </div>
);

export default AboutUs;
