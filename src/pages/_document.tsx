import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const redirect = sessionStorage.redirect;
                delete sessionStorage.redirect;
                if (redirect && redirect !== location.href) {
                  history.replaceState(null, '', redirect);
                }
              })();
            `
          }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument