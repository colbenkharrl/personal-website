import logoAirbnb from '@/images/logos/airbnb.svg';
import logoFacebook from '@/images/logos/facebook.svg';
import logoPlanetaria from '@/images/logos/planetaria.svg';
import logoStarbucks from '@/images/logos/starbucks.svg';
import { Role } from './Role';
import { ArrowDownIcon, BriefcaseIcon } from './Icons';
import { Button } from './Button';

export function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Spec',
      title: 'VP of Engineering',
      logo: logoPlanetaria,
      start: '2020',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Atlassian',
      title: 'Software Engineer',
      logo: logoAirbnb,
      start: '2018',
      end: '2020',
    },
    {
      company: 'Amazon',
      title: 'Software Engineering Intern',
      logo: logoFacebook,
      start: '2018',
      end: '2018',
    },
    {
      company: 'ThreatMetrix',
      title: 'Software Engineer',
      logo: logoStarbucks,
      start: '2017',
      end: '2018',
    },
    {
      company: 'Edupoint',
      title: 'Software Engineering Intern',
      logo: logoStarbucks,
      start: '2017',
      end: '2017',
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  );
}
