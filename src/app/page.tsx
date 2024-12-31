// src/app/page.tsx
import { Header } from '@/components/shared/Header';
import { Container } from '@/components/shared/Container';
import { Section, SectionHeader, SectionTitle, SectionDescription } from '@/components/shared/Section';
import { GradientText } from '@/components/shared/GradientText';
import { Button } from '@/components/shared/Button';
import { Card } from '@/components/shared/Card';
import { motion } from 'framer-motion';
import { 
  BeakerIcon,
  ChartBarIcon,
  CogIcon,
} from '@heroicons/react/24/solid'; // Changed from outline to solid

// Types for our components
type ButtonProps = {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  size?: 'default' | 'lg';
  className?: string;
};

type CardProps = {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
};

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

// Create a Feature type for our features array
type Feature = {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

// Main component
export default function Home() {
  // Features array moved inside the component to avoid hoisting issues
  const features: Feature[] = [
    {
      title: "AI-Powered Analysis",
      description: "Advanced algorithms providing deep insights and predictions",
      icon: BeakerIcon
    },
    {
      title: "Data Visualization",
      description: "Interactive and intuitive data visualization tools",
      icon: ChartBarIcon
    },
    {
      title: "Automation Tools",
      description: "Streamline your workflow with powerful automation features",
      icon: CogIcon
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
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
                Explore the future of AI with cutting-edge tools and technologies
              </SectionDescription>
              <div className="mt-8 flex justify-center gap-4">
                <Button size="lg">Get Started</Button>
                <Button variant="outline" size="lg">Learn More</Button>
              </div>
            </SectionHeader>
          </motion.div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section id="features">
        <Container>
          <SectionHeader>
            <SectionTitle>
              Powerful <GradientText>Features</GradientText>
            </SectionTitle>
            <SectionDescription>
              Discover the tools and capabilities that make our platform unique
            </SectionDescription>
          </SectionHeader>
          
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="h-full">
                  <feature.icon className="h-10 w-10 text-primary" />
                  <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* About Section */}
      <Section id="about" className="bg-muted/50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SectionTitle>About Our Lab</SectionTitle>
              <SectionDescription>
                We're pushing the boundaries of what's possible with AI technology.
                Our mission is to make advanced AI tools accessible to everyone.
              </SectionDescription>
              <Button className="mt-8">Learn More About Us</Button>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <Container>
          <SectionHeader>
            <SectionTitle>
              Get in <GradientText>Touch</GradientText>
            </SectionTitle>
            <SectionDescription>
              Have questions? We'd love to hear from you.
            </SectionDescription>
          </SectionHeader>
          
          <div className="mt-8 max-w-md mx-auto">
            <Card className="p-6">
              {/* Add contact form here */}
              <Button className="w-full">Send Message</Button>
            </Card>
          </div>
        </Container>
      </Section>
    </main>
  );
}