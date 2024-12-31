'use client';
import React from 'react';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
      <div 
        className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-gray-900"
        style={{ 
          background: 'radial-gradient(circle at center, transparent 0%, black 100%)'
        }} 
      />
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-500/10 to-transparent blur-3xl" />
    </div>
  );
}
