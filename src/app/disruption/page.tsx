'use client';

import React, { useState, useEffect } from 'react';
import { Zap, Globe, Layers, Flag, ArrowRight, Star } from 'lucide-react';
import { debounce } from 'lodash';
import { BaseLayout } from '@/components/shared/BaseLayout';
import { Container } from '@/components/shared/Container';
import { Section, SectionHeader, SectionTitle } from '@/components/shared/Section';
import { Card } from '@/components/shared/Card';
import { GradientText } from '@/components/shared/GradientText';

// Keep your existing interfaces...

const StarField = // ... keep your existing StarField component

const MetricCard = // ... keep your existing MetricCard component

const ProgressBar = // ... keep your existing ProgressBar component

export default function DisruptionPage() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  // Keep your existing mouse movement logic...

  const metrics: DashboardMetrics = {
    // Keep your existing metrics data...
  };

  return (
    <BaseLayout>
      <StarField mousePosition={mousePosition} />
      
      <Section className="pt-32">
        <Container>
          <div className={`mb-12 max-w-5xl transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <SectionHeader>
              <SectionTitle>
                <GradientText className="from-purple-400 via-blue-400 to-teal-400">
                  Law Firm AI Disruption Index
                </GradientText>
                <span className="block text-xl text-gray-400 mt-6">
                  Tracking AI innovation in global law firms
                </span>
              </SectionTitle>
            </SectionHeader>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-opacity duration-1000 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            {metrics.cards.map((card, index) => (
              <MetricCard key={index} {...card} />
            ))}
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 transition-opacity duration-1000 delay-400 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <Card className="p-8">
              <h3 className="text-2xl font-medium text-white mb-8 flex items-center justify-between">
                Implementation Types
                <span className="text-sm text-gray-400">By practice area</span>
              </h3>
              <div className="space-y-8">
                {metrics.implementationTypes.map((item) => (
                  <div key={item.name} className="space-y-3">
                    <div className="flex justify-between text-base">
                      <span className="text-gray-300 font-medium">{item.name}</span>
                      <span className="text-gray-400">{item.count}</span>
                    </div>
                    <ProgressBar 
                      value={item.count}
                      max={Math.max(...metrics.implementationTypes.map(t => t.count))}
                      gradient="bg-gradient-to-r from-purple-400 to-cyan-400"
                    />
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-medium text-white mb-8 flex items-center justify-between">
                  Deployment Status
                  <span className="text-sm text-gray-400">Current state</span>
                </h3>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {Object.entries(metrics.deploymentStatus).map(([status, count]) => (
                    <div key={status} className="text-center p-6 bg-gray-900/40 rounded-xl border border-blue-400/20">
                      <div className="text-4xl font-bold text-blue-400 mb-2 drop-shadow-[0_0_15px_rgba(96,165,250,0.3)]">
                        {count}
                      </div>
                      <div className="text-sm text-gray-400 capitalize">{status}</div>
                    </div>
                  ))}
                </div>
              </div>
              <button className="w-full flex items-center justify-center gap-1 text-gray-300 hover:text-white transition-colors bg-gray-900/20 rounded-xl border border-blue-400/10 py-4 px-6 mt-auto">
                <span>Access Complete Enterprise Dataset</span>
                <ArrowRight className="w-4 h-4 opacity-70" />
              </button>
            </Card>
          </div>
        </Container>
      </Section>
    </BaseLayout>
  );
}
