import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'AI Acceleration | Solutions',
  description: 'Explore our AI-enabled solutions for legal innovation',
};

export const viewport: Viewport = {
  themeColor: '#0F172A',
};

export default function AccelerateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
