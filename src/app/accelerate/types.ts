export interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  gradient: string;
  textColor: string;
  cardGradient: string;
  borderHover: string;
  features: string[];
  details: {
    overview: string;
    benefits: string[];
  };
  status: 'active' | 'development';
}

export function isSolution(value: unknown): value is Solution {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'title' in value &&
    'subtitle' in value &&
    'description' in value &&
    'category' in value &&
    'gradient' in value &&
    'textColor' in value &&
    'cardGradient' in value &&
    'borderHover' in value &&
    'features' in value &&
    Array.isArray((value as Solution).features) &&
    'details' in value &&
    typeof (value as Solution).details === 'object' &&
    'overview' in (value as Solution).details &&
    'benefits' in (value as Solution).details &&
    Array.isArray((value as Solution).details.benefits) &&
    'status' in value &&
    ((value as Solution).status === 'active' ||
      (value as Solution).status === 'development')
  );
}
