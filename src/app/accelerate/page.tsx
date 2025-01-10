'use client';

import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { NavigationBar } from '@/components/shared/NavigationBar';
import SolutionCard from '@/components/shared/SolutionCard';
import type { Solution } from '@/types/metrics';

const solutions: Solution[] = [
  {
    id: 'alfie',
    title: 'Alfie',
    subtitle: 'Modern Leave Management',
    description:
      'Enterprise-grade leave management system with Apple-quality design and AI-powered features.',
    category: 'Practice Management',
    gradient: 'bg-purple-500/10',
    textColor: 'text-purple-400',
    borderHover: 'hover:border-purple-500/30',
    cardGradient: 'from-purple-500/10 via-transparent to-transparent',
    features: [
      'Apple-Quality Interface',
      'Smart Leave Suggestions',
      'Team Calendar Integration',
      'Enterprise Security & SSO',
      'Advanced Analytics Dashboard',
      'Custom Workflow Builder',
    ],
  },
  {
    id: 'lexliber',
    title: 'LexLiber',
    subtitle: 'Digital Law Library Assistant',
    description:
      'Integrated book catalog system providing seamless access to the Research Department collection.',
    category: 'Knowledge Management',
    gradient: 'bg-teal-500/10',
    textColor: 'text-teal-400',
    borderHover: 'hover:border-teal-500/30',
    cardGradient: 'from-teal-500/10 via-transparent to-transparent',
    features: [
      'Smart Title & Call Number Search',
      'Real-time Availability Tracking',
      'Multi-Edition Consolidation',
      'Interactive Catalog Browsing',
      'Citation Integration',
      'Advanced Search Filters',
    ],
  },
  {
    id: 'seneca',
    title: 'Seneca AI Assistant',
    subtitle: 'Interactive Research Guide',
    description:
      'Comprehensive onboarding system for Research Department resources and processes.',
    category: 'Research',
    gradient: 'bg-cyan-500/10',
    textColor: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/30',
    cardGradient: 'from-cyan-500/10 via-transparent to-transparent',
    features: [
      'Practice Area-Specific Research Tips',
      'Interactive Database Catalog',
      'Research Tool Navigation',
      'Smart Book Search & Filtering',
      'Custom Research Paths',
      'AI-Powered Suggestions',
    ],
  },
];

export default function AcceleratePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const categories = useMemo(
    () => [...new Set(solutions.map((solution) => solution.category))],
    []
  );

  const filteredSolutions = useMemo(
    () =>
      solutions.filter((solution) => {
        const matchesSearch =
          searchTerm === '' ||
          solution.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          solution.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory =
          categoryFilter === '' || solution.category === categoryFilter;
        return matchesSearch && matchesCategory;
      }),
    [searchTerm, categoryFilter]
  );

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-medium mb-6 tracking-tight">
            <span className="text-white">AI </span>
            <span className="bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text">
              Acceleration
            </span>
          </h1>
          <p className="text-2xl text-slate-400 font-light">
            Because fast isn't fast enough
          </p>
        </div>

        <div className="mb-16 flex gap-4">
          <div className="relative flex-1">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search solutions..."
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-600 transition-all duration-300"
            />
          </div>

          <select
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded text-white appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-slate-600 transition-all duration-300 min-w-[160px]"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {filteredSolutions.length > 0 ? (
            filteredSolutions.map((solution) => (
              <SolutionCard key={solution.id} solution={solution} />
            ))
          ) : (
            <div className="col-span-3 text-center py-20">
              <p className="text-2xl text-slate-400 font-light">
                No solutions found matching your criteria
              </p>
            </div>
          )}
        </div>
      </div>
      <NavigationBar />
    </div>
  );
}
