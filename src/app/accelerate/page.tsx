'use client';

import React, { useState, useMemo } from 'react';
import { Search, ChevronUp, ChevronDown } from 'lucide-react';
import { NavigationBar } from '@/components/shared/NavigationBar';

interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  gradient: string;
  textColor: string;
  borderHover: string;
  cardGradient: string;
  features: string[];
}

interface CardProps {
  solution: Solution;
  isOpen: boolean;
  onToggle: () => void;
}

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
  {
    id: 'lexpilot',
    title: 'LexPilot',
    subtitle: 'Test. Validate. Pilot Legal AI Solutions with Confidence.',
    description:
      'Advanced testing and validation platform for legal AI solutions using Azure Digital Twins technology.',
    category: 'Practice Management',
    gradient: 'bg-indigo-500/10',
    textColor: 'text-indigo-400',
    borderHover: 'hover:border-indigo-500/30',
    cardGradient: 'from-indigo-500/10 via-transparent to-transparent',
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

const Card: React.FC<CardProps> = React.memo(
  ({ solution, isOpen, onToggle }) => {
    const coreFeatures = solution.features.slice(0, 3);
    const advancedFeatures = solution.features.slice(3);

    return (
      <div className="flex flex-col h-full bg-white/5 backdrop-blur-xl rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/10">
        <div className="flex-1 p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className={`text-2xl font-medium ${solution.textColor}`}>
              {solution.title}
            </h3>
            <span
              className={`text-xs font-medium tracking-wide px-2 py-1 rounded-full ${solution.gradient} ${solution.textColor}`}
            >
              {solution.category}
            </span>
          </div>

          <p className="text-slate-300 text-sm mb-1">{solution.subtitle}</p>
          <p className="text-slate-400 text-sm mb-4 line-clamp-2">
            {solution.description}
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="text-white text-sm mb-2 font-medium">
                Core Features
              </h4>
              <ul className="grid gap-2">
                {coreFeatures.map((feature, index) => (
                  <li
                    key={`${solution.id}-core-${index}`}
                    className="text-slate-300 flex items-center text-sm"
                  >
                    <div
                      className={`w-1 h-1 rounded-full mr-2 ${solution.textColor}`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {isOpen && (
              <div className="animate-fadeIn">
                <h4 className="text-white text-sm mb-2 font-medium">
                  Advanced Features
                </h4>
                <ul className="grid gap-2">
                  {advancedFeatures.map((feature, index) => (
                    <li
                      key={`${solution.id}-advanced-${index}`}
                      className="text-slate-300 flex items-center text-sm"
                    >
                      <div
                        className={`w-1 h-1 rounded-full mr-2 ${solution.textColor}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <button
          onClick={onToggle}
          className="w-full p-2 text-white flex items-center justify-center bg-white/5 hover:bg-white/10 transition-all duration-300"
          aria-expanded={isOpen}
          aria-controls={`${solution.id}-advanced-features`}
        >
          <div className="flex items-center space-x-2">
            <span className="text-sm">
              {isOpen ? 'Show Less' : 'Show More'}
            </span>
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
        </button>
      </div>
    );
  }
);

Card.displayName = 'Card';

const AcceleratePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<string>('');
  const [openCardId, setOpenCardId] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setOpenCardId((prev) => (prev === id ? null : id));
  };

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
      <div className="max-w-7xl mx-auto px-4 py-12">
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

        <div className="mb-8 flex gap-4 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search solutions..."
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchTerm(e.target.value)
              }
              className="w-full pl-10 pr-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-600 transition-all duration-300 text-sm"
            />
          </div>

          <select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setCategoryFilter(e.target.value)
            }
            className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-lg text-white appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-slate-600 transition-all duration-300 text-sm min-w-[140px]"
          >
            <option value="">All Categories</option>
            {categories.map((category: string) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSolutions.length > 0 ? (
            filteredSolutions.map((solution) => (
              <Card
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
      <NavigationBar />
    </div>
  );
};

export default AcceleratePage;
