import Head from "next/head";

import "./styles.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        {/* Primary Meta Tags */}
        <title>AVANA | Social Commerce AVANA Terpercaya di Indonesia </title>
        <link rel="canonical" href="https://avana.id" />
        <meta
          name="title"
          content="Social Commerce AVANA Terpercaya di Indonesia"
        />
        <meta
          name="description"
          content="AVANA dapat mengubah media sosial Anda layaknya toko online yang dapat melakukan pembelian dan pembayaran langsung"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://avana.id" />
        <meta
          property="og:title"
          content="Social Commerce AVANA Terpercaya di Indonesia"
        />
        <meta
          property="og:description"
          content="AVANA dapat mengubah media sosial Anda layaknya toko online yang dapat melakukan pembelian dan pembayaran langsung"
        />
        <meta property="og:image" content="/assets/images/meta-image.png" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://avana.id" />
        <meta
          property="twitter:title"
          content="Social Commerce AVANA Terpercaya di Indonesia"
        />
        <meta
          property="twitter:description"
          content="AVANA dapat mengubah media sosial Anda layaknya toko online yang dapat melakukan pembelian dan pembayaran langsung"
        />
        <meta
          property="twitter:image"
          content="/assets/images/meta-image.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/images/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/images/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/images/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/images/favicons/manifest.json" />
        <link
          rel="mask-icon"
          href="/assets/images/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta httpEquiv="cache-control" content="no-cache" />
        <meta httpEquiv="expires" content="0" />
        <meta httpEquiv="pragma" content="no-cache" />
        <meta httpEquiv="refresh" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
