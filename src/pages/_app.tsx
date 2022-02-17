import React from 'react';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ModalProvider } from '@/context/modal.context';

import '@/styles/globals.css';
import { AuthContextProvider } from '@/context/auth.context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Netflix - Watch Tv Shows Online, Watch Movies Online</title>
        <link href='/static/favicon.ico' rel='shortcut icon' />
      </Head>
      <AuthContextProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
