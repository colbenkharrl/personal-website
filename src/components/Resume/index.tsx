import logoAtlassian from '@/images/logos/atlassian.svg';
import logoSpec from '@/images/logos/spec.svg';
import logoAmazon from '@/images/logos/amazon.png';
import logoThreatMetrix from '@/images/logos/threatmetrix.png';
import logoEdupoint from '@/images/logos/synergy.png';
import logoApple from '@/images/logos/apple.png';
import logoCatio from '@/images/logos/catio.png';
import logoDiscord from '@/images/logos/discord.png';
import { Role } from '@/components/Role';
import { BriefcaseIcon } from '@/components/Icons';
import { PortfolioSection } from '../PortfolioSection';

const resume: Array<Role> = [
  {
    company: 'Discord',
    title: 'Senior Software Engineer',
    logo: logoDiscord,
    start: '2025',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear().toString(),
    },
    url: 'https://discord.com/',
    duration: 'ongoing',
  },
  {
    company: 'Catio',
    title: 'Lead Fullstack Engineer',
    logo: logoCatio,
    start: '2023',
    end: '2025',
    url: 'https://www.linkedin.com/company/catiotech/',
    duration: '1 year',
  },
  {
    company: 'Spec',
    title: 'Founding Software Engineer, VP of Engineering',
    logo: logoSpec,
    start: '2020',
    end: '2023',
    url: 'https://specprotected.com/',
    duration: '3 years',
  },
  {
    company: 'Atlassian',
    title: 'Software Engineer',
    logo: logoAtlassian,
    start: '2018',
    end: '2020',
    url: 'https://atlassian.com/',
    duration: '2 years',
  },
  {
    company: 'Amazon',
    title: 'Software Engineering Intern',
    logo: logoAmazon,
    start: '2018',
    end: '2018',
    url: 'https://amazon.com/',
    duration: '4 months',
  },
  {
    company: 'ThreatMetrix',
    title: 'Software Engineer',
    logo: logoThreatMetrix,
    start: '2017',
    end: '2018',
    url: 'https://risk.lexisnexis.com/products/threatmetrix',
    duration: '1 year',
  },
  {
    company: 'Edupoint',
    title: 'Software Engineering Intern',
    logo: logoEdupoint,
    start: '2017',
    end: '2017',
    url: 'https://www.edupoint.com/',
    duration: '4 months',
  },
  {
    company: 'Apple',
    title: 'Technical Advisor',
    logo: logoApple,
    start: '2015',
    end: '2016',
    url: 'https://apple.com/',
    duration: '1 year',
  },
];

export function Resume() {
  return (
    <PortfolioSection title="Work" Icon={BriefcaseIcon}>
      <ol className="mt-6 space-y-4" role="list">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
    </PortfolioSection>
  );
}
