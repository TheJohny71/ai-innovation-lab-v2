// src/app/accelerate/solutions.ts

import { type Solution } from './types';

export const solutions: Solution[] = [
  {
    id: 'welcome',
    title: 'AI Solutions Overview',
    subtitle: 'Explore Available Tools',
    description:
      'A collection of specialized AI tools designed to enhance legal research, practice management, and governance.',
    category: 'Overview',
    gradient: 'bg-blue-500/10',
    textColor: 'text-blue-400',
    cardGradient: 'from-blue-500/10 via-transparent to-transparent',
    borderHover: 'hover:border-blue-500/30',
    features: [
      'Practice Management Tools',
      'Research Assistance',
      'Knowledge Management',
      'AI Governance',
    ],
    details: {
      overview:
        'Browse through our collection of AI tools, each designed for specific legal workflows and requirements. Select any card to learn more about individual solutions.',
      benefits: [
        'Integrated workflow tools',
        'Research optimization',
        'Knowledge organization',
        'Compliance management',
      ],
    },
  },
  {
    id: 'alfie',
    title: 'Alfie',
    subtitle: 'Modern Leave Management',
    description: 'Enterprise-grade leave management with AI-powered features.',
    category: 'Practice Management',
    gradient: 'bg-purple-500/10',
    textColor: 'text-purple-400',
    cardGradient: 'from-purple-500/10 via-transparent to-transparent',
    borderHover: 'hover:border-purple-500/30',
    features: [
      'Apple-Quality Interface',
      'Smart Leave Suggestions',
      'Team Calendar Integration',
      'Advanced Analytics',
      'Custom Workflows',
      'Enterprise Security',
    ],
    details: {
      overview:
        'Alfie revolutionizes leave management with an intuitive interface and AI-powered features that streamline time-off tracking.',
      benefits: [
        'Reduce administrative overhead by 75%',
        'Improve team planning with predictive analytics',
        'Ensure compliance with automated policy enforcement',
        'Enhance employee experience with instant approvals',
      ],
    },
  },
  {
    id: 'lexliber',
    title: 'LexLiber',
    subtitle: 'Digital Law Library Assistant',
    description: 'Smart catalog system for legal research collections.',
    category: 'Knowledge Management',
    gradient: 'bg-teal-500/10',
    textColor: 'text-teal-400',
    cardGradient: 'from-teal-500/10 via-transparent to-transparent',
    borderHover: 'hover:border-teal-500/30',
    features: [
      'Smart Search & Filtering',
      'Real-time Availability',
      'Citation Integration',
      'Resource Analytics',
      'Collection Insights',
      'Advanced Cataloging',
    ],
    details: {
      overview:
        'LexLiber modernizes law library management with intelligent search and real-time resource tracking.',
      benefits: [
        'Instant access to research materials',
        'Simplified resource management',
        'Enhanced research efficiency',
        'Improved resource utilization',
      ],
    },
  },
  {
    id: 'seneca',
    title: 'Seneca AI Assistant',
    subtitle: 'Interactive Research Guide',
    description: 'AI-powered research assistance and knowledge discovery.',
    category: 'Research',
    gradient: 'bg-cyan-500/10',
    textColor: 'text-cyan-400',
    cardGradient: 'from-cyan-500/10 via-transparent to-transparent',
    borderHover: 'hover:border-cyan-500/30',
    features: [
      'Practice Area Research',
      'Database Navigation',
      'Smart Search Tools',
      'Custom Research Paths',
      'AI Recommendations',
      'Research Analytics',
    ],
    details: {
      overview:
        'Seneca AI Assistant transforms legal research with personalized guidance and intelligent resource recommendations.',
      benefits: [
        'Accelerated researcher onboarding',
        'Personalized learning paths',
        'Improved research quality',
        'Reduced training overhead',
      ],
    },
  },
  {
    id: 'lexpilot',
    title: 'LexPilot',
    subtitle: 'AI Solution Testing',
    description: 'Advanced platform for testing legal AI solutions.',
    category: 'Practice Management',
    gradient: 'bg-indigo-500/10',
    textColor: 'text-indigo-400',
    cardGradient: 'from-indigo-500/10 via-transparent to-transparent',
    borderHover: 'hover:border-indigo-500/30',
    features: [
      'Workflow Simulation',
      'Performance Analytics',
      'Risk-Free Testing',
      'Security Compliance',
      'Azure Integration',
      'Custom Scenarios',
    ],
    details: {
      overview:
        'LexPilot provides a secure environment for testing and validating AI solutions before deployment.',
      benefits: [
        'Risk-free AI solution testing',
        'Comprehensive performance analytics',
        'Accelerated deployment cycles',
        'Enhanced compliance assurance',
      ],
    },
  },
  {
    id: 'sentinel',
    title: 'Sentinel',
    subtitle: 'AI Governance',
    description: 'Enterprise AI Governance and Compliance Platform',
    category: 'Governance',
    gradient: 'bg-emerald-500/10',
    textColor: 'text-emerald-400',
    cardGradient: 'from-emerald-500/10 via-transparent to-transparent',
    borderHover: 'hover:border-emerald-500/30',
    features: [
      'Policy Enforcement & Compliance',
      'Bias Detection & Mitigation',
      'Risk Management',
      'Performance Analytics',
      'Security Controls',
      'Compliance Reporting',
    ],
    details: {
      overview:
        'Secure framework for managing AI compliance, risk, and governance across your organization with automated policy enforcement and comprehensive monitoring.',
      benefits: [
        'Automated policy enforcement and compliance monitoring',
        'Real-time risk detection and mitigation',
        'Comprehensive audit trails and reporting',
        'Enhanced security and access controls',
      ],
    },
  },
];
