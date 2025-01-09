'use client';

import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface Solution {
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
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number): void => {
    setExpandedCard(expandedCard === index ? null : index);
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
              Because fast isn't fast enough
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`group relative bg-slate-800/50 rounded-xl border border-white/5 overflow-hidden transition-all ${solution.borderHover}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${solution.cardGradient} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
                <div className="p-8 relative">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3
                        className={`text-2xl font-bold ${solution.textColor}`}
                      >
                        {solution.title}
                      </h3>
                      <p className={`text-sm ${solution.textColor}/80 mt-1`}>
                        {solution.subtitle}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full ${solution.gradient} ${solution.textColor} text-xs font-medium`}
                    >
                      {solution.category}
                    </span>
                  </div>

                  <p className="text-white/80 mb-6">{solution.description}</p>

                  <div className="mb-6 space-y-3">
                    {solution.features
                      .slice(0, 3)
                      .map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="text-white/80 text-sm flex items-center gap-2"
                        >
                          <div
                            className={`w-1 h-1 rounded-full ${solution.textColor}`}
                          />
                          {feature}
                        </div>
                      ))}
                  </div>

                  <button
                    onClick={() => toggleCard(index)}
                    className="w-full py-3 rounded-lg bg-white/5 text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                  >
                    {expandedCard === index ? (
                      <>
                        Hide Details <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        View Details <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {expandedCard === index && (
                    <div className="mt-6 pt-6 border-t border-white/10">
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
                              className={`w-1 h-1 rounded-full ${solution.textColor}`}
                            />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
