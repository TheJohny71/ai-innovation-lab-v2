'use client';

import React, { useState, useEffect } from 'react';
import { ExternalLink, Zap, Globe, Layers, Flag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BaseLayout } from '@/components/shared/BaseLayout';
import { Container } from '@/components/shared/Container';
import { Button, Card } from '@/components/shared/Button';
import { GradientText } from '@/components/shared/GradientText';
import { ImplementationBar } from '@/components/shared/ImplementationBar';
import { StarField } from '@/components/shared/StarField';

// ... keep the metrics data structure the same ...

const DisruptionPage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <BaseLayout>
      <div className="relative min-h-screen overflow-hidden">
        <StarField mousePosition={mousePosition} />
        
        {/* Main Content Area - No Scroll */}
        <div className="fixed inset-0 pt-16"> {/* Adjust pt-16 based on your header height */}
          <Container maxWidth="xl" className="h-full">
            {/* Header with Title and Access Button */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-4xl font-bold">
                  <GradientText className="bg-gradient-to-r from-purple-400 to-cyan-400">
                    Law Firm AI Disruption Index
                  </GradientText>
                </h1>
                <p className="text-gray-400 mt-2">Tracking AI innovation in global law firms</p>
              </div>
              <Button
                variant="gradient"
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600"
              >
                Access Dataset
                <ExternalLink size={14} />
              </Button>
            </div>

            {/* Metrics Grid - More Compact */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              {metrics.cards.map((card, index) => (
                <Card key={index} className={cn(card.gradient.border, 'p-4')} hover glow>
                  {/* ... card content with reduced padding ... */}
                </Card>
              ))}
            </div>

            {/* Bottom Section Grid */}
            <div className="grid grid-cols-3 gap-4">
              {/* Implementation Types - Left Column */}
              <Card hover glow className="border-purple-400/20 p-4">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Implementation Types
                  <span className="text-sm font-normal text-gray-400 ml-2">
                    By practice area
                  </span>
                </h3>
                <div className="space-y-4">
                  {metrics.implementation.map((item, index) => (
                    <ImplementationBar
                      key={index}
                      name={item.name}
                      value={item.value}
                      className="h-1.5"
                    />
                  ))}
                </div>
              </Card>

              {/* Deployment Status - Center Column */}
              <Card hover glow className="border-blue-400/20 p-4">
                {/* ... deployment visualization ... */}
              </Card>

              {/* Regional Impact - Right Column */}
              <Card hover glow className="border-teal-400/20 p-4">
                {/* ... regional impact content ... */}
              </Card>
            </div>
          </Container>
        </div>
      </div>
    </BaseLayout>
  );
};

export default DisruptionPage;
