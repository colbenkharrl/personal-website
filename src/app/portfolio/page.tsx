import { type Metadata } from 'next';
import { SimpleLayout } from '@/components/SimpleLayout';
import { Resume } from '@/components/Resume';
import { Projects } from '@/components/Projects';
import { Button } from '@/components/Button';
import { ArrowDownIcon, MailIcon } from '@/components/Icons';
import { Skills } from '@/components/Skills';
import { References } from '@/components/References';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'A glimpse into my professional experience.',
};

export default function Portfolio() {
  return (
    <SimpleLayout
      title="A glimpse into my professional experience."
      intro="I've been building software since 2012. Though I specialize in building cloud-based web applications, I have dabbled in many technical disciplines across the stack and throughout the software development lifecycle."
    >
      <Projects />
      <Resume />
      <Skills />
      <References />
    </SimpleLayout>
  );
}
