'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ImplementationBarProps {
  name: string;
  value: number;
  maxValue?: number;
  className?: string;
}

export function ImplementationBar({
  name,
  value,
  maxValue = 14,
  className,
}: ImplementationBarProps) {
  const width = `${(value / maxValue) * 100}%`;
  
  return (
    <div className={cn('mb-4', className)}>
      <div className="mb-2 flex justify-between">
        <span className="text-sm text-gray-300">{name}</span>
        <span className="text-sm text-gray-400">{value}</span>
      </div>
      <div className="h-2 w-full rounded-full bg-gray-800/50 backdrop-blur-sm">
        <div
          className="h-full rounded-full bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-500"
          style={{ width }}
        />
      </div>
    </div>
  );
}
