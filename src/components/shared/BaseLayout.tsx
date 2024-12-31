import React from 'react';
import { Header } from './Header';

export function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0F1729] text-white">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03)_0%,rgba(0,0,0,0)_50%)]" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.01)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="relative pt-16">{children}</main>
    </div>
  );
}
