'use client';
import React from 'react';
import Link from 'next/link';
import { Container } from './Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-gray-800">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400">
            © {currentYear} AI Innovation Lab. All rights reserved.
          </div>
          <div className="flex gap-8">
            <Link 
              href="/privacy" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
