import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;  // Add the hover prop
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  return (
    <div className={`border bg-gray-800 p-4 rounded-lg transition-shadow ${hover ? 'hover:shadow-lg hover:border-gray-600' : ''} ${className}`}>
      {children}
    </div>
  );
};
