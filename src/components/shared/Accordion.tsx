'use client';
import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({ 
  title, 
  children, 
  defaultOpen = false 
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-800 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex justify-between items-center text-left"
      >
        <span className="text-gray-200 font-medium">{title}</span>
        <svg
          className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-400">
          {children}
        </div>
      )}
    </div>
  );
}

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

export function Accordion({ children, className = '' }: AccordionProps) {
  return (
    <div className={`divide-y divide-gray-800 ${className}`}>
      {children}
    </div>
  );
}
