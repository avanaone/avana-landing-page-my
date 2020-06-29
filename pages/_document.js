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
              $zopim(function() {
                $zopim.livechat.setLanguage('ms');
                });
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
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
