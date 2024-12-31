import React from 'react';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`py-16 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center space-y-4">
      {children}
    </div>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
      {children}
    </h2>
  );
}

export function SectionDescription({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xl text-gray-400">
      {children}
    </p>
  );
}
