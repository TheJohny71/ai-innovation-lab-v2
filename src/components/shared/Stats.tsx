'use client';
import React from 'react';

interface StatItemProps {
  label: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
}

export function StatItem({ label, value, change, icon }: StatItemProps) {
  return (
    <div className="px-4 py-5 bg-gray-900/30 rounded-lg overflow-hidden">
      <div className="flex items-center">
        {icon && (
          <div className="flex-shrink-0">
            <div className="h-10 w-10 text-blue-500">
              {icon}
            </div>
          </div>
        )}
        <div className={icon ? 'ml-5' : ''}>
          <p className="text-sm font-medium text-gray-400 truncate">
            {label}
          </p>
          <p className="mt-1 text-3xl font-semibold text-gray-200">
            {value}
          </p>
        </div>
      </div>
      {typeof change !== 'undefined' && (
        <div className="mt-4">
          <div className={`
            inline-flex items-center text-sm
            ${change >= 0 ? 'text-green-500' : 'text-red-500'}
          `}>
            <svg
              className={`h-5 w-5 flex-shrink-0 ${
                change >= 0 ? 'rotate-0' : 'rotate-180'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-1.5">
              {Math.abs(change)}%
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

interface StatsProps {
  items: StatItemProps[];
  className?: string;
}

export function Stats({ items, className = '' }: StatsProps) {
  return (
    <div className={`grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 ${className}`}>
      {items.map((item, index) => (
        <StatItem key={index} {...item} />
      ))}
    </div>
  );
}
