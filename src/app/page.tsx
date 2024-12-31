'use client';

import { BaseLayout } from '@/components/shared/BaseLayout';
import { Container } from '@/components/shared/Container';
import { Section, SectionHeader, SectionTitle, SectionDescription } from '@/components/shared/Section';
import { GradientText } from '@/components/shared/GradientText';
import { Button } from '@/components/shared/Button';
import { Card } from '@/components/shared/Card';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <BaseLayout>
      {/* Hero Section */}
      <Section className="pt-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader>
              <SectionTitle>
                Welcome to <GradientText>AI Innovation Lab</GradientText>
              </SectionTitle>
              <SectionDescription>
                Transforming Legal Practice Through AI Innovation
              </SectionDescription>
              <div className="mt-8 flex justify-center gap-4">
                <Button size="lg">Get Started</Button>
                <Button variant="outline" size="lg">Learn More</Button>
              </div>
            </SectionHeader>
          </motion.div>
        </Container>
      </Section>

      {/* Main Content Section */}
      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card hover className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                <GradientText>AI-Powered Analysis</GradientText>
              </h3>
              <p className="text-gray-400">
                Advanced algorithms providing deep insights and predictions for legal practice
              </p>
            </Card>
            <Card hover className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                <GradientText>Innovation Framework</GradientText>
              </h3>
              <p className="text-gray-400">
                Structured approach to implementing AI solutions in legal workflows
              </p>
            </Card>
            <Card hover className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                <GradientText>Cultural Transformation</GradientText>
              </h3>
              <p className="text-gray-400">
                Guidance for embracing AI-driven change in legal organizations
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </BaseLayout>
  );
}
