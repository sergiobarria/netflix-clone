import React from 'react';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';

import 'normalize.css/normalize.css';
import '../styles/globals.scss';
import { magic } from '../lib/magicClient';
import Loader from '../components/Loader';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState<boolean>(false);

  const router = useRouter();

  React.useEffect(() => {
    const handleComplete = () => {
      setLoading(false);
    };
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
      <Head>
        <title>Netflix - Watch Tv Shows Online, Watch Movies Online</title>
        <link href='/static/favicon.ico' rel='shortcut icon' />
      </Head>
      {loading ? <Loader /> : <Component {...pageProps} />}
    </>
  );
}

export default MyApp;
