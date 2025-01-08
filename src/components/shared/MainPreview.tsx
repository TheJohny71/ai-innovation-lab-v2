'use client';

import * as React from 'react';
import { Users, Waves, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { GradientBackground } from './GradientBackground';
import { AnimatedServiceBox } from './AnimatedServiceBox';
import { fadeIn, slideUp, scaleUp } from '@/lib/animation';
import { cn } from '@/lib/utils';

const ParticleEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <GradientBackground />
      <ParticleEffect />

      <div className="relative min-h-screen flex flex-col items-center px-4 pt-24 pb-24">
        {/* Title Section */}
        <motion.div
          className="space-y-8 text-center relative mb-32"
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

        {/* Service Boxes */}
        <div className="flex justify-center gap-8 perspective-1000">
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
      </div>
    </div>
  );
};

export default MainPreview;