// src/app/page.tsx
import { Header } from '@/components/shared/Header';
import { Container } from '@/components/shared/Container';
import { Section, SectionHeader, SectionTitle, SectionDescription } from '@/components/shared/Section';
import { GradientText } from '@/components/shared/GradientText';
import { Button } from '@/components/shared/Button';
import { Card } from '@/components/shared/Card';

export default function Home() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <Section className="pt-32">
        <Container>
          <SectionHeader>
            <SectionTitle>
              Welcome to <GradientText>AI Innovation Lab</GradientText>
            </SectionTitle>
            <SectionDescription>
              Explore the future of AI with cutting-edge tools and technologies
            </SectionDescription>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg">Get Started</Button>
              <Button variant="outline" size="lg">Learn More</Button>
            </div>
          </SectionHeader>
        </Container>
      </Section>

      {/* Features Section */}
      {/* Add features section */}

      {/* About Section */}
      {/* Add about section */}

      {/* Contact Section */}
      {/* Add contact section */}
    </main>
  );
}
