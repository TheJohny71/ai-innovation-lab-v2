'use client';
import React from 'react';
import type { ImplementationType } from '@/types/metrics';

interface ImplementationTypesProps {
  types: ImplementationType[];
}

export const ImplementationTypes: React.FC<ImplementationTypesProps> = ({
  types,
}) => {
  const maxCount = Math.max(...types.map((type) => type.count));

  return (
    <div className="rounded-xl bg-[#0F1420] border border-white/5 p-6 backdrop-blur-sm">
      <h3 className="text-white font-semibold mb-1">Implementation Types</h3>
      <p className="text-gray-400 text-sm mb-6">By practice area</p>
      <div className="space-y-4">
        {types.map((item) => (
          <div key={item.name} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-300 truncate pr-2">{item.name}</span>
              <span className="text-gray-400">{item.count}</span>
            </div>
            <div className="w-full bg-slate-900/50 rounded-full h-1.5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-400 to-cyan-400"
                style={{ width: `${(item.count / maxCount) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
