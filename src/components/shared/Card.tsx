import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`border bg-gray-800 p-4 rounded-lg ${className}`}>
      {children}
    </div>
  );
};
