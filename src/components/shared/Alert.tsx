'use client';
import React from 'react';

interface AlertProps {
  type?: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  className?: string;
}

export function Alert({ type = 'info', title, message, className = '' }: AlertProps) {
  const styles = {
    success: 'bg-green-500/10 border-green-500/20 text-green-500',
    error: 'bg-red-500/10 border-red-500/20 text-red-500',
    warning: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-500',
    info: 'bg-blue-500/10 border-blue-500/20 text-blue-500'
  };

  return (
    <div className={`
      p-4 rounded-lg border
      ${styles[type]}
      ${className}
    `}>
      <h4 className="font-medium mb-1">{title}</h4>
      {message && <p className="opacity-80">{message}</p>}
    </div>
  );
}
