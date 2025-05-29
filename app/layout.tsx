import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';

import '@/styles/globals.css';

import { StyledComponentsRegistry } from '@/lib/styled-components';
import { theme } from '@/lib/mui';

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Time Counter',
  description: 'Time Counter created by IT Pulse Mikołaj Pęcak',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={geist.className}>
        <StyledComponentsRegistry>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <NextIntlClientProvider>
                {children}
              </NextIntlClientProvider>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
