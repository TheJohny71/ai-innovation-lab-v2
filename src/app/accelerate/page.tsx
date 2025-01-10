'use client';

import React, { useState, useMemo } from 'react';
import { Search, ChevronUp, ChevronDown } from 'lucide-react';
import { NavigationBar } from '@/components/shared/NavigationBar';
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

const Card = ({ solution }: { solution: Solution }) => {
  const [isOpen, setIsOpen] = useState(false);

  const coreFeatures = solution.features.slice(0, 3);
  const advancedFeatures = solution.features.slice(3);

  return (
    <div className="mb-12 rounded-2xl bg-white/5 backdrop-blur-xl overflow-hidden transition-all duration-500">
      <div className="p-8 sm:p-10">
        <div className="flex flex-col space-y-6">
          <div>
            <span
              className={`text-sm font-medium tracking-wide mb-2 block ${solution.textColor}`}
            >
              {solution.category.toUpperCase()}
            </span>
            <h3 className={`text-3xl font-medium mb-3 ${solution.textColor}`}>
              {solution.title}
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              {solution.description}
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-white text-xl mb-4 font-medium">
                Core Features
              </h4>
              <ul className="grid gap-3">
                {coreFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="text-slate-300 flex items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                  >
                    <div
                      className={`w-1 h-1 rounded-full mr-3 ${solution.textColor}`}
                    />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`transform transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 hidden'}`}
            >
              <h4 className="text-white text-xl mb-4 font-medium">
                Advanced Features
              </h4>
              <ul className="grid gap-3">
                {advancedFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="text-slate-300 flex items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                  >
                    <div
                      className={`w-1 h-1 rounded-full mr-3 ${solution.textColor}`}
                    />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-white flex items-center justify-center bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
      >
        <div className="flex items-center">
          <span className="mr-2 text-lg">
            {isOpen ? 'Show Less' : 'Show More'}
          </span>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
    </div>
  );
};

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-5xl mx-auto px-6 py-20">
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

        <div>
          {filteredSolutions.length > 0 ? (
            filteredSolutions.map((solution) => (
              <Card key={solution.id} solution={solution} />
            ))
          ) : (
            <div className="text-center py-20">
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
