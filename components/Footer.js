export default function Footer() {
  return (
    <footer>
      <div className="meta">
        <img src="/assets/images/logo.webp" alt="AVANA logo" />
        <p>
          AVANA merupakan platform social commerce untuk membantu penjualan
          online melalui website dan sosial media.
        </p>
        <span>
          Call Center :<br />
          +62 22 2050 9731
        </span>
        <span>Indonesia • Singapore • Malaysia</span>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/avanaindonesia/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="AVANA Facebook Page"
          >
            <img src="/assets/images/footer/facebook-f-brands.svg" alt="" />
          </a>
          <a
            href="https://twitter.com/avana_id"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="AVANA Twitter"
          >
            <img src="/assets/images/footer/twitter-brands.svg" alt="" />
          </a>
          <a
            href="https://www.instagram.com/avana.id/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="AVANA Instagram"
          >
            <img src="/assets/images/footer/instagram-brands.svg" alt="" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCHsdeDF8cJl7C4GzoxPRk0A"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="AVANA Youtube"
          >
            <img src="/assets/images/footer/youtube-brands.svg" alt="" />
          </a>
        </div>
      </div>
      <div>
        <h6>Avana</h6>
        <ul>
          <li>
            <a href="/about-us">Tentang Kami</a>
          </li>
          <li>
            <a href="https://academy.avana.id/">Akademi</a>
          </li>
          <li>
            <a href="https://blog.avana.id/">Blog</a>
          </li>
          <li>
            <a href="https://avana.id/career/">Karir</a>
          </li>
          <li>
            <a>Media</a>
          </li>
          <li>
            <a href="https://avana.id/contact/">Kontak Kami</a>
          </li>
          <li>
            <a href="https://avana.id/wp-content/uploads/2018/05/AVANA-Privacy-Policy.pdf">
              Privasi dan Kebijakan
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h6>Fitur Utama</h6>
        <ul>
          {/* <li>
            <a>Facebook Store</a>
          </li> */}
          <li>
            <a href="https://avana.id/features-auto-reply/?lang=id">
              Facebook Auto Reply
            </a>
          </li>
          <li>
            <a href="https://avana.id/features-messenger/?lang=id">
              Messenger Store
            </a>
          </li>
          <li>
            <a href="/webstore">Webstore</a>
          </li>
          {/* <li>
            <a>Reporting Tools</a>
          </li>
          <li>
            <a>Facebook Ads</a>
          </li> */}
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/avachat">Avachat</a>
          </li>
          <li>
            <a href="/reseller">Manajemen Reseller</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
