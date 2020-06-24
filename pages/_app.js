import { useEffect } from 'react';
import Head from 'next/head';

import './styles.scss';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    localStorage.setItem('lang', localStorage.lang ? localStorage.lang : 'en');
  }, []);
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
        {/* Primary Meta Tags */}
        <title>
          AVANA - The best social commerce solution for your business
        </title>
        <meta
          name='title'
          content='AVANA - The best social commerce solution for your business'
        />
        <meta
          name='description'
          content='Our commerce platform helps automate your business so that you can make money with ease'
        />
        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://avana.id/' />
        <meta
          property='og:title'
          content='AVANA - The best social commerce solution for your business'
        />
        <meta
          property='og:description'
          content='Our commerce platform helps automate your business so that you can make money with ease'
        />
        <meta property='og:image' content='/assets/images/meta-image.png' />
        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://avana.id/' />
        <meta
          property='twitter:title'
          content='AVANA - The best social commerce solution for your business'
        />
        <meta
          property='twitter:description'
          content='Our commerce platform helps automate your business so that you can make money with ease'
        />
        <meta
          property='twitter:image'
          content='/assets/images/meta-image.png'
        />
        <meta
          property='twitter:image'
          content='/assets/images/meta-image.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/assets/images/favicons/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/assets/images/favicons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/assets/images/favicons/favicon-16x16.png'
        />
        <link rel='manifest' href='/assets/images/favicons/manifest.json' />
        <link
          rel='mask-icon'
          href='/assets/images/favicons/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta httpEquiv='cache-control' content='max-age=2592000' />
        <meta httpEquiv='expires' content='0' />
        <meta httpEquiv='pragma' content='no-cache' />
        <meta httpEquiv='refresh' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/bulma/0.8.2/css/bulma.min.css'
          async
        />
        <link
          rel='preconnect'
          href='https://www.google-analytics.com'
          as='script'
          crossOrigin='anonymous'
        />
        <link
          rel='preconnect'
          href='https://static.doubleclick.net'
          as='script'
        />
        <link
          rel='preconnect'
          href='https://googleads.g.doubleclick.net'
          as='script'
          crossOrigin='anonymous'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
