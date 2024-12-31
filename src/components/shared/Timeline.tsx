'use client';
import React from 'react';

interface TimelineItemProps {
  title: string;
  description?: string;
  date?: string;
  icon?: React.ReactNode;
  status?: 'completed' | 'current' | 'upcoming';
}

export function TimelineItem({
  title,
  description,
  date,
  icon,
  status = 'completed'
}: TimelineItemProps) {
  const statusStyles = {
    completed: 'bg-green-500',
    current: 'bg-blue-500',
    upcoming: 'bg-gray-500'
  };

  return (
    <div className="relative pb-8">
      <div className="relative flex items-start space-x-3">
        <div className="relative">
          <span
            className={`
              h-8 w-8
              rounded-full
              flex items-center justify-center
              ring-8 ring-gray-900
              ${statusStyles[status]}
            `}
          >
            {icon || (
              <svg
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <div>
            <div className="text-sm">
              <span className="font-medium text-gray-200">
                {title}
              </span>
              {date && (
                <span className="ml-2 text-gray-500">
                  {date}
                </span>
              )}
            </div>
            {description && (
              <p className="mt-2 text-sm text-gray-400">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface TimelineProps {
  items: TimelineItemProps[];
  className?: string;
}

export function Timeline({ items, className = '' }: TimelineProps) {
  return (
    <div className={`flow-root ${className}`}>
      <ul className="-mb-8">
        {items.map((item, index) => (
          <li key={index}>
            <TimelineItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
