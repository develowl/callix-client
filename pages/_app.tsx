import '@mantine/carousel/styles.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { theme } from '../theme';

import Hotjar from '@hotjar/browser';

const siteId = 3691836;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider defaultColorScheme={'dark'} theme={theme}>
      <Head>
        <title>Mantine Template</title>
        <meta
          name={'viewport'}
          content={'minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'}
        />
        <link rel={'shortcut icon'} href={'/favicon.ico'} />
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
