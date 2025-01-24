'use client';

import React from 'react';
import { Users, Zap, Trophy } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Enhanced Client Service',
    color: 'purple-400',
    description:
      'Elevate your client experience through AI-powered insights and personalized solutions.',
  },
  {
    icon: Zap,
    title: 'Accelerated Workflows',
    color: 'blue-400',
    description:
      'Streamline legal processes and boost productivity with intelligent automation.',
  },
  {
    icon: Trophy,
    title: 'Talent Acceleration',
    color: 'teal-400',
    description:
      'Empower your team with AI tools and training for enhanced legal expertise.',
  },
];

export function FeatureSection() {
  return (
    <div className="grid grid-cols-3 gap-8 px-12">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="p-6 rounded-2xl bg-gradient-to-r from-blue-900/20 via-blue-900/10 to-transparent backdrop-blur-sm"
        >
          <feature.icon className={`w-10 h-10 text-${feature.color} mb-4`} />
          <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
