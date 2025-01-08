// File: src/components/shared/RegionalImpact.tsx
'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface RegionalData {
  name: string;
  value: number;
  color: string;
}

export const RegionalImpact: React.FC = () => {
  const data: RegionalData[] = [
    { name: 'North America', value: 42, color: '#94A3B8' },
    { name: 'Europe', value: 28, color: '#64748B' },
    { name: 'Asia Pacific', value: 18, color: '#475569' },
    { name: 'Other Regions', value: 12, color: '#334155' },
  ];

  return (
    <div className="rounded-xl bg-slate-800/40 border border-white/10 p-6 backdrop-blur-sm">
      <h3 className="text-white font-semibold mb-6">Regional Impact</h3>
      <div className="flex flex-col">
        <div className="h-48 flex justify-center relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                paddingAngle={2}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-white">4</span>
            <span className="text-sm text-gray-400">regions</span>
          </div>
        </div>
        <div className="mt-4 space-y-3">
          {data.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-gray-300">{item.name}</span>
              </div>
              <span className="text-gray-300">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
