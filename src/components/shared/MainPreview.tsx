'use client';

import * as React from 'react';
import { Users, Waves, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { GradientBackground } from './GradientBackground';
import { AnimatedServiceBox } from './AnimatedServiceBox';
import { fadeIn, slideUp, scaleUp } from '@/lib/animation';
import { cn } from '@/lib/utils';

// Enhanced particle system
const ParticleEffect = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className={cn(
          'absolute h-2 w-2 rounded-full bg-blue-500/30 blur-sm',
          'animate-float'
        )}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${5 + Math.random() * 10}s`,
        }}
      />
    ))}
  </div>
);

const MainPreview: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-background overflow-hidden">
      <GradientBackground />
      <ParticleEffect />

      <div className="relative h-full">
        <div className="flex h-full flex-col items-center justify-between px-4 pt-24 pb-12">
          {/* Enhanced Title Section */}
          <motion.div
            className="space-y-8 text-center relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="absolute -inset-x-4 -inset-y-8 bg-gradient-to-b from-blue-500/10 to-transparent blur-2xl" />

            <h1 className="text-7xl font-bold relative">
              <motion.span
                className="bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent inline-block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
              >
                AI Innovation Hub
              </motion.span>
            </h1>

            <motion.h2
              className="text-4xl font-medium tracking-wide text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Transforming Legal Practice Through AI
            </motion.h2>

            <motion.p
              className="text-xl tracking-wide text-gray-400 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Accelerating Innovation Through Cultural Mindset Change
              <div className="absolute inset-x-0 -bottom-4 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            </motion.p>
          </motion.div>

          {/* Enhanced Service Boxes */}
          <div className="flex justify-center gap-8 -mt-20 perspective-1000">
            <AnimatedServiceBox
              icon={Users}
              title="Enhanced Client Service"
              color="purple"
            />
            <AnimatedServiceBox
              icon={Waves}
              title="Accelerated Workflows"
              color="blue"
            />
            <AnimatedServiceBox
              icon={Sparkles}
              title="Talent Acceleration"
              color="teal"
            />
          </div>

          {/* Enhanced Navigation */}
          <motion.nav
            className="flex gap-8 rounded-full border border-blue-500/20 bg-gradient-to-r from-blue-500/5 via-blue-400/5 to-blue-500/5 px-8 py-3 mb-8 backdrop-blur-md relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 via-transparent to-blue-500/10 animate-pulse" />

            {[
              'Nexus',
              'Accelerate',
              'Disruption',
              'Mindset',
              'Future-Ready',
            ].map((item, index) => (
              <motion.button
                key={item}
                className="text-gray-200 hover:text-blue-400 transition-all relative group"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              >
                {item}
                <div className="absolute -inset-x-2 -inset-y-1 rounded-lg border border-blue-500/0 group-hover:border-blue-500/20 transition-all" />
              </motion.button>
            ))}
          </motion.nav>
        </div>
      </div>
    </div>
  );
};

export default MainPreview;
