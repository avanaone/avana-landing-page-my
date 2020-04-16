export default function Footer() {
  return (
    <footer>
      <div>
        <img
          src={require("../public/assets/images/logo.png")}
          alt="AVANA logo"
        />
        <p>
          Avana adalah Platform Social Commerce pertama di Indonesia yang
          membantu pebisnis berjualan online
        </p>
        <span>
          Call Center :<br />
          +62 22 2050 9731
        </span>
        <span>Indonesia • Singapore • Malaysia</span>
        <div className="footer-icons">
          <div>
            <a href="https://web.facebook.com/avanaindonesia/" target="_blank">
              {" "}
              <img
                src={require("../public/assets/images/footer/facebook-f-brands.svg")}
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/avana_id" target="_blank">
              <img
                src={require("../public/assets/images/footer/twitter-brands.svg")}
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/avana.id/" target="_blank">
              <img
                src={require("../public/assets/images/footer/instagram-brands.svg")}
                alt=""
              />
            </a>
          </div>
          <div>
            <a
              href="https://www.youtube.com/channel/UCHsdeDF8cJl7C4GzoxPRk0A"
              target="_blank"
            >
              <img
                src={require("../public/assets/images/footer/youtube-brands.svg")}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div>
        <span>Avana</span>
        <div>
          <a href="/about-us">Tentang Kami</a>
          <a href="https://academy.avana.id/">Akademi</a>
          <a href="https://blog.avana.id/">Blog</a>
          <a href="https://avana.id/career/">Karir</a>
          <a>Media</a>
          <a href="https://avana.id/contact/">Kontak Kami</a>
          <a href="https://avana.id/wp-content/uploads/2018/05/AVANA-Privacy-Policy.pdf">
            Privasi dan Kebijakan
          </a>
        </div>
      </div>
      <div>
        <span>Berjualan dengan mudah</span>
        <div>
          {/* <a>Facebook Store</a> */}
          <a href="https://avana.id/features-auto-reply/?lang=id">
            Facebook Auto Reply
          </a>
          <a href="https://avana.id/features-messenger/?lang=id">
            Messenger Store
          </a>
          <a href="/webstore">Webstore</a>
          {/* <a>Reporting Tools</a>
          <a>Facebook Ads</a> */}
          <a href="/dashboard">Dashboard</a>
          <a href="/avachat">Avachat</a>
          <a href="/reseller">Manajemen Reseller</a>
        </div>
      </div>
    </footer>
  );
}
