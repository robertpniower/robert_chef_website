// src/app/[locale]/layout.tsx
import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const instant = false;

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  // Await the params promise in Next.js 15/16
  const { locale } = await params;

  // Fetch locale messages on the server
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className="min-h-screen bg-stone-50 font-sans antialiased text-stone-900">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NavBar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
