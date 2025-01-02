'use client';
import React from 'react';

export default function Error() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0F1729]">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">An error occurred</h1>
        <p className="mt-4 text-gray-400">Please try again later.</p>
      </div>
    </main>
  );
}