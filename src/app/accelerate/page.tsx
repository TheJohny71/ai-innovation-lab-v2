'use client';

import React, { useState } from 'react';
import { Search, ArrowRight, ChevronRight, X } from 'lucide-react';
import { NavigationBar } from '@/components/shared/NavigationBar';

const solutions = [
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
    borderHover: 'hover:border-purple-500/30',
    features: [
      'Apple-Quality Interface',
      'Smart Leave Suggestions',
      'Team Calendar Integration',
      'Enterprise Security & SSO',
      'Advanced Analytics Dashboard',
      'Custom Workflow Builder',
    ],
    details: {
      overview:
        'Alfie revolutionizes leave management with an intuitive interface and AI-powered features that make tracking and managing time off effortless for both employees and HR teams.',
      benefits: [
        'Reduce administrative overhead by 75%',
        'Improve team planning with predictive analytics',
        'Ensure compliance with automated policy enforcement',
        'Enhance employee experience with instant approvals',
      ],
      integration:
        'Seamlessly connects with major HR systems and calendar applications',
      deployment: 'Cloud-based solution with enterprise-grade security',
    },
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
    details: {
      overview:
        'LexLiber modernizes law library management with intelligent search capabilities and real-time tracking of your valuable research materials.',
      benefits: [
        'Instant access to research materials',
        'Simplified resource management',
        'Enhanced research efficiency',
        'Improved resource utilization',
      ],
      integration:
        'Integrates with major legal research platforms and library systems',
      deployment: 'Secure cloud deployment with on-premise options available',
    },
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
    details: {
      overview:
        'Seneca AI Assistant transforms research onboarding with personalized guidance and intelligent resource recommendations.',
      benefits: [
        'Accelerated researcher onboarding',
        'Personalized learning paths',
        'Improved research quality',
        'Reduced training overhead',
      ],
      integration:
        'Connects with research databases and knowledge management systems',
      deployment: 'Cloud-based with secure SSO integration',
    },
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
    details: {
      overview:
        'LexPilot provides a secure, controlled environment for testing and validating AI solutions before deployment.',
      benefits: [
        'Risk-free AI solution testing',
        'Comprehensive performance analytics',
        'Accelerated deployment cycles',
        'Enhanced compliance assurance',
      ],
      integration:
        'Seamless integration with Azure services and legal tech stack',
      deployment: 'Flexible deployment options with Azure infrastructure',
    },
  },
];

export default function AcceleratePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSolution, setActiveSolution] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('');

  // Get unique categories
  const categories = [...new Set(solutions.map((sol) => sol.category))];

  // Filter solutions
  const filteredSolutions = solutions.filter((solution) => {
    const matchesSearch =
      !searchTerm ||
      solution.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      solution.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      !categoryFilter || solution.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  const handleSolutionClick = (solution) => {
    setActiveSolution(solution);
    window.history.pushState({}, '', `/accelerate/${solution.id}`);
  };

  const handleClose = () => {
    setActiveSolution(null);
    window.history.pushState({}, '', '/accelerate');
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-50" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 pt-24 pb-12">
          <h1 className="text-4xl font-medium mb-4 tracking-tight text-center">
            <span className="text-white">AI </span>
            <span className="bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text">
              Acceleration
            </span>
          </h1>
          <p className="text-lg text-slate-400 font-light text-center mb-12">
            Because fast isn&apos;t fast enough
          </p>

          {/* Search & Filter Controls */}
          <div className="max-w-2xl mx-auto mb-8 flex gap-4">
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
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-lg
                       text-white border border-white/10 appearance-none cursor-pointer
                       focus:outline-none focus:ring-1 focus:ring-purple-500/50
                       transition-all duration-300"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Solutions Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSolutions.map((solution) => (
              <div
                key={solution.id}
                onClick={() => handleSolutionClick(solution)}
                className={`group relative p-8 rounded-3xl transition-all duration-500 cursor-pointer
                          bg-slate-900/50 backdrop-blur-xl border border-white/10
                          hover:border-purple-500/30 hover:bg-white/5
                          ${activeSolution?.id === solution.id ? 'bg-white/5 border-purple-500/30' : ''}`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {solution.title}
                    </h3>
                    <p className={`mb-4 ${solution.textColor}`}>
                      {solution.subtitle}
                    </p>
                  </div>
                  <ChevronRight
                    className={`text-slate-400 transition-transform duration-300 
                             group-hover:translate-x-1 group-hover:text-white
                             ${activeSolution?.id === solution.id ? 'rotate-90' : ''}`}
                  />
                </div>

                <p className="text-slate-300 mb-6">{solution.description}</p>

                {/* Features Preview */}
                <div className="flex flex-wrap gap-3">
                  {solution.features.slice(0, 3).map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-sm bg-white/5 text-slate-300
                               border border-white/10"
                    >
                      {feature}
                    </span>
                  ))}
                  {solution.features.length > 3 && (
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${solution.gradient} ${solution.textColor}`}
                    >
                      +{solution.features.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Info Panel */}
          {activeSolution && (
            <div className="fixed inset-y-0 right-0 w-full md:w-1/2 lg:w-2/5 bg-slate-900 border-l border-white/10 p-8 overflow-y-auto transform transition-transform duration-500 translate-x-0">
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 text-slate-400 hover:text-white"
              >
                <X size={24} />
              </button>

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
                      {activeSolution.details.benefits.map((benefit, idx) => (
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
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      All Features
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {activeSolution.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-lg bg-white/5 text-slate-300 border border-white/10"
                        >
                          {feature}
                        </div>
                      ))}
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

                  <button className="w-full py-4 bg-purple-500 hover:bg-purple-600 text-white rounded-xl font-semibold transition-colors">
                    Get Started with {activeSolution.title}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <NavigationBar />
    </div>
  );
}
