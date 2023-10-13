import '@mantine/carousel/styles.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { theme } from '../theme';

import getConfig from 'next/config';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import { useEffect } from 'react';
import { hotjar } from 'react-hotjar';

const { publicRuntimeConfig } = getConfig();

import TagManager from 'react-gtm-module';
const tagManagerArgs = {
  gtmId: publicRuntimeConfig.NEXT_PUBLIC_GA_MEASUREMENT_ID!,
};

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hotjar.initialize(3691836, 1);
    TagManager.initialize(tagManagerArgs);
  });

  return (
    <MantineProvider defaultColorScheme={'dark'} theme={theme}>
      <Head>
        <title>Launches - Callix Client</title>
        <meta
          name={'viewport'}
          content={'minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'}
        />
        <link rel={'shortcut icon'} href={'/favicon.ico'} />
        <script
          async
          src={`https://www.googleoptimize.com/optimize.js?id=${publicRuntimeConfig.NEXT_PUBLIC_OPTIMIZE_ID}`}
        ></script>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${publicRuntimeConfig.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        ></script>
      </Head>
      <GoogleAnalytics
        trackPageViews
        gaMeasurementId={publicRuntimeConfig.NEXT_PUBLIC_GA_MEASUREMENT_ID}
      />
      <Component {...pageProps} />
    </MantineProvider>
  );
}
