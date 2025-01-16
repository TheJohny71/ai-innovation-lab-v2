'use client';

export const metadata = {
  title: 'Future Ready | Innovation Platform',
  description: 'Preparing for the future of legal practice',
};

export const viewport = {
  themeColor: '#0F172A',
};

import React from 'react';
import { BaseLayout } from '@/components/shared/BaseLayout';
import { Container } from '@/components/shared/Container';
import {
  Section,
  SectionHeader,
  SectionTitle,
} from '@/components/shared/Section';
import { GradientText } from '@/components/shared/GradientText';
import { Card } from '@/components/shared/Card';
import { Clock } from 'lucide-react';

export default function FutureReadyPage() {
  return (
    <BaseLayout>
      <div className="relative h-full overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-900/80" />

        <Section className="flex h-[calc(100vh-200px)] items-center justify-center">
          <Container>
            <Card className="mx-auto max-w-2xl p-12 text-center">
              <Clock className="mx-auto mb-6 h-16 w-16 text-blue-400" />
              <SectionTitle>
                <GradientText className="from-purple-400 via-blue-400 to-teal-400">
                  Future Ready
                </GradientText>
              </SectionTitle>
              <p className="mt-6 text-xl text-gray-400">
                Our vision for the future of legal practice is coming soon.
              </p>
              <p className="mt-4 text-sm text-gray-500">
                We&apos;re preparing something exciting. Check back later for
                updates.
              </p>
            </Card>
          </Container>
        </Section>
      </div>
    </BaseLayout>
  );
}
