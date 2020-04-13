import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div>
        <img src="/assets/images/logo.png" alt="" />
        <p>
          Avana adalah Platform Social Commerce pertama di Indonesia yang
          membantu pebisnis berjualan online
        </p>
      </div>
      <div>
        <span>Our Company</span>
        <div>
          <a href="/about-us">About Us</a>
          <a>Academy</a>
          <a>Blog</a>
          <a>Careers</a>
          <a>Media</a>
          <a>Contact us</a>
          <a>Privacy Policy</a>
        </div>
      </div>
      <div>
        <span>Sell Online Easily</span>
        <div>
          <a>Facebook Store</a>
          <a>Facebook Autor Reply</a>
          <a>Messenger Store</a>
          <a>Webstore</a>
          <a>Reporting Tools</a>
          <a>Facebook Ads</a>
        </div>
      </div>
    </footer>
  );
}
