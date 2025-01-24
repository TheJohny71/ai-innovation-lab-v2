'use client';
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import type { RegionalImpactData } from '@/types/metrics';

interface RegionalImpactProps {
  data: RegionalImpactData[];
}

export const RegionalImpact: React.FC<RegionalImpactProps> = ({ data }) => {
  const totalRegions = data.length;

  const updatedData = data.map((item, index) => ({
    ...item,
    color: [
      '#A78BFA', // Purple for North America
      '#34D399', // Teal for Europe
      '#60A5FA', // Blue for Asia Pacific
      '#475569', // Slate for Other Regions
    ][index % 4],
  }));

  return (
    <div className="rounded-xl bg-[#171C2C] border border-white/5 p-6 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
      <h3 className="text-white font-semibold mb-6">Regional Impact</h3>
      <div className="flex flex-col">
        <div className="h-48 flex justify-center relative group">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={updatedData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                paddingAngle={2}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
                className="transition-all duration-300 group-hover:scale-105"
              >
                {updatedData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={entry.color}
                    className="transition-opacity duration-300 hover:opacity-80"
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-110">
            <span className="text-3xl font-bold text-white">
              {totalRegions}
            </span>
            <span className="text-sm text-gray-400">regions</span>
          </div>
        </div>
        <div className="mt-4 space-y-3">
          {updatedData.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between transition-all duration-300 hover:translate-x-1"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-2.5 h-2.5 rounded-full transition-transform duration-300 hover:scale-125"
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
