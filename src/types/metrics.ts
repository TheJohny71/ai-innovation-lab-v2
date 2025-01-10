// src/types/metrics.ts
import { ComponentProps, ComponentType } from 'react';
import { LucideIcon } from 'lucide-react';

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
  borderHover: string;
  cardGradient: string;
  features: string[];
  backgroundColor?: string; // Optional background color for card
  accentColor?: string; // Optional accent color for icons/borders
  secondaryColor?: string; // Optional secondary color for gradients
  priority?: number; // Optional priority for sorting
  status?: 'active' | 'beta' | 'development'; // Optional status indicator
  tags?: string[]; // Optional tags for additional filtering
  lastUpdated?: string; // Optional timestamp for sorting by update
  detailedDescription?: string; // Optional longer description for expanded view
  links?: {
    // Optional related links
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
