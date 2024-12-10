import { Card } from '@/components/Card';
import logoSpec from '@/images/logos/spec.svg';
import logoCatio from '@/images/logos/catio.png';
import logoPortfolio from '@/images/logos/portfolio.png';
import logoConfluence from '@/images/logos/confluence.svg';
import logoAtlassian from '@/images/logos/atlassian.svg';
import logoAlexa from '@/images/logos/alexa.png';
import logoSynergy from '@/images/logos/synergy.png';
import logoThreatMetrix from '@/images/logos/threatmetrix.png';
import logoBlitz from '@/images/logos/blitz.png';
import { LinkIcon, RocketIcon } from '@/components/Icons';
import Image from 'next/image';
import { PortfolioSection } from '../PortfolioSection';

const projects = [
  {
    name: 'Catio',
    description:
      'As Lead Fullstack Engineer, I designed and developed the Catio Console, the primary user interface for the Catio tech evaluation and improvement platform. I led the creation of a high-performance web application using Next.js and a robust GraphQL API server, ensuring seamless integration and scalability. This initiative empowered organizations to effectively evaluate, plan, and evolve their tech architectures, enhancing visibility and decision-making across tech stacks. ',
    link: { href: 'https://catio.tech/', label: 'catio.tech' },
    logo: logoCatio,
  },
  {
    name: 'Spec',
    description:
      "Architected and implemented the enterprise security defense web application for Spec's defense platform, a real-time platform protecting web traffic for some of the largest global brands. Led the end-to-end development of a scalable, high-performance security solution, ensuring seamless integration and a smooth user experience. Built and managed both the engineering and compliance teams, driving the growth of a cutting-edge platform that significantly enhanced security and operational efficiency for enterprise clients.",
    link: { href: 'https://specprotected.com/', label: 'specprotected.com' },
    logo: logoSpec,
  },
  {
    name: 'Confluence',
    description:
      'Improved core navigation and discoverability features for Confluence, the world’s leading workplace documentation platform. Designed and implemented an automated, interactive, multi-stage release pipeline, streamlining deployment processes and significantly reducing release cycle time. Delivered scalable solutions that enhanced the overall user experience and operational efficiency for Confluence’s cloud-based web application.',
    link: {
      href: 'https://www.atlassian.com/software/confluence',
      label: 'atlassian.com',
    },
    logo: logoConfluence,
  },
  {
    name: 'Atlassian Navigation',
    description:
      'Collaborated with a cross-functional team to research, design, and develop Atlassian Navigation, a core component of the Atlassian design system used across all cloud products. Led the integration of navigation features and components, ensuring a seamless, consistent user experience across platforms. Delivered scalable, high-performance solutions that enhanced usability and streamlined navigation across Atlassian’s suite of products.',
    link: {
      href: 'https://atlassian.design/components/atlassian-navigation/examples',
      label: 'atlassian.design',
    },
    logo: logoAtlassian,
  },
  {
    name: 'Echo Show',
    description:
      'Developed an internal web application that empowered marketers and brand partners to create, schedule, and deploy custom advertising campaigns to Amazon Echo Show devices worldwide. The platform enabled the dynamic deployment of custom camera filters, enhancing advertising capabilities and providing a unique, engaging experience for users. Delivered a scalable, user-friendly solution that streamlined campaign management and boosted brand visibility.',
    link: {
      href: 'https://www.amazon.com/echo/s?k=echo+show',
      label: 'amazon.com',
    },
    logo: logoAlexa,
  },
  {
    name: 'ThreatMetrix ID',
    description:
      "Designed and developed an interactive graph visualization for ThreatMetrix ID, the fraud industry's first dynamic representation of digital identities. The tool enabled fraud analysts to visually inspect and analyze complex user behavior across multiple websites and devices, providing deeper insights into digital identity patterns. Delivered a scalable solution that enhanced fraud detection capabilities and empowered analysts to make data-driven decisions.",
    link: {
      href: 'https://risk.lexisnexis.com/products/threatmetrix',
      label: 'lexisnexis.com',
    },
    logo: logoThreatMetrix,
  },
  {
    name: 'Personal Portfolio',
    description:
      'This website was built by me using modern web technologies, showcasing my expertise in creating dynamic, responsive web applications. As part of my ongoing development, I continually experiment with new libraries and tools, ensuring the project remains innovative and cutting-edge. Feel free to explore the source code on my GitHub profile to see the technologies and techniques I use to craft high-quality web experiences.',
    link: {
      href: 'https://github.com/colbenkharrl/personal-website',
      label: 'github.com',
    },
    logo: logoPortfolio,
  },
  {
    name: 'Synergy SIS',
    description:
      'Contributed to Synergy, a comprehensive K-12 educational management platform, by enhancing its .NET-based administrative reporting framework. Focused on optimizing reporting features to provide more insightful, data-driven decision-making tools for school administrators. Delivered scalable solutions that improved system performance and reporting efficiency, supporting educational institutions across the U.S. with robust management capabilities.',
    link: {
      href: 'https://edupoint.com/Products/Student-Information-Management',
      label: 'edupoint.com',
    },
    logo: logoSynergy,
  },
  {
    name: 'Blitz Racing Cycling Club',
    description:
      'Volunteered to develop a landing page for Blitz Racing, the cycling club I race with, to help organize and promote community events. The site serves as a hub for sharing event details, sponsor information, and race results, fostering engagement and building visibility for the team. The platform has become an essential tool for coordinating club activities and strengthening connections within the cycling community.',
    link: {
      href: 'https://blitzracingcc.com/',
      label: 'blitzracingcc.com',
    },
    logo: logoBlitz,
  },
];

export function Projects() {
  return (
    <PortfolioSection title="Projects & Products" Icon={RocketIcon}>
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
    </PortfolioSection>
  );
}
