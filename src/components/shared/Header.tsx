import React from 'react';
import { Container } from './Container';
import Link from 'next/link';
import { GradientText } from './GradientText';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  const currentDate = new Date('2024-12-31T21:53:46Z');
  const currentUser = 'TheJohny71';

  const links = [
    { href: '/ai-innovation-lab-v2/', label: 'Welcome' },
    { href: '/ai-innovation-lab-v2/solutions', label: 'Solutions' },
    { href: '/ai-innovation-lab-v2/disruption', label: 'Disruption' },
    { href: '/ai-innovation-lab-v2/mindset', label: 'Mindset' },
    { href: '/ai-innovation-lab-v2/future-ready', label: 'Future-Ready' },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/ai-innovation-lab-v2/" className="text-xl font-bold">
              <GradientText>AI Innovation Lab</GradientText>
            </Link>
          </div>
          <nav className="flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-white'
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>{currentUser}</span>
            <span>|</span>
            <span>
              {currentDate.toLocaleString('en-US', {
                timeZone: 'UTC',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                timeZoneName: 'short',
              })}
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
}
