import type { AppProps } from 'next/app';
import Head from 'next/head';

import 'normalize.css/normalize.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Netflix - Watch Tv Shows Online, Watch Movies Online</title>
        <link href='/static/favicon.ico' rel='shortcut icon' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
