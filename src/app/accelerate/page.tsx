'use client';

import React, { useState, type ChangeEvent } from 'react';
import { Search, ArrowRight, ChevronRight, X } from 'lucide-react';
import { BaseLayout } from '@/components/shared/BaseLayout';
import { Button } from '@/components/shared/Button';
import SolutionCard from '@/components/shared/SolutionCard';
import { solutions } from './solutions';
import { type Solution } from './types';

export default function AcceleratePage() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeSolution, setActiveSolution] = useState<Solution | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('');

  // Get unique categories with explicit typing
  const categories: string[] = Array.from(
    new Set(solutions.map((sol: Solution) => sol.category))
  );

  // Filter solutions with explicit parameter typing
  const filteredSolutions: Solution[] = solutions.filter(
    (solution: Solution) => {
      const matchesSearch: boolean =
        !searchTerm ||
        solution.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        solution.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory: boolean =
        !categoryFilter || solution.category === categoryFilter;

      return matchesSearch && matchesCategory;
    }
  );

  const handleSolutionClick = (solution: Solution): void => {
    setActiveSolution(solution);
    window.history.pushState({}, '', `/accelerate/${solution.id}`);
  };

  const handleClose = (): void => {
    setActiveSolution(null);
    window.history.pushState({}, '', '/accelerate');
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setCategoryFilter(e.target.value);
  };

  return (
    <BaseLayout>
      <div className="min-h-screen p-6 flex flex-col">
        <div className="max-w-7xl mx-auto w-full space-y-6 flex-grow">
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

          {/* Search & Filter Controls */}
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-white"
                size={16}
              />
              <input
                type="text"
                placeholder="Explore solutions..."
                className="w-full pl-10 pr-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-lg 
                         text-white placeholder-slate-400 border border-white/10
                         focus:outline-none focus:ring-1 focus:ring-purple-500/50 
                         transition-all duration-300"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <select
              value={categoryFilter}
              onChange={handleCategoryChange}
              className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-lg
                       text-white border border-white/10 appearance-none cursor-pointer
                       focus:outline-none focus:ring-1 focus:ring-purple-500/50
                       transition-all duration-300"
            >
              <option value="">All Categories</option>
              {categories.map((category: string) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSolutions.map((solution: Solution) => (
              <SolutionCard
                key={solution.id}
                solution={solution}
                isActive={activeSolution?.id === solution.id}
                onClick={() => handleSolutionClick(solution)}
                variant="compact"
              />
            ))}
          </div>

          {/* Detailed Info Panel */}
          {activeSolution && (
            <div className="fixed inset-y-0 right-0 w-full md:w-1/2 lg:w-2/5 bg-slate-900 border-l border-white/10 p-8 overflow-y-auto transform transition-transform duration-500 translate-x-0">
              <Button
                variant="outline"
                onClick={handleClose}
                className="absolute top-6 right-6"
              >
                <X size={24} />
              </Button>

              <div className="mt-8">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {activeSolution.title}
                </h2>
                <p className={`mb-6 ${activeSolution.textColor}`}>
                  {activeSolution.subtitle}
                </p>

                <div className="space-y-8">
                  <section>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Overview
                    </h3>
                    <p className="text-slate-300">
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
                              className="mt-1 text-purple-400"
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
                      All Features
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {activeSolution.features.map(
                        (feature: string, idx: number) => (
                          <div
                            key={idx}
                            className="p-3 rounded-lg bg-white/5 text-slate-300 border border-white/10"
                          >
                            {feature}
                          </div>
                        )
                      )}
                    </div>
                  </section>

                  <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">
                        Integration
                      </h3>
                      <p className="text-slate-300">
                        {activeSolution.details.integration}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">
                        Deployment
                      </h3>
                      <p className="text-slate-300">
                        {activeSolution.details.deployment}
                      </p>
                    </div>
                  </section>

                  <Button className="w-full">
                    Get Started with {activeSolution.title}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </BaseLayout>
  );
}
