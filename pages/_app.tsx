import '@mantine/carousel/styles.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { theme } from '../theme';

import { GoogleAnalytics } from 'nextjs-google-analytics';
import { useEffect } from 'react';
import { hotjar } from 'react-hotjar';

import TagManager from 'react-gtm-module';
const tagManagerArgs = {
  gtmId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!,
};

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hotjar.initialize(3691836, 1);
    TagManager.initialize(tagManagerArgs);
  });

  return (
    <MantineProvider defaultColorScheme={'dark'} theme={theme}>
      <Head>
        <title>Mantine Template</title>
        <meta
          name={'viewport'}
          content={'minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'}
        />
        <link rel={'shortcut icon'} href={'/favicon.ico'} />
        <Script
          src={`https://www.googleoptimize.com/optimize.js?id=${process.env.NEXT_PUBLIC_OPTIMIZE_ID}`}
        />
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        />
      </Head>
      <GoogleAnalytics trackPageViews gaMeasurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      <Component {...pageProps} />
    </MantineProvider>
  );
}
