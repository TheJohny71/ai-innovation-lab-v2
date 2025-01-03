'use client';

import { BaseLayout } from '@/components/shared/BaseLayout';
import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { WelcomeSvg } from '@/components/shared/WelcomeSvg';

export default function WelcomePage() {
  return (
    <BaseLayout>
      <Section className="relative min-h-screen flex items-center justify-center">
        <Container>
          <WelcomeSvg />
        </Container>
      </Section>
    </BaseLayout>
  );
}
