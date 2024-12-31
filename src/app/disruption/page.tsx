'use client';

import { BaseLayout } from '@/components/shared/BaseLayout';
import { Container } from '@/components/shared/Container';
import { Section, SectionHeader, SectionTitle } from '@/components/shared/Section';
import { GradientText } from '@/components/shared/GradientText';
import { Card } from '@/components/shared/Card';

export default function DisruptionPage() {
  return (
    <BaseLayout>
      <Section className="pt-32">
        <Container>
          <SectionHeader>
            <SectionTitle>
              <GradientText>Law Firm AI Disruption Index</GradientText>
            </SectionTitle>
          </SectionHeader>
          
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Metrics Cards */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Impact Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Efficiency Gain</span>
                  <span className="text-blue-400">85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Cost Reduction</span>
                  <span className="text-teal-400">62%</span>
                </div>
                {/* Add more of your existing metrics here */}
              </div>
            </Card>

            {/* Implementation Types */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Implementation Types</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Document Analysis</li>
                <li>• Legal Research</li>
                <li>• Contract Review</li>
                {/* Add more of your existing implementation types */}
              </ul>
            </Card>
          </div>
        </Container>
      </Section>
    </BaseLayout>
  );
}
