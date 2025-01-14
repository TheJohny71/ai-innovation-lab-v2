'use client';

import { type FC, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { BaseLayout } from '@/components/shared/BaseLayout';
import { solutions } from './solutions';
import { type Solution } from './types';
import SolutionCarousel from '@/components/shared/SolutionCarousel';

const AcceleratePage: FC = () => {
  const [activeSolution, setActiveSolution] = useState<Solution | null>(null);

  const handleSolutionClick = (solution: Solution): void => {
    setActiveSolution(solution);
    window.history.pushState({}, '', `/accelerate/${solution.id}`);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = (): void => {
    setActiveSolution(null);
    window.history.pushState({}, '', '/accelerate');
    document.body.style.overflow = 'auto';
  };

  return (
    <BaseLayout>
      <div className="min-h-screen flex flex-col relative">
        <div
          className={`max-w-7xl mx-auto w-full flex-1 flex flex-col transition-all duration-500
                     ${activeSolution ? 'opacity-20 pointer-events-none blur-sm' : ''}`}
        >
          {/* Enhanced Title section */}
          <div className="text-center mt-16 mb-20">
            <h1 className="text-5xl font-bold text-white mb-3 tracking-tight">
              AI{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                Acceleration
              </span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Transform your business with our cutting-edge AI solutions
            </p>
          </div>

          {/* Carousel Container with enhanced styling */}
          <div className="flex-1 flex items-center justify-center -mt-8">
            <div className="w-full">
              <SolutionCarousel
                solutions={solutions}
                onSolutionSelect={handleSolutionClick}
              />
            </div>
          </div>
        </div>

        {/* Enhanced Detail Panel */}
        {activeSolution && (
          <>
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-md z-40 
                       transition-opacity duration-500"
              onClick={handleClose}
            />

            <div
              className="fixed inset-y-0 right-0 w-full md:w-1/2 lg:w-2/5 
                       bg-gradient-to-b from-slate-900/95 to-slate-800/95 
                       backdrop-blur-2xl border-l border-white/10 
                       p-8 overflow-y-auto transform transition-all duration-500 
                       translate-x-0 z-50 shadow-2xl"
            >
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 p-2 rounded-full text-slate-400 
                         hover:text-white hover:bg-white/10 hover:scale-105
                         transition-all duration-300"
              >
                <X size={24} />
              </button>

              <div className="mt-8 space-y-8">
                <header>
                  <span
                    className={`text-sm font-medium px-4 py-1.5 rounded-full 
                             ${activeSolution.gradient} ${activeSolution.textColor}
                             shadow-lg backdrop-blur-md`}
                  >
                    {activeSolution.category}
                  </span>
                  <h2 className="text-3xl font-bold text-white mt-4 tracking-tight">
                    {activeSolution.title}
                  </h2>
                  <p className={`mt-2 ${activeSolution.textColor} text-lg`}>
                    {activeSolution.subtitle}
                  </p>
                  <p className="text-slate-300 mt-4 leading-relaxed">
                    {activeSolution.description}
                  </p>
                </header>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Overview
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {activeSolution.details.overview}
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    {activeSolution.details.benefits.map(
                      (benefit: string, idx: number) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-slate-300 group"
                        >
                          <ArrowRight
                            className={`mt-1 ${activeSolution.textColor} 
                                    transition-transform duration-300
                                    group-hover:translate-x-1`}
                            size={16}
                          />
                          {benefit}
                        </li>
                      )
                    )}
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Features
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {activeSolution.features.map(
                      (feature: string, idx: number) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-white/5 text-slate-300 
                                   border border-white/10 hover:bg-white/10 
                                   transition-all duration-300 hover:scale-[1.02]"
                        >
                          {feature}
                        </div>
                      )
                    )}
                  </div>
                </section>

                <button
                  className="w-full p-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600
                           text-white hover:from-blue-600 hover:to-blue-700
                           transition-all duration-300 hover:scale-[1.02]
                           shadow-lg font-medium"
                >
                  Get Started with {activeSolution.title}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </BaseLayout>
  );
};

export default AcceleratePage;
