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

export default function FutureReadyPage() {
  return (
    <BaseLayout>
      <Section className="pt-32">
        <Container>
          <SectionHeader>
            <SectionTitle>
              <GradientText>Future-Ready Solutions</GradientText>
            </SectionTitle>
          </SectionHeader>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card hover className="p-6">
              <h3 className="mb-4 text-xl font-semibold">
                <GradientText>AI Integration</GradientText>
              </h3>
              <p className="mb-4 text-gray-400">
                Advanced AI solutions for future-ready legal practices
              </p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </Card>

            <Card hover className="p-6">
              <h3 className="mb-4 text-xl font-semibold">
                <GradientText>Digital Transformation</GradientText>
              </h3>
              <p className="mb-4 text-gray-400">
                Comprehensive digital transformation strategies
              </p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </Card>

            <Card hover className="p-6">
              <h3 className="mb-4 text-xl font-semibold">
                <GradientText>Innovation Framework</GradientText>
              </h3>
              <p className="mb-4 text-gray-400">
                Structured approach to future-ready implementation
              </p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </Card>
          </div>
        </Container>
      </Section>
    </BaseLayout>
  );
}
