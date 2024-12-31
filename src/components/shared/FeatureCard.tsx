'use client';
import React from 'react';
import { Card } from './Card';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <Card className="group hover:border-blue-500/30 transition-all duration-300">
      {icon && (
        <div className="w-12 h-12 mb-4 text-blue-500 group-hover:text-blue-400 transition-colors duration-300">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3 text-white/90 group-hover:text-white">
        {title}
      </h3>
      <p className="text-gray-400 group-hover:text-gray-300">
        {description}
      </p>
    </Card>
  );
}
