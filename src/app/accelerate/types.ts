// src/app/accelerate/types.ts

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
}

export function isSolution(obj: any): obj is Solution {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof obj.id === 'string' &&
    typeof obj.title === 'string' &&
    typeof obj.subtitle === 'string' &&
    typeof obj.description === 'string' &&
    typeof obj.category === 'string' &&
    typeof obj.gradient === 'string' &&
    typeof obj.textColor === 'string' &&
    typeof obj.cardGradient === 'string' &&
    typeof obj.borderHover === 'string' &&
    Array.isArray(obj.features) &&
    typeof obj.details === 'object' &&
    obj.details !== null &&
    typeof obj.details.overview === 'string' &&
    Array.isArray(obj.details.benefits)
  );
}
