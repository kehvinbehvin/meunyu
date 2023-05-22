/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

import defaultSEOConfig from '../../next-seo.config';
import { Chakra } from '~/lib/components/Chakra';
import { ReelsContextProvider } from '~/lib/contexts/ReelsContext';
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
      </Head>
      <DefaultSeo {...defaultSEOConfig} />
      <Layout>
        <ReelsContextProvider>
          <Component {...pageProps} />
        </ReelsContextProvider>
      </Layout>
    </Chakra>
  );
};

export default MyApp;
