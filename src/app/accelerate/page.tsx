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
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const toggleCard = (id: string): void => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-900/80" />

        {/* Main Content Section */}
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
              <div
                key={solution.id}
                className={`group relative bg-slate-800/50 rounded-xl border border-white/5 
                           overflow-hidden transition-all duration-300 ease-in-out ${solution.borderHover} 
                           flex flex-col`}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${solution.cardGradient} 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Card Content */}
                <div className="p-8 relative flex flex-col h-full">
                  {/* Header Section */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1 min-w-0 pr-4">
                      <h3
                        className={`text-2xl font-bold ${solution.textColor} mb-2`}
                      >
                        {solution.title}
                      </h3>
                      <p className={`text-sm ${solution.textColor}/80`}>
                        {solution.subtitle}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <span
                        className={`inline-block px-3 py-1 rounded-full ${solution.gradient} 
                                  ${solution.textColor} text-xs font-medium whitespace-nowrap`}
                      >
                        {solution.category}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/80 mb-6 flex-grow">
                    {solution.description}
                  </p>

                  {/* Features Preview */}
                  <div className="space-y-3 mb-6">
                    {solution.features
                      .slice(0, 3)
                      .map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="text-white/80 text-sm flex items-center gap-2"
                        >
                          <div
                            className={`w-1 h-1 rounded-full ${solution.textColor} flex-shrink-0`}
                          />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                  </div>

                  {/* View Details Button */}
                  <button
                    onClick={() => toggleCard(solution.id)}
                    className="w-full py-3 rounded-lg bg-white/5 text-white font-medium 
                             hover:bg-white/10 transition-colors flex items-center 
                             justify-center gap-2 mt-auto"
                  >
                    {expandedCards.has(solution.id) ? (
                      <>
                        Hide Details <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        View Details <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Expanded Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out
                              ${
                                expandedCards.has(solution.id)
                                  ? 'max-h-[500px] opacity-100 mt-6'
                                  : 'max-h-0 opacity-0'
                              }`}
                  >
                    <div className="pt-6 border-t border-white/10">
                      <h4 className="text-white font-medium mb-4">
                        All Features
                      </h4>
                      <div className="space-y-3">
                        {solution.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="text-white/80 text-sm flex items-center gap-2"
                          >
                            <div
                              className={`w-1 h-1 rounded-full ${solution.textColor} flex-shrink-0`}
                            />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
