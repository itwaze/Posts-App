import Document, { Html, Head, Main, NextScript } from "next/document";
import theme from "../../theme/theme";
import { NextPageContext } from 'next'
import { RenderPage } from "next/dist/next-server/lib/utils";

interface Context extends NextPageContext {
  renderPage: RenderPage
}

class MyDocument extends Document {
  static async getInitialProps(ctx: Context) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
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
