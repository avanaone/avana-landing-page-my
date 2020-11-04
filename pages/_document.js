import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="id">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:700,800|Nunito:400,700,800|Material+Icons&display=swap"
            rel="stylesheet"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T54DKZ6');
          `,
            }}
          />
          <script
            async=""
            charSet="utf-8"
            src="https://cdn.zopim.com/?119GyjFZxz8YGSLmizOWVzpwS1HT3EEk"
            type="text/javascript"
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
            async=""
            src="https://www.google-analytics.com/analytics.js"
          ></script>
          <script
            type="text/javascript"
            async=""
            id="inspsync"
            src="https://cdn.inspectlet.com/inspectlet.js"
          ></script>
          <script
            src="https://connect.facebook.net/signals/config/1217836451583731?v=2.8.12&amp;r=stable"
            async=""
          ></script>
          <script
            async=""
            src="https://connect.facebook.net/en_US/fbevents.js"
          ></script>
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T54DKZ6" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`,
            }}
          />
          {/* <section id="banner-promo">
            <a
              href="http://app.avana.asia/?utm_source=websitebanner&utm_medium=website&utm_campaign=womenempowerment"
              target="_blank"
            >
              Celebrating all female entrepreneurs this month.{" "}
              <strong>Discount 10% OFF</strong> AVANA Yearly Business Plan.{" "}
              <strong>Subscribe Today. Promo Code:</strong>{" "}
              <strong style={{ color: `red` }}>LADYBOSS</strong>
            </a>
          </section> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
