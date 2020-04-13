import styles from "./scss/AboutUs.module.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => (
  <div className={styles.AboutUs}>
    <Navbar />
    <main>
      <section>
        <div>
          <div>
            <h2 className="is-size-3">
              Kami membantu Anda untuk meningkatkan bisnis Anda
            </h2>
            <p>
              Kami memulai dari bawah dengan tujuan untuk memberdayakan bisnis
              dengan teknologi inovatif dan kami akan terus menjaga tujuan ini
              sebagai fokus kami karena kami ingin terus berkembang bersama
              Anda.
            </p>
          </div>
          <img src="/assets/images/about-us/thumbnail.png" alt="" />
        </div>
        <img
          src="/assets/images/about-us/channels.png"
          alt=""
          className="channels"
        />
      </section>
      <section>
        <img src="/assets/images/about-us/team.png" alt="" />
      </section>
    </main>
    <Footer />
  </div>
);

export default AboutUs;
