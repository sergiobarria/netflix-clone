import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='preload'
            href='/fonts/netflix-sans/NetflixSans-Light.ttf'
            as='font'
            crossOrigin='true'
          />
          <link
            rel='preload'
            href='/fonts/netflix-sans/NetflixSans-Regular.ttf'
            as='font'
            crossOrigin='true'
          />
          <link
            rel='preload'
            href='/fonts/netflix-sans/NetflixSans-Bold.ttf'
            as='font'
            crossOrigin='true'
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
