// src/types/metrics.ts
import type { ComponentProps, ComponentType } from 'react';
import type { LucideIcon } from 'lucide-react';

export interface MetricCardStats {
  value: string;
  change?: string;
}

export interface MetricCardProps extends ComponentProps<'div'> {
  icon: ComponentType<ComponentProps<LucideIcon>>;
  title: string;
  value: string;
  subtitle: string;
  trend: string;
  stats: Record<string, string>;
  gradient: {
    background: string;
    border: string;
    icon: string;
    iconColor: string;
    text: string;
  };
}

export interface ImplementationType {
  name: string;
  count: number;
}

export interface DeploymentStatusData {
  active: number;
  development: number;
  planning: number;
}

export interface RegionalImpactData {
  name: string;
  value: number;
  color: string;
}

export interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  gradient: string;
  textColor: string;
  cardGradient: string;
  features: string[];
  borderHover?: string;
  backgroundColor?: string;
  accentColor?: string;
  secondaryColor?: string;
  priority?: number;
  status?: 'active' | 'beta' | 'development';
  tags?: string[];
  lastUpdated?: string;
  detailedDescription?: string;
  links?: {
    documentation?: string;
    demo?: string;
    support?: string;
  };
}

export interface Metrics {
  cards: MetricCardProps[];
  implementationTypes: ImplementationType[];
  deploymentStatus: DeploymentStatusData;
  regionalImpact: RegionalImpactData[];
  solutions?: Solution[];
}

export interface SolutionFilterOptions {
  category?: string;
  status?: string;
  tags?: string[];
  searchTerm?: string;
}

export interface SolutionSortOptions {
  field: 'title' | 'category' | 'priority' | 'lastUpdated';
  direction: 'asc' | 'desc';
}
