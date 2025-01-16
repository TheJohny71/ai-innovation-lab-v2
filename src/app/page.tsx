'use client';

import { motion } from 'framer-motion';
import { StarField } from '@/components/shared/StarField';
import { GradientBackground } from '@/components/shared/GradientBackground';
import { BaseLayout } from '@/components/shared/BaseLayout';

export default function NexusPage() {
  return (
    <BaseLayout>
      <div className="relative min-h-screen w-full overflow-hidden">
        <StarField className="z-0" />
        <GradientBackground className="z-10" />

        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-blue-300 to-blue-500 filter drop-shadow-lg"
          >
            AI Innovation Hub
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-6 filter drop-shadow-md"
          >
            Empowering Digital Transformation
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm text-emerald-400 tracking-[0.2em] font-medium"
          >
            INNOVATE · DISRUPT · LEAD
          </motion.div>
        </div>
      </div>
    </BaseLayout>
  );
}
