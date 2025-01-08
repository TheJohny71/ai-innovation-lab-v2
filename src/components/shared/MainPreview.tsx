'use client';

import * as React from 'react';
import { Users, Waves, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedServiceBox } from './AnimatedServiceBox';

const MainPreview: React.FC = () => {
  return (
    <div className="h-screen max-h-screen overflow-hidden">
      <div className="h-full flex flex-col items-center justify-between px-4 py-16">
        {/* Title Section */}
        <div className="flex-1 flex flex-col items-center justify-center space-y-8 text-center">
          <motion.h1
            className="text-7xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              AI Innovation Hub
            </span>
          </motion.h1>

          <motion.h2
            className="text-4xl font-medium text-gray-200"
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

        {/* Service Boxes - Centered in the middle section */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex gap-8">
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

        {/* Empty flex-1 div to balance the layout */}
        <div className="flex-1" />
      </div>
    </div>
  );
};

export default MainPreview;
