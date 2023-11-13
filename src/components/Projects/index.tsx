import { Card } from '@/components/Card';
import logoSpec from '@/images/logos/spec.svg';
import logoPortfolio from '@/images/logos/portfolio.png';
import logoConfluence from '@/images/logos/confluence.svg';
import logoAtlassian from '@/images/logos/atlassian.svg';
import logoAlexa from '@/images/logos/alexa.png';
import logoSynergy from '@/images/logos/synergy.png';
import logoThreatMetrix from '@/images/logos/threatmetrix.png';
import logoBlitz from '@/images/logos/blitz.png';
import { LinkIcon, RocketIcon } from '@/components/Icons';
import Image from 'next/image';

const projects = [
  {
    name: 'Trust Cloud',
    description:
      "Spec's Trust Cloud is a real-time security defense platform that is currently protecting the web traffic of some of the largest brands in the world. As the founding engineer, I designed and developed their enterprise security defense web application, then went on to build and lead the entire engineering and compliance organizations.",
    link: { href: 'https://specprotected.com/', label: 'specprotected.com' },
    logo: logoSpec,
  },
  {
    name: 'Confluence',
    description:
      'Confluence, an Atlassian product, is the most widely-used workplace documentation product in the world. I worked on the core navigation and discoverability features for their cloud-based web application, and also designed and built their automated, interactive, and multi-stage release pipeline.',
    link: {
      href: 'https://www.atlassian.com/software/confluence',
      label: 'atlassian.com',
    },
    logo: logoConfluence,
  },
  {
    name: 'Atlassian Navigation',
    description:
      'Atlassian Navigation is a core component of the Atlassian design system, which is utilized across all of their cloud products. I worked with a special project team to research, design, develop, and integrate this navigation experience and all associated components.',
    link: {
      href: 'https://atlassian.design/components/atlassian-navigation/examples',
      label: 'atlassian.design',
    },
    logo: logoAtlassian,
  },
  {
    name: 'Echo Show',
    description:
      "Amazon's Echo Show is their only Alexa-enabled household device with a screen. I developed an internal web application which enabled marketers and brand partners to create, schedule, and deploy advertising campaigns to devices worldwide in the form of custom camera filters.",
    link: {
      href: 'https://www.amazon.com/echo/s?k=echo+show',
      label: 'amazon.com',
    },
    logo: logoAlexa,
  },
  {
    name: 'ThreatMetrix ID',
    description:
      "ThreatMetrix ID was the fraud industry's first dynamic representation of digital identities on the internet. I designed and developed an interactive graph visualization which allows fraud analysts to inspect the complex history of user behavior on the web across many websites and devices.",
    link: {
      href: 'https://risk.lexisnexis.com/products/threatmetrix',
      label: 'lexisnexis.com',
    },
    logo: logoThreatMetrix,
  },
  {
    name: 'Personal Portfolio',
    description:
      'The website you are browsing right now was built by me using modern web technologies. Over time I will likely test out new libraries in this very over-engineered project. You can view the source code on my Github profile.',
    link: {
      href: 'https://github.com/colbenkharrl/personal-website',
      label: 'github.com',
    },
    logo: logoPortfolio,
  },
  {
    name: 'Synergy SIS',
    description:
      'The Synergy Student Information System, developed by Edupoint, provides end-to-end educational management services for K-12 schools across the United States. I worked on their .NET platform and focused on enhancements to their administrative reporting framework.',
    link: {
      href: 'https://edupoint.com/Products/Student-Information-Management',
      label: 'edupoint.com',
    },
    logo: logoSynergy,
  },
  {
    name: 'Blitz Racing Cycling Club',
    description:
      'Blitz Racing is the cycling club for which I race bikes. I developed a simple landing page for our team where we can share information about our events, sponsors, and results.',
    link: {
      href: 'https://blitzracingcc.com/',
      label: 'blitzracingcc.com',
    },
    logo: logoBlitz,
  },
];

export function Projects() {
  return (
    <div
      className="my-8 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
      data-testid="Projects"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <RocketIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Projects & Products</span>
      </h2>
      <ul
        role="list"
        className="mt-8 grid grid-cols-1 gap-x-12 gap-y-16 p-4 sm:grid-cols-2 lg:grid-cols-3"
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
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-orange-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </div>
  );
}
