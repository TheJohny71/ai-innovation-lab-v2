// src/app/accelerate/solutions.ts

import { type Solution } from './types';

export const solutions: Solution[] = [
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
    },
  },
  {
    id: 'sentinel',
    title: 'Sentinel',
    subtitle: 'AI Governance',
    description: 'Ensure Responsible AI Use with Confidence',
    category: 'Governance',
    gradient: 'bg-emerald-500/10',
    textColor: 'text-emerald-400',
    cardGradient: 'from-emerald-500/10 via-transparent to-transparent',
    borderHover: 'hover:border-emerald-500/30',
    features: [
      'Automated Policy Checks and Enforcement',
      'Bias and Fairness Auditing Tools',
      'Real-Time Compliance Monitoring',
      'AI Performance Benchmarking & Analytics',
      'Enterprise Security and Access Control',
      'Data Privacy Safeguards',
      'Customizable Reporting for Legal and Regulatory Compliance',
      'Version Control and Documentation Management',
      'Seamless Integration with Existing AI and Data Systems',
      'Customizable Risk Scenarios for Policy Simulation',
    ],
    details: {
      overview:
        'The Sentinel AI Governance Framework provides a secure, structured framework for managing, monitoring, and ensuring responsible AI use within the organization. It enables policy enforcement, risk mitigation, and compliance with both internal standards and external regulations throughout the AI lifecycle.',
      benefits: [
        'Proactive Policy Enforcement: Automates the application of company-wide AI policies and standards',
        'Comprehensive Compliance Monitoring: Continuously tracks AI operations against legal and ethical guidelines',
        'Risk Management Assurance: Identifies and mitigates risks such as data privacy issues and bias',
        'Enhanced Transparency: Provides detailed reporting and audit trails for complete oversight',
      ],
    },
  },
];
