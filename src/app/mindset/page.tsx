'use client';

import { BaseLayout } from '@/components/shared/BaseLayout';
import { Container } from '@/components/shared/Container';
import { Section, SectionHeader, SectionTitle } from '@/components/shared/Section';
import { GradientText } from '@/components/shared/GradientText';
import { Card } from '@/components/shared/Card';

export default function MindsetPage() {
  return (
    <BaseLayout>
      <Section className="pt-32">
        <Container>
          <SectionHeader>
            <SectionTitle>
              <GradientText>Cultural Mindset Change</GradientText>
            </SectionTitle>
          </SectionHeader>
          
          <div className="mt-12 space-y-8">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                <GradientText>Embracing Innovation</GradientText>
              </h3>
              <p className="text-gray-400">
                Strategies for cultivating an innovation-friendly culture
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                <GradientText>Change Management</GradientText>
              </h3>
              <p className="text-gray-400">
                Framework for managing organizational change
              </p>
            </Card>

            {/* Add more of your existing mindset content here */}
          </div>
        </Container>
      </Section>
    </BaseLayout>
  );
}
