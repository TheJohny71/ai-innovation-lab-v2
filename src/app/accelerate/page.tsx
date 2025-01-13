'use client';

import React, { useState, useRef } from 'react';
import { Search, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { BaseLayout } from '@/components/shared/BaseLayout';
import { SolutionCard } from '@/components/shared/SolutionCard';
import { solutions } from './solutions';
import { Solution } from './types';

export default function AcceleratePage() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeSolution, setActiveSolution] = useState<Solution | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredSolutions: Solution[] = solutions.filter(
    (solution: Solution) =>
      !searchTerm ||
      solution.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      solution.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const scrollToCard = (direction: 'left' | 'right'): void => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = direction === 'left' ? -320 : 320;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleSolutionClick = (solution: Solution): void => {
    setActiveSolution(solution);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = (): void => {
    setActiveSolution(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <BaseLayout>
      <div className="min-h-screen p-6 flex flex-col">
        {/* Header */}
        <div className="max-w-4xl mx-auto w-full">
          <h1 className="text-4xl font-bold text-white mb-2">
            AI Acceleration
          </h1>
          <p className="text-slate-400">
            Enterprise-grade AI solutions for law firms
          </p>

          {/* Search Bar */}
          <div className="relative mt-6">
            <Search
              className="absolute left-3 top-3 text-slate-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search solutions..."
              className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg
                       text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchTerm(e.target.value)
              }
            />
          </div>
        </div>

        {/* Solutions Carousel */}
        <div className="relative mt-12 py-8">
          {/* Left Navigation */}
          <button
            onClick={() => scrollToCard('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
                     bg-slate-800/80 backdrop-blur-sm p-2 rounded-r-lg
                     text-white hover:bg-slate-700/80 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Carousel Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto hide-scrollbar scroll-smooth"
          >
            <div className="flex space-x-4 px-16">
              {filteredSolutions.map((solution) => (
                <SolutionCard
                  key={solution.id}
                  solution={solution}
                  onClick={() => handleSolutionClick(solution)}
                  isActive={activeSolution?.id === solution.id}
                  variant="compact"
                />
              ))}
            </div>
          </div>

          {/* Right Navigation */}
          <button
            onClick={() => scrollToCard('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 
                     bg-slate-800/80 backdrop-blur-sm p-2 rounded-l-lg
                     text-white hover:bg-slate-700/80 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Detail Panel */}
        {activeSolution && (
          <>
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={handleClose}
            />
            <div
              className="fixed inset-y-0 right-0 w-full md:w-1/2 lg:w-2/5 bg-slate-900/95 
                          border-l border-white/10 p-8 overflow-y-auto transform
                          transition-all duration-500 translate-x-0 z-50 shadow-2xl"
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-slate-400 hover:text-white"
                aria-label="Close panel"
              >
                <X size={24} />
              </button>

              <div className="mt-8">
                <span
                  className={`text-sm font-medium px-3 py-1 rounded-full 
                              ${activeSolution.gradient} ${activeSolution.textColor}`}
                >
                  {activeSolution.category}
                </span>
                <h2 className="text-3xl font-bold text-white mt-4">
                  {activeSolution.title}
                </h2>
                <p className="text-slate-300 mt-2">{activeSolution.subtitle}</p>
                <p className="text-slate-400 mt-4">
                  {activeSolution.description}
                </p>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Features
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {activeSolution.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-sm
                                bg-slate-800/50 text-slate-300 
                                border border-slate-700/50"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </BaseLayout>
  );
}
