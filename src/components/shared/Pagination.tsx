'use client';
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange,
  className = '' 
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className={`flex justify-center space-x-2 ${className}`}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`
          px-3 py-1 rounded-lg
          ${currentPage === 1
            ? 'text-gray-500 cursor-not-allowed'
            : 'text-gray-400 hover:text-white hover:bg-gray-800'}
        `}
      >
        Previous
      </button>

      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`
            px-3 py-1 rounded-lg
            ${currentPage === page
              ? 'bg-blue-500/20 text-blue-500'
              : 'text-gray-400 hover:text-white hover:bg-gray-800'}
          `}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`
          px-3 py-1 rounded-lg
          ${currentPage === totalPages
            ? 'text-gray-500 cursor-not-allowed'
            : 'text-gray-400 hover:text-white hover:bg-gray-800'}
        `}
      >
        Next
      </button>
    </nav>
  );
}
