'use client';

import * as React from 'react';
import { Users, Zap, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const MainPreview: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative">
      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')]" />

      <div className="container mx-auto flex flex-col justify-between h-screen p-8">
        {/* Hero Section */}
        <div className="flex-none space-y-6 text-center pt-16">
          <motion.h1
            className="text-6xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-400/90 via-blue-300 to-teal-400/90 bg-clip-text text-transparent">
              AI Innovation Hub
            </span>
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
            className="text-xl text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Accelerating Innovation Through Cultural Mindset Change
          </motion.p>
        </div>

        {/* Features Section */}
        <div className="flex-grow flex items-center justify-center py-16">
          <div className="grid grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
            {[
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
                elevated: true,
              },
              {
                icon: Trophy,
                title: 'Talent Acceleration',
                color: 'teal-400',
                description:
                  'Empower your team with AI tools and training for enhanced legal expertise.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`p-6 rounded-2xl backdrop-blur-sm ${
                  feature.elevated
                    ? 'bg-white/[0.03] transform -translate-y-2'
                    : 'bg-white/[0.02]'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: feature.elevated ? -8 : 0 }}
                transition={{ delay: 0.3 + index * 0.2 }}
                whileHover={{ y: feature.elevated ? -12 : -4 }}
              >
                <feature.icon
                  className={`w-10 h-10 text-${feature.color} mb-4`}
                />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <motion.div
          className="flex-none flex justify-center pb-8"
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
                className="px-3 py-1.5 text-sm text-gray-400/90 hover:text-white/90 transition-colors"
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
