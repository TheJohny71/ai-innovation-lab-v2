import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  size?: 'default' | 'lg';
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = 'default',
  size = 'default',
  className = '',
  onClick,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

  const variants = {
    default:
      'bg-gradient-to-r from-blue-500/80 to-teal-500/80 hover:from-blue-500 hover:to-teal-500 text-white',
    outline: 'border border-blue-400/20 hover:bg-blue-500/10 text-white',
  };

  const sizes = {
    default: 'h-10 px-4 py-2',
    lg: 'h-12 px-8 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
