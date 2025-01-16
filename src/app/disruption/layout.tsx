import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'AI Disruption Index | Legal Innovation Metrics',
  description: 'Track and analyze AI innovation trends in global law firms',
};

export const viewport: Viewport = {
  themeColor: '#0F172A',
};

export default function DisruptionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
