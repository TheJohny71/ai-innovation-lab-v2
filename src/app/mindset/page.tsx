'use client';

import React, { useState, useEffect } from 'react';
import { Lightbulb, Users, Target, TrendingUp } from 'lucide-react';
import { BaseLayout } from '@/components/shared/BaseLayout';
import { Container } from '@/components/shared/Container';
import { Section, SectionHeader, SectionTitle } from '@/components/shared/Section';
import { GradientText } from '@/components/shared/GradientText';
import { Card } from '@/components/shared/Card';

interface MindsetMetric {
  icon: any;
  title: string;
  value: string;
  description: string;
  gradient: {
    border: string;
    text: string;
  };
}

interface ChangePhase {
  title: string;
  description: string;
  status: number; // percentage
}

const metrics: MindsetMetric[] = [
  {
    icon: Lightbulb,
    title: "Innovation Readiness",
    value: "78%",
    description: "Teams prepared for AI adoption",
    gradient: {
      border: "border-purple-400/20",
      text: "text-purple-400"
    }
  },
  {
    icon: Users,
    title: "Team Engagement",
    value: "92%",
    description: "Active participation in AI initiatives",
    gradient: {
      border: "border-blue-400/20",
      text: "text-blue-400"
    }
  },
  {
    icon: Target,
    title: "Success Rate",
    value: "85%",
    description: "Cultural transformation achievements",
    gradient: {
      border: "border-teal-400/20",
      text: "text-teal-400"
    }
  },
  {
    icon: Trend,
    title: "Growth Mindset",
    value: "89%",
    description: "Positive attitude towards change",
    gradient: {
      border: "border-cyan-400/20",
      text: "text-cyan-400"
    }
  }
];

const changePhases: ChangePhase[] = [
  {
    title: "Awareness",
    description: "Understanding the need for AI adoption",
    status: 95
  },
  {
    title: "Learning",
    description: "Acquiring new skills and knowledge",
    status: 82
  },
  {
    title: "Adoption",
    description: "Implementing AI solutions in daily work",
    status: 78
  },
  {
    title: "Mastery",
    description: "Proficient use of AI tools",
    status: 65
  }
];

export default function MindsetPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const currentDate = new Date('2024-12-31T21:48:02Z');
  const currentUser = 'TheJohny71';

  return (
    <BaseLayout>
      <Section className="pt-32">
        <Container>
          <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <SectionHeader>
              <SectionTitle>
                <GradientText className="from-purple-400 via-blue-400 to-teal-400">
                  Cultural Mindset Change
                </GradientText>
                <span className="block text-xl text-gray-400 mt-6">
                  Transforming organizational culture for AI innovation
                </span>
              </SectionTitle>
            </SectionHeader>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {metrics.map((metric, index) => (
                <Card 
                  key={index}
                  className={`p-6 ${metric.gradient.border} hover:bg-gray-900/60 transition-colors`}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <metric.icon className={`w-5 h-5 ${metric.gradient.text}`} />
                    <h3 className={`font-medium ${metric.gradient.text}`}>{metric.title}</h3>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <p className="text-sm text-gray-400">{metric.description}</p>
                </Card>
              ))}
            </div>

            {/* Change Management Progress */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-2xl font-medium text-white mb-8">
                  Change Management Progress
                </h3>
                <div className="space-y-8">
                  {changePhases.map((phase, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">{phase.title}</span>
                        <span className="text-gray-400">{phase.status}%</span>
                      </div>
                      <div className="h-2 bg-gray-700/30 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-400 to-teal-400"
                          style={{ width: `${phase.status}%` }}
                        />
                      </div>
                      <p className="text-sm text-gray-500">{phase.description}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-medium text-white mb-8">
                  Implementation Framework
                </h3>
                <div className="space-y-6">
                  <div className="p-4 rounded-lg bg-gray-900/40 border border-purple-400/20">
                    <h4 className="text-lg font-medium text-purple-400 mb-2">Assessment</h4>
                    <p className="text-gray-400">Evaluate current organizational readiness and identify gaps</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gray-900/40 border border-blue-400/20">
                    <h4 className="text-lg font-medium text-blue-400 mb-2">Strategy</h4>
                    <p className="text-gray-400">Develop comprehensive change management plan</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gray-900/40 border border-teal-400/20">
                    <h4 className="text-lg font-medium text-teal-400 mb-2">Execution</h4>
                    <p className="text-gray-400">Implement changes with continuous feedback loops</p>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-6 text-right">
                  Last updated: {currentDate.toLocaleString('en-US', {
                    timeZone: 'UTC',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    timeZoneName: 'short'
                  })}
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </BaseLayout>
  );
}
