interface Solution {
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
    integration: string;
    deployment: string;
  };
}
