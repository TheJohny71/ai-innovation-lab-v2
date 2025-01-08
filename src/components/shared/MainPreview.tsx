'use client';

import * as React from 'react';
import { Users, Zap, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const MainPreview: React.FC = () => {
  return (
    <div className="h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* Refined Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')]" />

      <div className="container mx-auto px-8 h-full flex flex-col py-12">
        {/* Hero Section - With Animations */}
        <div className="space-y-6 max-w-4xl mx-auto text-center mt-8 mb-16">
          <motion.h1
            className="text-6xl font-bold bg-gradient-to-r from-blue-400/90 via-blue-300 to-teal-400/90 bg-clip-text text-transparent px-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            AI Innovation Hub
          </motion.h1>

          <motion.h2
            className="text-3xl text-gray-200 font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Transforming Legal Practice Through AI
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Accelerating Innovation Through Cultural Mindset Change
          </motion.p>
        </div>

        {/* Features Section - With Animations */}
        <div className="grid grid-cols-3 gap-8 px-12 mb-auto">
          {[
            {
              icon: Users,
              title: 'Enhanced Client Service',
              color: 'purple-400',
              description:
                'Elevate your client experience through AI-powered insights and personalized solutions.',
              blur: 'sm',
            },
            {
              icon: Zap,
              title: 'Accelerated Workflows',
              color: 'blue-400',
              description:
                'Streamline legal processes and boost productivity with intelligent automation.',
              blur: 'md',
              elevated: true,
            },
            {
              icon: Trophy,
              title: 'Talent Acceleration',
              color: 'teal-400',
              description:
                'Empower your team with AI tools and training for enhanced legal expertise.',
              blur: 'sm',
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`p-6 rounded-2xl bg-white/[0.02] backdrop-blur-${feature.blur} ${
                feature.elevated ? 'bg-white/[0.03]' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: feature.elevated ? -2 : 0 }}
              transition={{ delay: 0.3 + index * 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <feature.icon
                className={`w-${feature.elevated ? '12' : '10'} h-${feature.elevated ? '12' : '10'} text-${feature.color} mb-4`}
              />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Navigation - With Animation */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="backdrop-blur-sm bg-white/[0.01] rounded-full px-6 py-2 flex space-x-10">
            {[
              'Nexus',
              'Accelerate',
              'Disruption',
              'Mindset',
              'Future-Ready',
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 text-sm text-gray-400/90 transition-colors hover:text-white/90"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MainPreview;
