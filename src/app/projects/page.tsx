import { type Metadata } from 'next';
import Image from 'next/image';

import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';
import logoSpec from '@/images/logos/spec.svg';
import logoPortfolio from '@/images/logos/portfolio.png';
import logoConfluence from '@/images/logos/confluence.svg';
import logoAlexa from '@/images/logos/alexa.png';
import logoSynergy from '@/images/logos/synergy.png';
import logoThreatMetrix from '@/images/logos/threatmetrix.png';
import logoBlitz from '@/images/logos/blitz.png';
import { LinkIcon } from '@/components/Icons';

const projects = [
  {
    name: 'Personal Portfolio',
    description: 'To be completed.',
    link: { href: 'https://matt.kharrl.com', label: 'matt.kharrl.com' },
    logo: logoPortfolio,
  },
  {
    name: 'Spec Trust Cloud',
    description: 'To be completed.',
    link: { href: 'https://specprotected.com/', label: 'specprotected.com' },
    logo: logoSpec,
  },
  {
    name: 'Confluence Cloud',
    description: 'To be completed.',
    link: {
      href: 'https://www.atlassian.com/software/confluence',
      label: 'atlassian.com',
    },
    logo: logoConfluence,
  },
  {
    name: 'Amazon Echo Show',
    description: 'To be completed.',
    link: {
      href: 'https://www.amazon.com/echo/s?k=echo+show',
      label: 'amazon.com',
    },
    logo: logoAlexa,
  },
  {
    name: 'ThreatMetrix ID',
    description: 'To be completed.',
    link: {
      href: 'https://risk.lexisnexis.com/products/threatmetrix',
      label: 'lexisnexis.com',
    },
    logo: logoThreatMetrix,
  },
  {
    name: 'Blitz Racing Club',
    description: 'To be completed.',
    link: {
      href: 'https://blitzracingcc.com/',
      label: 'blitzracingcc.com',
    },
    logo: logoBlitz,
  },
  {
    name: 'Synergy SIS',
    description: 'To be completed.',
    link: {
      href: 'https://edupoint.com/Products/Student-Information-Management',
      label: 'edupoint.com',
    },
    logo: logoSynergy,
  },
];

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects and products I have developed throughout my career.',
};

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects and products I have developed throughout my career."
      intro="To be completed."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-sky-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  );
}
