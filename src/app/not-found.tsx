'use client';
import React from 'react';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0F1729]">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">404 - Page Not Found</h1>
        <p className="mt-4 text-gray-400">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
      </div>
    </main>
  );
}
