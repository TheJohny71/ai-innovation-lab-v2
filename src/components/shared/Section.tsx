import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-16 md:py-24', className)}
    >
      {children}
    </section>
  );
}

export function SectionHeader({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <div className={cn('mx-auto max-w-3xl text-center', className)}>
      {children}
    </div>
  );
}

export function SectionTitle({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <h2 className={cn('text-3xl font-bold sm:text-4xl md:text-5xl', className)}>
      {children}
    </h2>
  );
}

export function SectionDescription({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <p className={cn('mt-4 text-lg text-muted-foreground', className)}>
      {children}
    </p>
  );
}
