import { type Metadata } from 'next';
import { SimpleLayout } from '@/components/SimpleLayout';
import { Resume } from '@/components/Resume';
import { Projects } from '@/components/Projects';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'A glimpse into my professional experience.',
};

export default function Portfolio() {
  return (
    <SimpleLayout
      title="A glimpse into my professional experience."
      intro="I've been building software since 2012 and went professional in 2017. Though I specialize in building cloud-based web applications, I have dabbled in many technical disciplines across the stack and throughout the software development lifecycle."
    >
      <Projects />
      <Resume />
    </SimpleLayout>
  );
}
