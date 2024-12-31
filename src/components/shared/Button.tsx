'use client';
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  className = '' 
}: ButtonProps) {
  const baseStyles = "px-6 py-2 rounded-full transition-all duration-300";
  const variantStyles = {
    primary: "bg-gradient-to-r from-blue-500/10 to-teal-400/10 border border-blue-500/20 hover:border-blue-400/40 text-white/90 hover:text-white",
    secondary: "bg-gray-800/50 hover:bg-gray-800/70 text-gray-300 hover:text-white border border-gray-700/30"
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
