'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { AIProvider } from './providers/AIProvider';
import useBrowserLanguage from './hooks/useBrowserLanguage';

const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const language = useBrowserLanguage();
  return (
    <html lang={language.split('-')[0]}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>TRADUCE IA 🌍</title>
        <meta name="description" content="Tu traductor de confianza 🌍" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <link rel="preload" href="/banner.jpg" as="image" />
      </head>
      <body className={inter.className}>
        <AIProvider>{children}</AIProvider>
        <Toaster />
      </body>
    </html>
  );
}
