'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';

interface TimelineItem {
  heading: string;
  details: string;
}

interface TimelinePanel {
  title: string;
  content: TimelineItem[];
}

interface TimelineSectionProps {
  panels: TimelinePanel[];
  activePanel: number | null;
  onPanelClick: (index: number | null) => void;
}

export function TimelineSection({
  panels,
  activePanel,
  onPanelClick,
}: TimelineSectionProps) {
  return (
    <div className="relative ml-16">
      <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-blue-400/30 to-transparent" />
      <div className="space-y-8">
        {panels.map((panel, idx) => (
          <motion.div
            key={idx}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="relative panel-container"
            data-panel-id={idx}
          >
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-400/40" />
            <div
              className="ml-4 w-[480px] bg-gradient-to-r from-blue-900/20 via-blue-900/10 to-transparent backdrop-blur-md border-l border-white/10 rounded-xl p-6 hover:bg-black/40 transition-all duration-300 cursor-pointer"
              onClick={() => onPanelClick(activePanel === idx ? null : idx)}
            >
              <motion.div
                className="flex items-center justify-between"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-2xl font-light tracking-wide text-white">
                  {panel.title}
                </h3>
                {activePanel === idx ? (
                  <Minus className="w-5 h-5 text-blue-400" />
                ) : (
                  <Plus className="w-5 h-5 text-blue-400" />
                )}
              </motion.div>

              <AnimatePresence>
                {activePanel === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: 'spring', duration: 0.5 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 space-y-4">
                      {panel.content.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="group hover:bg-black/40 p-4 rounded-lg transition-all"
                        >
                          <div className="flex items-center gap-3">
                            <ArrowRight className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <h4 className="text-lg text-blue-300">
                              {item.heading}
                            </h4>
                          </div>
                          <p className="text-white/80 ml-7 mt-1 font-light">
                            {item.details}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
