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
          <section
            style={{
              padding: `1rem 2rem`,
              backgroundColor: `#feb612`,
              color: `#222`,
              textAlign: `center`,
              position: `sticky`,
              top: `0`,
              zIndex: `999`,
            }}
          >
            <a href='/price'>
              8.8 FLASH SALES! 30% off Yearly Business Plan and RM88 AVACredit.
              Use code <strong style={{ color: `red` }}>AVANA88</strong>. Only
              available on Aug 08.
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
