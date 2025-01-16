import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Cultural Mindset Change | Innovation Platform',
  description: 'Transform organizational culture for AI innovation',
};

export const viewport: Viewport = {
  themeColor: '#0F172A',
};

export default function MindsetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
