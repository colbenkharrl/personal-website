import logoAtlassian from '@/images/logos/atlassian.svg';
import logoSpec from '@/images/logos/spec.svg';
import logoAmazon from '@/images/logos/amazon.png';
import logoThreatMetrix from '@/images/logos/threatmetrix.png';
import logoEdupoint from '@/images/logos/synergy.png';
import logoApple from '@/images/logos/apple.png';
import { Role } from '@/components/Role';
import { BriefcaseIcon } from '@/components/Icons';

const resume: Array<Role> = [
  {
    company: 'Spec',
    title: 'Founding Engineer, Head of Engineering',
    logo: logoSpec,
    start: '2020',
    end: '2023',
    url: 'https://specprotected.com/',
  },
  {
    company: 'Atlassian',
    title: 'Software Engineer',
    logo: logoAtlassian,
    start: '2018',
    end: '2020',
    url: 'https://atlassian.com/',
  },
  {
    company: 'Amazon',
    title: 'Software Engineering Intern',
    logo: logoAmazon,
    start: '2018',
    end: '2018',
    url: 'https://amazon.com/',
  },
  {
    company: 'ThreatMetrix',
    title: 'Software Engineer',
    logo: logoThreatMetrix,
    start: '2017',
    end: '2018',
    url: 'https://risk.lexisnexis.com/products/threatmetrix',
  },
  {
    company: 'Edupoint',
    title: 'Software Engineering Intern',
    logo: logoEdupoint,
    start: '2017',
    end: '2017',
    url: 'https://www.edupoint.com/',
  },
  {
    company: 'Apple',
    title: 'Technical Advisor',
    logo: logoApple,
    start: '2015',
    end: '2016',
    url: 'https://apple.com/',
  },
];

export function Resume() {
  return (
    <div
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
      data-testid="Resume"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4" role="list">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
    </div>
  );
}
