'use client';
import React from 'react';
import { GradientText } from './GradientText';

interface HeroProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

export function Hero({ title, subtitle, children }: HeroProps) {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center py-24">
      <div className="text-center max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <GradientText>{title}</GradientText>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-12">
          {subtitle}
        </p>
        {children}
      </div>
    </div>
  );
}
