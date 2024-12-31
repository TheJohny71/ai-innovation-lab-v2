'use client';
import Link from 'next/link';

interface NavigationItem {
  text: string;
  href: string;
  current: boolean;
}

export function Navigation({ items }: { items: NavigationItem[] }) {
  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 backdrop-blur-md bg-gray-900/30 p-2 rounded-2xl border border-gray-700/20 shadow-xl">
      <div className="flex gap-8">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`relative px-8 py-2.5 transition-all duration-300 ${
              item.current
                ? 'text-white bg-gradient-to-br from-purple-500/20 to-blue-500/5 shadow-lg border border-blue-400/20'
                : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
            }`}
          >
            {item.text}
          </Link>
        ))}
      </div>
    </nav>
  );
}
