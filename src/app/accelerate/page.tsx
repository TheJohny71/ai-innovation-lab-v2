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
          className={`max-w-7xl mx-auto w-full flex-1 flex flex-col transition-opacity duration-300
                     ${activeSolution ? 'opacity-20 pointer-events-none' : ''}`}
        >
          {/* Title section */}
          <div className="text-center mt-12 mb-16">
            <h1 className="text-4xl font-bold text-white mb-2">
              AI <span className="text-blue-400">Acceleration</span>
            </h1>
          </div>

          {/* Centered Carousel */}
          <div className="flex-1 flex items-center justify-center">
            <SolutionCarousel
              solutions={solutions}
              onSolutionSelect={handleSolutionClick}
            />
          </div>
        </div>

        {/* Detail Panel */}
        {activeSolution && (
          <>
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
              onClick={handleClose}
            />

            <div
              className="fixed inset-y-0 right-0 w-full md:w-1/2 lg:w-2/5 bg-slate-900/95 backdrop-blur-xl 
                          border-l border-white/10 p-8 overflow-y-auto transform transition-all duration-500 
                          translate-x-0 z-50 shadow-2xl"
            >
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 p-2 rounded-full text-slate-400 
                         hover:text-white hover:bg-white/10 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="mt-8 space-y-8">
                <header>
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-full 
                                ${activeSolution.gradient} ${activeSolution.textColor}`}
                  >
                    {activeSolution.category}
                  </span>
                  <h2 className="text-3xl font-bold text-white mt-4">
                    {activeSolution.title}
                  </h2>
                  <p className={`mt-2 ${activeSolution.textColor}`}>
                    {activeSolution.subtitle}
                  </p>
                  <p className="text-slate-300 mt-4">
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
                          className="flex items-start gap-3 text-slate-300"
                        >
                          <ArrowRight
                            className={`mt-1 ${activeSolution.textColor}`}
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
                          className="p-3 rounded-lg bg-white/5 text-slate-300 
                                   border border-white/10 hover:bg-white/10 
                                   transition-colors duration-200"
                        >
                          {feature}
                        </div>
                      )
                    )}
                  </div>
                </section>

                <button
                  className="w-full p-3 rounded-lg border border-white/10 mt-8
                           text-white hover:bg-white/10 transition-colors"
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
