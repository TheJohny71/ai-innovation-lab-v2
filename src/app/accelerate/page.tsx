'use client';

import React, { useState } from 'react';
import { BaseLayout } from '@/components/shared/BaseLayout';
import { Container } from '@/components/shared/Container';
import {
  Section,
  SectionHeader,
  SectionTitle,
} from '@/components/shared/Section';
import { GradientText } from '@/components/shared/GradientText';
import { Card } from '@/components/shared/Card';
import { Button } from '@/components/shared/Button';
import { ChevronUp, ChevronDown } from 'lucide-react';

const solutions = [
  {
    title: 'Alfie',
    subtitle: 'Modern Leave Management',
    description: 'Enterprise-grade leave management system with Apple-quality design and AI-powered features.',
    gradient: 'from-blue-400 to-indigo-400',
    features: [
      'Apple-Quality Interface',
      'Smart Leave Suggestions',
      'Team Calendar Integration',
      'Enterprise Security & SSO'
    ]
  },
  {
    title: 'Legal Research',
    subtitle: 'Advanced Research Platform',
    description: 'Advanced research capabilities powered by machine learning',
    gradient: 'from-violet-400 to-purple-400',
    features: []
  },
  {
    title: 'LexLiber',
    subtitle: 'Digital Law Library Assistant',
    description: 'Integrated book catalog system providing seamless access to the Research Department collection.',
    gradient: 'from-emerald-400 to-teal-400',
    features: [
      'Smart Title & Call Number Search',
      'Real-time Availability Tracking',
      'Multi-Edition Consolidation',
      'Interactive Catalog Browsing'
    ],
    interface: (
      <div className="mb-6 overflow-hidden rounded-lg">
        <img 
          src="/images/lexliber-interface.png"
          alt="LexLiber Interface"
          className="w-full object-cover rounded-lg border border-white/10"
        />
      </div>
    )
  },
  {
    title: 'Seneca AI Assistant',
    subtitle: 'Interactive Research Guide',
    description: 'Comprehensive onboarding system for McDermott Research Department resources and processes.',
    gradient: 'from-cyan-400 to-blue-400',
    features: [
      'Practice Area-Specific Research Tips',
      'Interactive Database Catalog',
      'Research Tool Navigation',
      'Smart Book Search & Filtering'
    ],
    interface: (
      <div className="mb-6 overflow-hidden rounded-lg">
        <img 
          src="/images/seneca-interface.png"
          alt="Seneca AI Assistant Interface"
          className="w-full object-cover rounded-lg border border-white/10"
        />
      </div>
    )
  },
];

export default function AcceleratePage() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <BaseLayout>
      <div className="relative h-full overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-900/80" />

        <Section>
          <Container>
            <SectionHeader>
              <SectionTitle>
                {/* Increased text size and adjusted gradient for better visibility */}
                <h1 className="text-5xl font-bold mb-6">
                  <GradientText className="from-white via-white to-gray-200">
                    AI Solutions
                  </GradientText>
                </h1>
              </SectionTitle>
              {/* Increased opacity and weight of subtitle */}
              <p className="mt-6 text-2xl font-medium text-gray-200">
                Innovative AI solutions for modern challenges
              </p>
            </SectionHeader>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {solutions.map((solution, index) => (
                <Card
                  key={index}
                  hover
                  className="group overflow-hidden transition-all duration-300"
                >
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-2">
                      <GradientText className={solution.gradient}>
                        {solution.title}
                      </GradientText>
                    </h3>
                    {solution.subtitle && (
                      <p className="text-sm text-cyan-400 mb-3">{solution.subtitle}</p>
                    )}
                    <p className="text-gray-300 mb-6">{solution.description}</p>

                    {/* Interface Preview */}
                    {expandedCard === index && solution.interface && (
                      <div className="mb-6">{solution.interface}</div>
                    )}

                    {/* Features Section */}
                    {expandedCard === index && solution.features && solution.features.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-4 text-white">Key Features</h4>
                        <ul className="space-y-3">
                          {solution.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                              <span className="text-gray-200">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <Button
                      onClick={() => toggleCard(index)}
                      variant="outline"
                      className="w-full backdrop-blur-sm transition-all duration-300 group-hover:border-white/20"
                    >
                      {expandedCard === index ? (
                        <>
                          Show Less <ChevronUp className="ml-2 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Learn More <ChevronDown className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      </div>
    </BaseLayout>
  );
}