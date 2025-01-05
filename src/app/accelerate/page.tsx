'use client';

import { BaseLayout } from '@/components/shared/BaseLayout';
import { Container } from '@/components/shared/Container';
import {
  Section,
  SectionHeader,
  SectionTitle,
} from '@/components/shared/Section';
import { GradientText } from '@/components/shared/GradientText';
import { Card } from '@/components/shared/Card';
import { Button } from '@/components/shared/Button';

const solutions = [
  {
    title: 'Document Analysis',
    description:
      'AI-powered document review and analysis for improved efficiency',
    gradient: 'from-purple-400 to-blue-400',
  },
  {
    title: 'Legal Research',
    description: 'Advanced research capabilities powered by machine learning',
    gradient: 'from-blue-400 to-teal-400',
  },
  {
    title: 'Contract Management',
    description: 'Automated contract review and management solutions',
    gradient: 'from-teal-400 to-cyan-400',
  },
  {
    title: 'Knowledge Management',
    description: 'AI-enhanced knowledge sharing and organization',
    gradient: 'from-cyan-400 to-purple-400',
  },
];

export default function SolutionsPage() {
  return (
    <BaseLayout>
      <Section className="pt-32">
        <Container>
          <SectionHeader>
            <SectionTitle>
              <GradientText className="from-purple-400 via-blue-400 to-teal-400">
                AI Solutions
              </GradientText>
            </SectionTitle>
            <p className="mt-6 text-xl text-gray-400">
              Innovative AI solutions for modern challenges
            </p>
          </SectionHeader>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {solutions.map((solution, index) => (
              <Card key={index} hover className="p-8">
                <h3 className="mb-4 text-2xl font-semibold">
                  <GradientText className={solution.gradient}>
                    {solution.title}
                  </GradientText>
                </h3>
                <p className="mb-6 text-gray-400">{solution.description}</p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </BaseLayout>
  );
}
