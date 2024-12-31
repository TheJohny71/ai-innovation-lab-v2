'use client';
import React from 'react';

interface DataListItemProps {
  label: string;
  value: React.ReactNode;
}

export function DataListItem({ label, value }: DataListItemProps) {
  return (
    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
      <dt className="text-sm font-medium text-gray-400">{label}</dt>
      <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
        {value}
      </dd>
    </div>
  );
}

interface DataListProps {
  items: { label: string; value: React.ReactNode }[];
  className?: string;
}

export function DataList({ items, className = '' }: DataListProps) {
  return (
    <dl className={`divide-y divide-gray-800 ${className}`}>
      {items.map((item, index) => (
        <DataListItem
          key={index}
          label={item.label}
          value={item.value}
        />
      ))}
    </dl>
  );
}
