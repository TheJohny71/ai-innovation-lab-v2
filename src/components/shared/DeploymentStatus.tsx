'use client';
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import type { DeploymentStatusData } from '@/types/metrics';

interface DeploymentStatusProps {
  data: DeploymentStatusData;
}

export const DeploymentStatus: React.FC<DeploymentStatusProps> = ({ data }) => {
  const chartData = [
    { name: 'Active', value: data.active, color: '#A78BFA' }, // Purple
    { name: 'Development', value: data.development, color: '#34D399' }, // Teal
    { name: 'Planning', value: data.planning, color: '#60A5FA' }, // Blue
  ];

  const total = chartData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="rounded-xl bg-[#171C2C] border border-white/5 p-6 backdrop-blur-sm">
      <h3 className="text-white font-semibold mb-6">Deployment Status</h3>
      <div className="flex flex-col">
        <div className="h-48 flex justify-center relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                paddingAngle={2}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {chartData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-white">{total}</span>
            <span className="text-sm text-gray-400">total</span>
          </div>
        </div>
        <div className="mt-4 space-y-3">
          {chartData.map((item) => (
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

// Add this line
export default DeploymentStatus;
