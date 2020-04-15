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
              Kami membantu Anda untuk meningkatkan bisnis Anda
            </h2>
            <p>
              Kami memulai dari bawah dengan tujuan untuk memberdayakan bisnis
              dengan teknologi inovatif. Kami akan terus menjaga tujuan ini
              sebagai fokus kami karena kami ingin terus berkembang bersama
              Anda.
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
          src={require("public/assets/images/about-us/channels.png")}
          alt="Channels"
          className="channels"
        />
      </section>
      <section id="section-2">
        <img
          src={require("public/assets/images/about-us/team.png")}
          alt="AVANA Team"
        />
      </section>
    </main>
    <Footer />
  </div>
);

export default AboutUs;
