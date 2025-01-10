'use client';

import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

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

// Separate card component with its own state
const SolutionCard = ({ solution }: { solution: Solution }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  // Function to render feature list with consistent styling
  const FeatureList = ({ features }: { features: string[] }) => (
    <div className="space-y-2">
      {features.map((feature, index) => (
        <div
          key={index}
          className="text-white/80 text-sm flex items-center gap-2"
        >
          <div
            className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${solution.textColor}`}
          />
          <span>{feature}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div
      className={`bg-slate-800/50 rounded-xl border border-white/5 p-8
                 transition-all duration-300 ease-in-out ${solution.borderHover}`}
    >
      {/* Header with Category Tag */}
      <div className="flex items-start justify-between mb-4">
        <h3 className={`text-2xl font-bold ${solution.textColor}`}>
          {solution.title}
        </h3>
        <span
          className={`inline-flex px-3 py-1 rounded-full ${solution.gradient} 
                    ${solution.textColor} text-xs font-medium`}
        >
          {solution.category}
        </span>
      </div>

      {/* Subtitle */}
      <p className="text-gray-300 mb-4">{solution.subtitle}</p>

      {/* Description */}
      <p className="text-white/80 mb-6">{solution.description}</p>

      {/* Initial Features */}
      {!isExpanded && (
        <div className="mb-6">
          <FeatureList features={solution.features.slice(0, 3)} />
        </div>
      )}

      {/* Expanded Features */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out
                  ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="border-t border-white/10 pt-6">
          <h4 className="text-white font-medium mb-4">All Features</h4>
          <FeatureList features={solution.features} />
        </div>
      </div>

      {/* Control Button */}
      <button
        onClick={toggleExpand}
        className="w-full mt-6 py-3 rounded-lg bg-white/5 text-white font-medium 
                 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
      >
        {isExpanded ? (
          <>
            Hide Details <ChevronUp className="w-4 h-4" />
          </>
        ) : (
          <>
            View Details <ChevronDown className="w-4 h-4" />
          </>
        )}
      </button>
    </div>
  );
};

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
    ],
  },
];

export default function AcceleratePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-900/80" />

        <div className="relative px-6 py-24 mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-white">AI </span>
              <span className="text-blue-400">Acceleration</span>
            </h1>
            <p className="text-2xl text-white/80">
              Because fast isn&apos;t fast enough
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <SolutionCard key={solution.id} solution={solution} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
