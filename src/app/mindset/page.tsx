import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';

const MindsetPage = () => {
  const [activePanel, setActivePanel] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      const panels = document.querySelectorAll('.panel-container');
      let clickedInsidePanel = false;
      
      panels.forEach(panel => {
        if (panel.contains(event.target)) {
          clickedInsidePanel = true;
        }
      });
      
      if (!clickedInsidePanel) {
        setActivePanel(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / totalHeight) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const panels = [
    {
      title: 'Always in Beta',
      content: [
        {
          heading: 'Culture of Change',
          details: 'Embrace continuous evolution and transformation'
        },
        {
          heading: 'Skills Half-Life',
          details: 'Prepare for rapid skill obsolescence and renewal'
        },
        {
          heading: 'Start Before Ready',
          details: 'Take action while learning and adapting'
        },
        {
          heading: 'Velocity Focus',
          details: 'Direction with speed trumps speed alone'
        },
        {
          heading: 'Cost of Inaction',
          details: 'Recognize stagnation as a significant risk'
        }
      ]
    },
    {
      title: 'Human-Led, AI-Enabled',
      content: [
        {
          heading: 'AI as Co-Thinker',
          details: 'Partner with AI, not replace with it'
        },
        {
          heading: 'Warm Tech Approach',
          details: 'Human-centric technology implementation'
        },
        {
          heading: 'Client-Speed Learning',
          details: 'Adapt and grow at market pace'
        },
        {
          heading: 'Beyond Replacement',
          details: 'AI augments human capability, not substitutes'
        }
      ]
    },
    {
      title: 'Strategic Intelligence',
      content: [
        {
          heading: 'Behavior Over Performance',
          details: 'KBIs supersede traditional KPIs'
        },
        {
          heading: 'Attention Economy',
          details: 'Focus on capturing and directing attention'
        },
        {
          heading: 'Risk Assessment',
          details: 'Distinguish headline risks from actual threats'
        },
        {
          heading: 'Information Balance',
          details: 'Optimize both input and output flows'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800">
        <div 
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-16">
          <h1 className="text-6xl font-bold mb-4">
            <span>AI </span>
            <span className="text-blue-400">Mindset</span>
          </h1>
          <p className="text-xl text-gray-400">Talent-Driven Transformation</p>
        </div>

        <div className="space-y-6">
          {panels.map((panel, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="relative panel-container"
            >
              <button
                onClick={() => setActivePanel(activePanel === idx ? null : idx)}
                className="w-full group"
                aria-expanded={activePanel === idx}
                aria-controls={`panel-${idx}`}
              >
                <div className="flex items-center justify-between p-6 bg-gray-800/50 hover:bg-gray-800/70 rounded-xl border border-gray-700 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <h2 className="text-2xl font-light">{panel.title}</h2>
                  </div>
                  {activePanel === idx ? (
                    <Minus className="w-6 h-6 text-blue-400" />
                  ) : (
                    <Plus className="w-6 h-6 text-blue-400" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {activePanel === idx && (
                  <motion.div
                    id={`panel-${idx}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: 'spring', duration: 0.5 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 space-y-6 bg-gray-800/30 rounded-b-xl border-x border-b border-gray-700">
                      {panel.content.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="group hover:bg-gray-800/50 p-4 rounded-lg transition-all"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <ArrowRight className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <h3 className="text-xl font-medium text-blue-300">
                              {item.heading}
                            </h3>
                          </div>
                          <p className="text-gray-400 ml-7">
                            {item.details}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-8 right-8 max-w-md">
        <div className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
          <p className="text-gray-300 italic font-light text-lg">
            "Half of wisdom is learning what to unlearn"
          </p>
          <p className="text-gray-400 text-sm mt-2">— Larry Niven</p>
        </div>
      </div>
    </div>
  );
};

export default MindsetPage;