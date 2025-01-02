import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
}) => {
  return (
    <div
      className={`rounded-lg border bg-gray-800 p-4 transition-shadow ${
        hover ? 'hover:border-gray-600 hover:shadow-lg' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
