'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface QuoteContainerProps {
  quote: string;
  author: string;
  scrollY?: number;
  className?: string;
}

export function QuoteContainer({
  quote,
  author,
  scrollY = 0,
  className,
}: QuoteContainerProps) {
  return (
    <motion.div
      style={{ y: scrollY * 0.1 }}
      className={`w-full py-8 bg-gradient-to-r from-blue-900/20 via-blue-900/10 to-transparent ${className || ''}`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gray-300 italic font-light text-3xl leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>
        <p className="text-blue-400 text-sm mt-4">— {author}</p>
      </div>
    </motion.div>
  );
}
