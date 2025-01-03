// layout.tsx
import React from 'react';
import { BaseLayout } from '../components/shared/BaseLayout';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata = {
  title: 'AI Innovation Lab V2',
  description: 'Next generation AI innovation laboratory and experimental platform',
  keywords: 'AI, innovation, laboratory, experiments, research',
  authors: [{ name: 'TheJohny71', url: 'https://github.com/TheJohny71' }],
  creator: 'TheJohny71',
  metadataBase: 'https://ai-innovation-lab-v2.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ai-innovation-lab-v2.vercel.app',
    title: 'AI Innovation Lab V2',
    description:
      'Next generation AI innovation laboratory and experimental platform',
    siteName: 'AI Innovation Lab V2',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Innovation Lab V2',
    description:
      'Next generation AI innovation laboratory and experimental platform',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}

// metadata.ts
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Innovation Law',
  description:
    'AI Powered Legal Innovation - Accelerating Disruption Through Cultural Mindset Change',
  keywords:
    'AI, legal innovation, legal tech, law firm innovation, legal disruption',
  authors: [{ name: 'TheJohny71', url: 'https://github.com/TheJohny71' }],
  creator: 'TheJohny71',
  metadataBase: new URL('https://ai-innovation-lab-v2.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ai-innovation-lab-v2.vercel.app',
    title: 'AI Innovation Law',
    description:
      'AI Powered Legal Innovation - Accelerating Disruption Through Cultural Mindset Change',
    siteName: 'AI Innovation Law',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Innovation Law',
    description:
      'AI Powered Legal Innovation - Accelerating Disruption Through Cultural Mindset Change',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
