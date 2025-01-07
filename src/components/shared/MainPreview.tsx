'use client';

import * as React from 'react';
import { Users, Waves, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { GradientBackground } from './GradientBackground';

interface AnimatedServiceBoxProps {
  icon: React.ElementType;
  title: string;
  color: 'purple' | 'blue' | 'teal';
  delay?: number;
}

const AnimatedServiceBox: React.FC<AnimatedServiceBoxProps> = ({
  icon: Icon,
  title,
  color,
  delay = 0,
}) => {
  const colorStyles = {
    purple:
      'bg-gradient-to-b from-purple-500/10 to-purple-500/5 border-purple-500/20 hover:border-purple-500/40',
    blue: 'bg-gradient-to-b from-blue-500/10 to-blue-500/5 border-blue-500/20 hover:border-blue-500/40',
    teal: 'bg-gradient-to-b from-teal-500/10 to-teal-500/5 border-teal-500/20 hover:border-teal-500/40',
  };

  const iconColors = {
    purple: 'text-purple-400',
    blue: 'text-blue-400',
    teal: 'text-teal-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.19, 1, 0.22, 1],
      }}
      whileHover={{ scale: 1.05 }}
      className={`w-80 h-48 rounded-2xl ${colorStyles[color]} 
        border backdrop-blur-sm p-8 flex flex-col items-center justify-center gap-4
        transition-all duration-300`}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.5,
          delay: delay + 0.3,
          ease: [0.19, 1, 0.22, 1],
        }}
        className={iconColors[color]}
      >
        <Icon size={40} />
      </motion.div>
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: delay + 0.4,
          ease: [0.19, 1, 0.22, 1],
        }}
        className="text-xl font-medium text-white text-center"
      >
        {title}
      </motion.h3>
    </motion.div>
  );
};

const MainPreview: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-background overflow-hidden">
      <GradientBackground />
      <div className="relative h-full">
        <div className="flex h-full flex-col items-center justify-between px-4 pt-24 pb-12">
          {/* Title Section */}
          <motion.div
            className="space-y-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <h1 className="text-7xl font-bold">
              <motion.span
                className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent inline-block"
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
              className="text-xl tracking-wide text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Accelerating Innovation Through Cultural Mindset Change
            </motion.p>
          </motion.div>

          {/* Service Boxes */}
          <div className="flex justify-center gap-8 -mt-20">
            <AnimatedServiceBox
              icon={Users}
              title="Enhanced Client Service"
              color="purple"
              delay={0.6}
            />
            <AnimatedServiceBox
              icon={Waves}
              title="Accelerated Workflows"
              color="blue"
              delay={0.8}
            />
            <AnimatedServiceBox
              icon={Sparkles}
              title="Talent Acceleration"
              color="teal"
              delay={1}
            />
          </div>

          {/* Navigation */}
          <motion.nav
            className="flex gap-8 rounded-full border border-blue-500/20 bg-blue-500/5 px-8 py-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[
              'Nexus',
              'Accelerate',
              'Disruption',
              'Mindset',
              'Future-Ready',
            ].map((item, index) => (
              <motion.button
                key={item}
                className="text-gray-200 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              >
                {item}
              </motion.button>
            ))}
          </motion.nav>
        </div>
      </div>
    </div>
  );
};

export default MainPreview;
