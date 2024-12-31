'use client';
import React from 'react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="absolute top-0 w-full z-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link 
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent"
          >
            AI Innovation Law
          </Link>

          {/* Contact Button */}
          <a
            href="mailto:contact@aiinnovationlaw.com"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-teal-400/10 border border-blue-500/20 hover:border-blue-400/40 text-white/90 hover:text-white transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
