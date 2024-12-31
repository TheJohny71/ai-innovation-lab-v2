'use client';
import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
}

export function Skeleton({ 
  className = '', 
  variant = 'text',
  width,
  height
}: SkeletonProps) {
  const baseStyles = "animate-pulse bg-gray-700/30";
  
  const variantStyles = {
    text: "rounded",
    circular: "rounded-full",
    rectangular: "rounded-lg"
  };

  const styles = {
    width: width || (variant === 'text' ? '100%' : '50px'),
    height: height || (variant === 'text' ? '1rem' : '50px')
  };

  return (
    <div
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${className}
      `}
      style={styles}
    />
  );
}
