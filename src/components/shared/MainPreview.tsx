'use client';

import React, { useState } from 'react';
import { Zap, Globe, Layers, Flag, Rocket, Users, Cpu } from 'lucide-react';

type PageType =
  | 'welcome'
  | 'solutions'
  | 'disruption'
  | 'mindset'
  | 'future-ready';

interface ServiceBoxProps {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
}

const ServiceBox = ({
  icon: Icon,
  title,
  description,
  gradient,
}: ServiceBoxProps) => (
  <div
    className={`rounded-xl border border-white/10 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/20 hover:shadow-lg ${gradient}`}
  >
    <Icon className="mb-4 h-12 w-12" />
    <h3 className="mb-2 text-xl font-semibold">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

interface NavigationProps {
  activePage: PageType;
  setActivePage: (page: PageType) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  activePage,
  setActivePage,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/90 p-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-screen-xl justify-center">
        <div className="rounded-full border border-indigo-500/20 bg-indigo-500/5 p-1">
          {[
            'Welcome',
            'Solutions',
            'Disruption',
            'Mindset',
            'Future-Ready',
          ].map((btn) => (
            <button
              key={btn}
              onClick={() => setActivePage(btn.toLowerCase() as PageType)}
              className={`mx-2 rounded-full px-8 py-2 transition-all duration-300 ${
                activePage === btn.toLowerCase()
                  ? 'bg-gradient-to-r from-indigo-500 to-cyan-400 text-white shadow-lg'
                  : 'text-gray-300 hover:bg-gray-800/50'
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export const MainPreview: React.FC = () => {
  const [activePage, setActivePage] = useState<PageType>('welcome');

  const WelcomePage = () => (
    <div className="relative min-h-screen w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128] via-[#1B2B4D] to-[#0A1128]" />
      <div className="relative">
        <div className="flex min-h-screen flex-col items-center justify-center space-y-16">
          <div className="text-center">
            <h1 className="mb-4 text-6xl font-bold">
              <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                AI Innovation Law
              </span>
            </h1>
            <h2 className="mb-2 text-3xl font-medium text-gray-200">
              AI Powered Legal Innovation
            </h2>
            <p className="text-xl text-gray-400">
              Accelerating Disruption Through Cultural Mindset Change
            </p>
          </div>
          
           <div className="w-full max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-3">
            <ServiceBox
              icon={Users}
              title="Enhanced Client Service"
              description="Transforming legal service delivery through AI-driven solutions"
              gradient="hover:shadow-purple-500/20"
            />
            <ServiceBox
              icon={Rocket}
              title="Accelerated Workflows"
              description="Streamlining legal processes with intelligent automation"
              gradient="hover:shadow-blue-500/20"
            />
            <ServiceBox
              icon={Cpu}
              title="Talent Acceleration"
              description="Empowering legal professionals with AI capabilities"
              gradient="hover:shadow-cyan-500/20"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const SolutionsPage = () => (
    <div className="min-h-screen p-8 pb-24">
      <h2 className="mb-8 text-3xl font-bold">
        <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
          AI Solutions
        </span>
      </h2>
      <div className="grid grid-cols-2 gap-6">
        {[
          {
            title: 'Document Analysis',
            gradient: 'from-purple-400 to-blue-400',
          },
          {
            title: 'Legal Research',
            gradient: 'from-blue-400 to-teal-400',
          },
          {
            title: 'Contract Management',
            gradient: 'from-teal-400 to-cyan-400',
          },
          {
            title: 'Knowledge Management',
            gradient: 'from-cyan-400 to-purple-400',
          },
        ].map((solution, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-700 bg-gray-800/50 p-6 backdrop-blur-sm"
          >
            <h3 className="mb-2 text-xl font-semibold">
              <span
                className={`bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent`}
              >
                {solution.title}
              </span>
            </h3>
            <p className="text-gray-400">
              AI-powered solutions for modern challenges
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const DisruptionPage = () => (
    <div className="min-h-screen p-8 pb-24">
      <h2 className="mb-8 text-3xl font-bold">
        <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
          Law Firm AI Disruption Index
        </span>
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {[
          {
            icon: Zap,
            value: '31',
            title: 'Total Initiatives',
            color: 'purple',
          },
          {
            icon: Globe,
            value: '18',
            title: 'Global Reach',
            color: 'blue',
          },
          {
            icon: Layers,
            value: '24',
            title: 'Active Projects',
            color: 'blue',
          },
          {
            icon: Flag,
            value: '8',
            title: '2024 Launches',
            color: 'teal',
          },
        ].map((metric, i) => (
          <div
            key={i}
            className="rounded-lg border border-gray-700 bg-gray-800/50 p-4 backdrop-blur-sm"
          >
            <metric.icon className={`h-6 w-6 text-${metric.color}-400`} />
            <p className="mt-2 text-2xl font-bold text-white">{metric.value}</p>
            <p className="text-sm text-gray-400">{metric.title}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const MindsetPage = () => (
    <div className="min-h-screen p-8 pb-24">
      <h2 className="mb-8 text-3xl font-bold">
        <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
          Cultural Mindset Change
        </span>
      </h2>
      <div className="grid grid-cols-3 gap-6">
        {[
          'Innovation First',
          'Data-Driven Decisions',
          'Client-Centric Approach',
        ].map((mindset) => (
          <div
            key={mindset}
            className="rounded-lg border border-gray-700 bg-gray-800/50 p-6 backdrop-blur-sm"
          >
            <h3 className="mb-2 text-xl font-semibold text-blue-400">
              {mindset}
            </h3>
            <p className="text-gray-400">
              Embracing change through innovative thinking
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const FutureReadyPage = () => (
    <div className="min-h-screen p-8 pb-24">
      <h2 className="mb-8 text-3xl font-bold">
        <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
          Future-Ready Solutions
        </span>
      </h2>
      <div className="grid grid-cols-3 gap-6">
        {[
          'AI Integration',
          'Digital Transformation',
          'Innovation Framework',
        ].map((solution) => (
          <div
            key={solution}
            className="rounded-lg border border-gray-700 bg-gray-800/50 p-6 backdrop-blur-sm"
          >
            <h3 className="mb-2 text-xl font-semibold text-blue-400">
              {solution}
            </h3>
            <p className="text-gray-400">
              Advanced solutions for future-ready practices
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const pages: Record<PageType, JSX.Element> = {
    welcome: <WelcomePage />,
    solutions: <SolutionsPage />,
    disruption: <DisruptionPage />,
    mindset: <MindsetPage />,
    'future-ready': <FutureReadyPage />,
  };

  return (
    <div className="text-white">
      {pages[activePage]}
      <Navigation activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
};
