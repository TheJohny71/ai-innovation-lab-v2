'use client';
import React from 'react';

interface PageHeadingProps {
  title: string;
  subtitle?: string;
}

export function PageHeading({ title, subtitle }: PageHeadingProps) {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-gray-400 text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
