'use client';
import React from 'react';
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

export default function AcceleratePage(): JSX.Element {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="relative">
        <div className="px-6 py-24 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-white">AI </span>
              <span className="text-blue-400">Acceleration</span>
            </h1>
            <p className="text-2xl text-white/80">
              Because fast isn&apos;t fast enough
            </p>
          </div>

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
