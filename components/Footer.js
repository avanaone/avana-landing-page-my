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
          <Link href="/about-us">
            <a>About Us</a>
          </Link>
          <Link href="/academy">
            <a>Academy</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link href="/careers">
            <a>Careers</a>
          </Link>
          <Link href="/media">
            <a>Media</a>
          </Link>
          <Link href="/contact-us">
            <a>Contact us</a>
          </Link>
          <Link href="/privacy-policy">
            <a>Privacy Policy</a>
          </Link>
        </div>
      </div>
      <div>
        <span>Sell Online Easily</span>
        <div>
          <Link href="/facebook-store">
            <a>Facebook Store</a>
          </Link>
          <Link href="/facebook-auto-reply">
            <a>Facebook Autor Reply</a>
          </Link>
          <Link href="/messenger-store">
            <a>Messenger Store</a>
          </Link>
          <Link href="/webstore">
            <a>Webstore</a>
          </Link>
          <Link href="/reporting-tools">
            <a>Reporting Tools</a>
          </Link>
          <Link href="/facebook-ads">
            <a>Facebook Ads</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
