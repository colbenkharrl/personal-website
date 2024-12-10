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
      <div className="flex flex-col items-center space-x-0 space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
        <Button
          href="/resume.pdf"
          target="_blank"
          variant="secondary"
          className="group w-full sm:w-80 "
        >
          Download Resume
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
        <Button
          href="mailto:matt@kharrl.com"
          target="_blank"
          variant="secondary"
          className="group w-full sm:w-60"
        >
          Contact Me
          <MailIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </div>
      <Projects />
      <Resume />
      <Skills />
      <References />
    </SimpleLayout>
  );
}
