'use client';

import React, { useState, type ChangeEvent } from 'react';
import { Search, ArrowRight, X } from 'lucide-react';
import { BaseLayout } from '@/components/shared/BaseLayout';
import { solutions } from './solutions';
import { type Solution } from './types';
import SolutionCarousel from '@/components/shared/SolutionCarousel';

export default function AcceleratePage() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeSolution, setActiveSolution] = useState<Solution | null>(null);

  // Filter solutions
  const filteredSolutions: Solution[] = solutions.filter(
    (solution: Solution) => {
      const matchesSearch: boolean =
        !searchTerm ||
        solution.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        solution.description.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesSearch;
    }
  );

  const handleSolutionClick = (solution: Solution): void => {
    setActiveSolution(solution);
    window.history.pushState({}, '', `/accelerate/${solution.id}`);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = (): void => {
    setActiveSolution(null);
    window.history.pushState({}, '', '/accelerate');
    document.body.style.overflow = 'auto';
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  return (
    <BaseLayout>
      <div className="min-h-screen p-6 flex flex-col relative">
        <div
          className={`max-w-7xl mx-auto w-full space-y-6 flex-grow transition-opacity duration-300
                     ${activeSolution ? 'opacity-20 pointer-events-none' : ''}`}
        >
          {/* Title section */}
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                AI <span className="text-blue-400">Acceleration</span>
              </h1>
              <p className="text-gray-400">
                Enterprise-grade AI solutions for law firms
              </p>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 text-sm text-gray-300">
            <p>
              Explore our suite of AI solutions designed specifically for law
              firm operations and workflow optimization.
            </p>
          </div>

          {/* Search Controls */}
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors"
              size={16}
            />
            <input
              type="text"
              placeholder="Search solutions..."
              className="w-full pl-10 pr-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-lg 
                       text-white placeholder-slate-400 border border-white/10
                       focus:outline-none focus:ring-1 focus:ring-purple-500/50 
                       transition-all duration-300"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          {/* Solutions Carousel */}
          <SolutionCarousel
            solutions={filteredSolutions}
            onSolutionSelect={handleSolutionClick}
          />
        </div>

        {/* Detail Panel */}
        {activeSolution && (
          <>
            {/* Dark overlay */}
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
              onClick={handleClose}
            />

            {/* Panel */}
            <div
              className="fixed inset-y-0 right-0 w-full md:w-1/2 lg:w-2/5 bg-slate-900/95 backdrop-blur-xl 
                          border-l border-white/10 p-8 overflow-y-auto transform transition-all duration-500 
                          translate-x-0 z-50 shadow-2xl"
            >
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 p-2 rounded-full text-slate-400 
                         hover:text-white hover:bg-white/10 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="mt-8 space-y-8">
                <header>
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-full 
                                ${activeSolution.gradient} ${activeSolution.textColor}`}
                  >
                    {activeSolution.category}
                  </span>
                  <h2 className="text-3xl font-bold text-white mt-4">
                    {activeSolution.title}
                  </h2>
                  <p className={`mt-2 ${activeSolution.textColor}`}>
                    {activeSolution.subtitle}
                  </p>
                  <p className="text-slate-300 mt-4">
                    {activeSolution.description}
                  </p>
                </header>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Overview
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {activeSolution.details.overview}
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    {activeSolution.details.benefits.map(
                      (benefit: string, idx: number) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-slate-300"
                        >
                          <ArrowRight
                            className={`mt-1 ${activeSolution.textColor}`}
                            size={16}
                          />
                          {benefit}
                        </li>
                      )
                    )}
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Features
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {activeSolution.features.map(
                      (feature: string, idx: number) => (
                        <div
                          key={idx}
                          className="p-3 rounded-lg bg-white/5 text-slate-300 
                                   border border-white/10 hover:bg-white/10 
                                   transition-colors duration-200"
                        >
                          {feature}
                        </div>
                      )
                    )}
                  </div>
                </section>

                <button
                  className="w-full p-3 rounded-lg border border-white/10 mt-8
                           text-white hover:bg-white/10 transition-colors"
                >
                  Get Started with {activeSolution.title}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </BaseLayout>
  );
}
