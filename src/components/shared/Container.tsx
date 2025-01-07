'use client';

import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

// ✅ TypeScript Interface for Props
interface ContainerProps {
  children: ReactNode; // Specifically ReactNode for proper typing of children
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

// ✅ Map for Tailwind max-width utilities
const maxWidthClasses = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-full',
};

// ✅ Functional Component with Proper Prop Handling
export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  maxWidth = 'xl',
}) => {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        maxWidthClasses[maxWidth],
        className
      )}
    >
      {/* ✅ Ensures Proper Handling of Single/Multiple Children */}
      {children}
    </div>
  );
};

export default Container;
