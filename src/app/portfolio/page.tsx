import { type Metadata } from 'next';
import { SimpleLayout } from '@/components/SimpleLayout';
import { Resume } from '@/components/Resume';
import { Projects } from '@/components/Projects';
import { Button } from '@/components/Button';
import { ArrowDownIcon, MailIcon } from '@/components/Icons';
import { Skills } from '@/components/Skills';
import { InlineBadge } from '@/components/InlineBadge';
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
      <div className="text-md mt-4 flex items-center font-semibold text-zinc-900 dark:text-zinc-100">
        Job Status:{' '}
        <InlineBadge className="ml-2">
          <span className="relative mr-1.5 flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-300 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-400"></span>
          </span>
          <div className="flex items-center justify-center">
            <p className="whitespace-nowrap">Searching For Opportunities</p>
          </div>
        </InlineBadge>
      </div>
      <span className="isolate mt-4 inline-flex rounded-md shadow-sm">
        <Button
          href="/resume.pdf"
          target="_blank"
          variant="secondary"
          className="group mr-2 sm:w-60"
        >
          Download Resume
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
        <Button
          href="mailto:matt@kharrl.com"
          target="_blank"
          variant="secondary"
          className="group sm:w-60"
        >
          Contact Me
          <MailIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </span>
      <Projects />
      <Resume />
      <Skills />
      <References />
    </SimpleLayout>
  );
}
