/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

import defaultSEOConfig from '../../next-seo.config';
import { Chakra } from '~/lib/components/Chakra';
import { AppContextProvider } from '~/lib/contexts/AppContext';
import { FeedContextProvider } from '~/lib/contexts/FeedContext';
import Layout from '~/lib/layout';

import '~/lib/styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Chakra>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta name="theme-color" content="#CACAB4" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </Head>
      <DefaultSeo {...defaultSEOConfig} />
      <AppContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContextProvider>
    </Chakra>
  );
};

export default MyApp;
