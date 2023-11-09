import { type Metadata } from 'next';
import { SimpleLayout } from '@/components/SimpleLayout';
import { Resume } from '@/components/Resume';
import { Projects } from '@/components/Projects';
import { Button } from '@/components/Button';
import { ArrowDownIcon } from '@/components/Icons';
import { Skills } from '@/components/Skills';

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
      <Button
        href="/matt-kharrl-resume-11-2023.pdf"
        target="_blank"
        variant="secondary"
        className="group w-full sm:w-80"
      >
        Download Resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
      <Projects />
      <Resume />
      <Skills />
    </SimpleLayout>
  );
}
