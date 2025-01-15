import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { BaseLayout } from '@/components/shared/BaseLayout';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'AI Innovation Lab',
  description: 'Experience the future of AI innovation',
  icons: {
    icon: '/favicon.ico',
  },
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="antialiased">
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
