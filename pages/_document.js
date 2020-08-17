import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='id'>
        <Head>
          <script
            async=''
            charset='utf-8'
            src='https://cdn.zopim.com/?119GyjFZxz8YGSLmizOWVzpwS1HT3EEk'
            type='text/javascript'
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              var waitForZopim = setInterval(function () {
                if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
                    return;
                }
                $zopim(function() {
                  if(localStorage.getItem("lang") === 'en') {
                    $zopim.livechat.setLanguage('en');
                  } else {
                    $zopim.livechat.setLanguage('ms');
                  }
                });
                clearInterval(waitForZopim);
              }, 100);

              if( window.location.search.indexOf("utm_source") > 0 && window.location.search.indexOf("utm_campaign") > 0 ) { 
                localStorage.setItem("utm_avana", window.location.search); 
              }
              `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:972310,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
              `,
            }}
          />
          <script
            async=''
            src='https://www.google-analytics.com/analytics.js'
          ></script>
          <script
            type='text/javascript'
            async=''
            id='inspsync'
            src='https://cdn.inspectlet.com/inspectlet.js'
          ></script>
          <script
            src='https://connect.facebook.net/signals/config/1217836451583731?v=2.8.12&amp;r=stable'
            async=''
          ></script>
          <script
            async=''
            src='https://connect.facebook.net/en_US/fbevents.js'
          ></script>
        </Head>
        <body>
          <section id='banner-promo'>
            <a href='/price'>
              [MERDEKA PROMO] Save 33% on Yearly Business Plan. Use code{' '}
              <strong style={{ color: `red` }}>MERDEKA33</strong>. Valid from
              Aug 15 -31.
            </a>
          </section>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
