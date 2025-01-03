import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Innovation Lab V2',
  description: 'Next generation AI innovation laboratory and experimental platform',
  keywords: 'AI, innovation, laboratory, experiments, research',
  authors: [{ name: 'TheJohny71', url: 'https://github.com/TheJohny71' }],
  creator: 'TheJohny71',
  metadataBase: new URL('https://ai-innovation-lab-v2.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ai-innovation-lab-v2.vercel.app',
    title: 'AI Innovation Lab V2',
    description: 'Next generation AI innovation laboratory and experimental platform',
    siteName: 'AI Innovation Lab V2',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Innovation Lab V2',
    description: 'Next generation AI innovation laboratory and experimental platform',
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