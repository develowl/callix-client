'use client';

import { Container, createTheme } from '@mantine/core';
import { Electrolize } from 'next/font/google';

const electrolize = Electrolize({ subsets: ['latin'], weight: '400' });

export const theme = createTheme({
  fontFamily: electrolize.style.fontFamily,
  defaultRadius: 'sm',
  components: {
    Container: Container.extend({ defaultProps: { size: 'xl' } }),
  },
});
