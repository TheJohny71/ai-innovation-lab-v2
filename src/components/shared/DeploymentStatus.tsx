// File: src/components/shared/DeploymentStatus.tsx
'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface DeploymentStatusData {
  name: string;
  value: number;
  color: string;
}

export const DeploymentStatus: React.FC = () => {
  const data: DeploymentStatusData[] = [
    { name: 'Active', value: 24, color: '#94A3B8' },
    { name: 'Development', value: 4, color: '#64748B' },
    { name: 'Planning', value: 3, color: '#475569' },
  ];

  return (
    <div className="rounded-xl bg-slate-800/40 border border-white/10 p-6 backdrop-blur-sm">
      <h3 className="text-white font-semibold mb-6">Deployment Status</h3>
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
            <span className="text-4xl font-bold text-white">31</span>
            <span className="text-sm text-gray-400">total</span>
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
              <span className="text-gray-300">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
