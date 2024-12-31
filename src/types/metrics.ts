import { LucideIcon } from 'lucide-react';

export interface MetricCardStats {
  value: string;
  change?: string;
}

export interface MetricCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  subtitle: string;
  mainStats: {
    trend: string;
  };
  additionalStats: Record<string, MetricCardStats>;
  gradient: {
    border: string;
    bg: string;
    text: string;
  };
}

export interface Metrics {
  cards: MetricCardProps[];
  implementationTypes: Array<{
    name: string;
    count: number;
  }>;
  deploymentStatus: {
    active: number;
    development: number;
    planning: number;
  };
}
