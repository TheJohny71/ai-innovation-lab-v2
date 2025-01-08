// File: src/components/shared/ImplementationTypes.tsx
'use client';

import React from 'react';

interface ImplementationType {
  name: string;
  value: number;
}

export const ImplementationTypes: React.FC = () => {
  const types: ImplementationType[] = [
    { name: 'Document Analysis & Review', value: 14 },
    { name: 'Legal Research', value: 12 },
    { name: 'Contract Management', value: 10 },
    { name: 'Knowledge Management', value: 8 },
    { name: 'Client Service Automation', value: 6 },
  ];

  return (
    <div className="rounded-xl bg-slate-800/40 border border-white/10 p-6 backdrop-blur-sm">
      <h3 className="text-white font-semibold mb-1">Implementation Types</h3>
      <p className="text-gray-400 text-sm mb-6">By practice area</p>
      <div className="space-y-4">
        {types.map((item) => (
          <div key={item.name} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-300 truncate pr-2">{item.name}</span>
              <span className="text-gray-400">{item.value}</span>
            </div>
            <div className="w-full bg-black/20 rounded-full h-1.5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-gray-400/80 to-gray-500/60"
                style={{ width: `${(item.value / 14) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
