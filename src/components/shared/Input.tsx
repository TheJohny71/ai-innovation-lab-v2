'use client';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {label}
        </label>
      )}
      <input
        {...props}
        className={`
          w-full px-4 py-2 rounded-lg
          bg-gray-800/50 
          border border-gray-700/50
          text-white
          placeholder:text-gray-500
          focus:outline-none focus:ring-2 focus:ring-blue-500/50
          ${error ? 'border-red-500/50' : 'hover:border-gray-600/50'}
          ${className}
        `}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}
