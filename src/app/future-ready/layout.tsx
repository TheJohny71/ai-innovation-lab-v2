import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Future Ready | Innovation Platform',
  description: 'Preparing for the future of legal practice',
};

export const viewport: Viewport = {
  themeColor: '#0F172A',
};

export default function FutureReadyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
