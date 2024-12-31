'use client';
import React from 'react';
import { Button } from '../shared/Button';
import { Container } from '../shared/Container';
import { GradientText } from '../shared/GradientText';

export function Hero() {
  return (
    <Container className="pt-32 pb-24 text-center">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
        Build Your Next Project with{' '}
        <GradientText>Modern Stack</GradientText>
      </h1>
      
      <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-8">
        A powerful and flexible template for modern web applications.
        Built with Next.js, TypeScript, and Tailwind CSS.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg">
          Get Started
        </Button>
        <Button size="lg" variant="outline">
          Learn More
        </Button>
      </div>
      
      {/* Optional: Add a styled background or hero image here */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-gray-900/90 to-gray-900/80" />
      </div>
    </Container>
  );
}
