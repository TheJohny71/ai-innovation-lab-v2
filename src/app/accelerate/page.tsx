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
    cardGradient: 'from-purple-500/10 via-transparent to-transparent',
    borderHover: 'hover:border-purple-500/30', // optional
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
    cardGradient: 'from-teal-500/10 via-transparent to-transparent',
    borderHover: 'hover:border-teal-500/30',
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
    cardGradient: 'from-cyan-500/10 via-transparent to-transparent',
    borderHover: 'hover:border-cyan-500/30',
    features: [
      'Practice Area-Specific Research Tips',
      'Interactive Database Catalog',
      'Research Tool Navigation',
      'Smart Book Search & Filtering',
      'Custom Research Paths',
      'AI-Powered Suggestions',
    ],
  },
  {
    id: 'lexpilot',
    title: 'LexPilot',
    subtitle: 'Test. Validate. Pilot Legal AI Solutions with Confidence.',
    description:
      'Advanced testing and validation platform for legal AI solutions using Azure Digital Twins technology.',
    category: 'Practice Management',
    gradient: 'bg-indigo-500/10',
    textColor: 'text-indigo-400',
    cardGradient: 'from-indigo-500/10 via-transparent to-transparent',
    borderHover: 'hover:border-indigo-500/30',
    features: [
      'Realistic Workflow Simulation using Azure Digital Twins',
      'AI Performance Benchmarking & Analytics',
      'Controlled, Risk-Free Testing Environment',
      'Enterprise Security & Compliance with Azure Standards',
      'Integration with Azure AI & Machine Learning Tools',
      'Customizable Scenarios for Legal Process Simulation',
    ],
  },
];

export default function AcceleratePage() {
  // Track which card is open, plus search/category filters
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [openCardId, setOpenCardId] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setOpenCardId((prev) => (prev === id ? null : id));
  };

  // Collect unique categories
  const categories = useMemo(() => {
    return [...new Set(solutions.map((sol) => sol.category))];
  }, []);

  // Filter solutions by search term and category
  const filteredSolutions = useMemo(() => {
    return solutions.filter((solution) => {
      const matchesSearch =
        !searchTerm ||
        solution.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        solution.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        !categoryFilter || solution.category === categoryFilter;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, categoryFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-medium mb-4 tracking-tight">
            <span className="text-white">AI </span>
            <span className="bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text">
              Acceleration
            </span>
          </h1>
          <p className="text-lg text-slate-400 font-light">
            Because fast isn&apos;t fast enough
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="mb-8 flex gap-4 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search solutions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-800/50 
                backdrop-blur-sm rounded-lg text-white 
                placeholder-slate-400 focus:outline-none focus:ring-1 
                focus:ring-slate-600 transition-all duration-300 text-sm"
            />
          </div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm 
              rounded-lg text-white appearance-none cursor-pointer 
              focus:outline-none focus:ring-1 focus:ring-slate-600 
              transition-all duration-300 text-sm min-w-[140px]"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Grid of Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSolutions.length > 0 ? (
            filteredSolutions.map((solution) => (
              <SolutionCard
                key={solution.id}
                solution={solution}
                isOpen={openCardId === solution.id}
                onToggle={() => toggleCard(solution.id)}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-slate-400 font-light">
                No solutions found matching your criteria
              </p>
            </div>
          )}
        </div>
      </div>
      {/* Footer / Navigation */}
      <NavigationBar />
    </div>
  );
}
