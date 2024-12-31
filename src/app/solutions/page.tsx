'use client';

import { BaseLayout } from '@/components/shared/BaseLayout';
import { Container } from '@/components/shared/Container';
import { Section, SectionHeader, SectionTitle } from '@/components/shared/Section';
import { GradientText } from '@/components/shared/GradientText';
import { Card } from '@/components/shared/Card';

export default function SolutionsPage() {
  return (
    <BaseLayout>
      <Section className="pt-32">
        <Container>
          <SectionHeader>
            <SectionTitle>
              <GradientText>AI Solutions</GradientText>
            </SectionTitle>
          </SectionHeader>
          
          <div className="mt-12 space-y-8">
            {/* Keep your existing solutions content structure */}
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                <GradientText>Document Review</GradientText>
              </h3>
              <p className="text-gray-400">
                AI-powered document review and analysis
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                <GradientText>Legal Research</GradientText>
              </h3>
              <p className="text-gray-400">
                Advanced legal research capabilities
              </p>
            </Card>

            {/* Add more of your existing solutions here */}
          </div>
        </Container>
      </Section>
    </BaseLayout>
  );
}
