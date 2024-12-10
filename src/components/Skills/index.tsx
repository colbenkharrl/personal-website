import { BadgeIcon } from '@/components/Icons';
import { PortfolioSection } from '../PortfolioSection';
import { Fragment } from 'react';

export type Skill = {
  category: string;
  skills: {
    name: string;
    proficiency: 'high' | 'medium' | 'low';
  }[];
};

const skillCategories: Skill[] = [
  {
    category: 'Programming Languages',
    skills: [
      {
        name: 'TypeScript',
        proficiency: 'high',
      },
      {
        name: 'JavaScript',
        proficiency: 'high',
      },
      {
        name: 'Java',
        proficiency: 'high',
      },
      {
        name: 'C#',
        proficiency: 'high',
      },
      {
        name: 'SQL',
        proficiency: 'high',
      },
      {
        name: 'Bash',
        proficiency: 'high',
      },
      {
        name: 'Python',
        proficiency: 'medium',
      },
      {
        name: 'Swift',
        proficiency: 'medium',
      },
      {
        name: 'PHP',
        proficiency: 'medium',
      },
      {
        name: 'Ruby',
        proficiency: 'low',
      },
      {
        name: 'C++',
        proficiency: 'low',
      },
      {
        name: 'Objective-C',
        proficiency: 'low',
      },
    ],
  },
  {
    category: 'Frontend Technologies',
    skills: [
      {
        name: 'HTML',
        proficiency: 'high',
      },
      {
        name: 'CSS',
        proficiency: 'high',
      },
      {
        name: 'React',
        proficiency: 'high',
      },
      {
        name: 'Design Systems',
        proficiency: 'high',
      },
      {
        name: 'D3.js',
        proficiency: 'high',
      },
      {
        name: 'SVG',
        proficiency: 'high',
      },
      {
        name: 'Storybook',
        proficiency: 'high',
      },
      {
        name: 'Figma',
        proficiency: 'high',
      },
      {
        name: 'Next.js',
        proficiency: 'high',
      },
      {
        name: 'Tailwind CSS',
        proficiency: 'high',
      },
      {
        name: 'Bootstrap',
        proficiency: 'high',
      },
      {
        name: 'Sass',
        proficiency: 'high',
      },
      {
        name: 'Styled Components',
        proficiency: 'high',
      },
      {
        name: 'jQuery',
        proficiency: 'high',
      },
      {
        name: 'MDX',
        proficiency: 'high',
      },
      {
        name: 'GraphQL',
        proficiency: 'high',
      },
      {
        name: 'Apollo Client',
        proficiency: 'high',
      },
      {
        name: 'Angular',
        proficiency: 'medium',
      },
      {
        name: 'Redux',
        proficiency: 'medium',
      },
      {
        name: 'Gatsby',
        proficiency: 'medium',
      },
      {
        name: 'Vue',
        proficiency: 'low',
      },
      {
        name: 'Backbone',
        proficiency: 'low',
      },
      {
        name: 'PHP',
        proficiency: 'low',
      },
      {
        name: 'Svelte',
        proficiency: 'low',
      },
      {
        name: 'Ionic',
        proficiency: 'low',
      },
    ],
  },
  {
    category: 'Backend Technologies',
    skills: [
      {
        name: 'Node.js',
        proficiency: 'high',
      },
      {
        name: 'Express.js',
        proficiency: 'high',
      },
      {
        name: 'Next.js',
        proficiency: 'high',
      },
      {
        name: 'Apollo Server',
        proficiency: 'high',
      },
      {
        name: 'REST APIs',
        proficiency: 'high',
      },
      {
        name: 'GraphQL APIs',
        proficiency: 'high',
      },
      {
        name: 'WebSockets',
        proficiency: 'high',
      },
      {
        name: 'Nginx',
        proficiency: 'high',
      },
      {
        name: 'Serverless',
        proficiency: 'medium',
      },
      {
        name: 'Kafka',
        proficiency: 'medium',
      },
      {
        name: '.NET',
        proficiency: 'low',
      },
      {
        name: 'Ruby on Rails',
        proficiency: 'low',
      },
      {
        name: 'Spring',
        proficiency: 'low',
      },
      {
        name: 'Django',
        proficiency: 'low',
      },
      {
        name: 'Flask',
        proficiency: 'low',
      },
      {
        name: 'Tomcat',
        proficiency: 'low',
      },
    ],
  },
  {
    category: 'Database Technologies',
    skills: [
      {
        name: 'PostgreSQL',
        proficiency: 'high',
      },
      {
        name: 'MySQL',
        proficiency: 'high',
      },
      {
        name: 'DynamoDB',
        proficiency: 'high',
      },
      {
        name: 'MongoDB',
        proficiency: 'high',
      },
      {
        name: 'Microsoft SQL Server',
        proficiency: 'medium',
      },
      {
        name: 'Firebase',
        proficiency: 'medium',
      },
      {
        name: 'Oracle Database',
        proficiency: 'low',
      },
      {
        name: 'Cassandra',
        proficiency: 'low',
      },
      {
        name: 'Redis',
        proficiency: 'low',
      },
      {
        name: 'Elasticsearch',
        proficiency: 'low',
      },
    ],
  },
  {
    category: 'Build, Test, & Deploy Tools',
    skills: [
      {
        name: 'NPM',
        proficiency: 'high',
      },
      {
        name: 'Yarn',
        proficiency: 'high',
      },
      {
        name: 'Jest',
        proficiency: 'high',
      },
      {
        name: 'Cypress',
        proficiency: 'high',
      },
      {
        name: 'Enzyme',
        proficiency: 'high',
      },
      {
        name: 'Testing Library',
        proficiency: 'high',
      },
      {
        name: 'GitHub',
        proficiency: 'high',
      },
      {
        name: 'GitLab',
        proficiency: 'high',
      },
      {
        name: 'Bitbucket',
        proficiency: 'high',
      },
      {
        name: 'CircleCI',
        proficiency: 'high',
      },
      {
        name: 'Bamboo',
        proficiency: 'high',
      },
      {
        name: 'Webpack',
        proficiency: 'high',
      },
      {
        name: 'Babel',
        proficiency: 'high',
      },
      {
        name: 'ESlint',
        proficiency: 'high',
      },
      {
        name: 'Prettier',
        proficiency: 'high',
      },
      {
        name: 'Docker',
        proficiency: 'high',
      },
      {
        name: 'Kubernetes',
        proficiency: 'medium',
      },
      {
        name: 'Helm',
        proficiency: 'medium',
      },
      {
        name: 'ArgoCD',
        proficiency: 'medium',
      },
      {
        name: 'Terraform',
        proficiency: 'medium',
      },
      {
        name: 'AWS CloudFormation',
        proficiency: 'medium',
      },
      {
        name: 'Selenium',
        proficiency: 'medium',
      },
      {
        name: 'Vite',
        proficiency: 'medium',
      },
      {
        name: 'Travis CI',
        proficiency: 'low',
      },
      {
        name: 'Jenkins',
        proficiency: 'low',
      },
      {
        name: 'AWS CodeDeploy',
        proficiency: 'low',
      },
      {
        name: 'Maven',
        proficiency: 'low',
      },
      {
        name: 'Gradle',
        proficiency: 'low',
      },
    ],
  },
  {
    category: 'Cloud Infrastructure',
    skills: [
      {
        name: 'Amazon Web Services',
        proficiency: 'high',
      },
      {
        name: 'Cloudflare',
        proficiency: 'high',
      },
      {
        name: 'Akamai',
        proficiency: 'high',
      },
      {
        name: 'Fastly',
        proficiency: 'high',
      },
      {
        name: 'Vercel',
        proficiency: 'high',
      },
      {
        name: 'Google Cloud Platform',
        proficiency: 'medium',
      },
      {
        name: 'Heroku',
        proficiency: 'medium',
      },
      {
        name: 'DigitalOcean',
        proficiency: 'medium',
      },
      {
        name: 'Microsoft Azure',
        proficiency: 'low',
      },
    ],
  },
  {
    category: 'Identity Platforms',
    skills: [
      {
        name: 'Auth0',
        proficiency: 'high',
      },
      {
        name: 'AWS Cognito',
        proficiency: 'high',
      },
      {
        name: 'JWT',
        proficiency: 'high',
      },
      {
        name: 'OAuth',
        proficiency: 'high',
      },
      {
        name: 'OpenID Connect',
        proficiency: 'medium',
      },
      {
        name: 'Okta',
        proficiency: 'medium',
      },
      {
        name: 'SAML',
        proficiency: 'medium',
      },
      {
        name: 'LDAP',
        proficiency: 'medium',
      },
    ],
  },
  {
    category: 'Management & Leadership',
    skills: [
      {
        name: 'Engineering Management',
        proficiency: 'high',
      },
      {
        name: 'Technology Strategy',
        proficiency: 'high',
      },
      {
        name: 'Agile Development',
        proficiency: 'high',
      },
      {
        name: 'Employee Development',
        proficiency: 'high',
      },
      {
        name: 'Technical Recruiting',
        proficiency: 'high',
      },
      {
        name: 'Headcount Planning',
        proficiency: 'high',
      },
      {
        name: 'Project Management',
        proficiency: 'high',
      },
      {
        name: 'Vendor Management',
        proficiency: 'high',
      },
      {
        name: 'Compliance',
        proficiency: 'high',
      },
      {
        name: 'Product Management',
        proficiency: 'medium',
      },
      {
        name: 'Investor Relations',
        proficiency: 'medium',
      },
      {
        name: 'Employee Experience',
        proficiency: 'medium',
      },
      {
        name: 'Budget Management',
        proficiency: 'medium',
      },
      {
        name: 'Mergers & Acquisitions',
        proficiency: 'low',
      },
    ],
  },
  {
    category: 'Communication',
    skills: [
      {
        name: 'Verbal Communication',
        proficiency: 'high',
      },
      {
        name: 'Technical Documentation',
        proficiency: 'high',
      },
      {
        name: 'Knowledgebase Management',
        proficiency: 'high',
      },
      {
        name: 'Sales Engagements',
        proficiency: 'high',
      },
      {
        name: 'Public Speaking',
        proficiency: 'medium',
      },
      {
        name: 'Fundraising',
        proficiency: 'medium',
      },
      {
        name: 'Podcasts',
        proficiency: 'low',
      },
    ],
  },
];

export function Skills() {
  return (
    <PortfolioSection title="Skills" Icon={BadgeIcon}>
      <h3 className="mt-4 flex text-xs font-semibold text-zinc-900 dark:text-zinc-100">
        Legend
      </h3>
      <div className="mt-2">
        <span
          className={`mb-1 me-1 inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-300/20`}
        >
          High Proficiency
        </span>
        <span
          className={`mb-1 me-1 inline-flex items-center rounded-md bg-sky-50 px-2 py-1 text-xs font-medium text-sky-700 ring-1 ring-inset ring-sky-600/20 dark:bg-sky-500/10 dark:text-sky-400 dark:ring-sky-300/20`}
        >
          Some Experience
        </span>
        <span
          className={`mb-1 me-1 inline-flex items-center rounded-md bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700 ring-1 ring-inset ring-amber-600/20 dark:bg-amber-500/10 dark:text-amber-400 dark:ring-amber-300/20`}
        >
          Some Exposure
        </span>
      </div>
      <hr className="mt-5" />
      {skillCategories.map((category) => (
        <Fragment key={category.category}>
          <h3
            key={category.category}
            className="mt-4 flex text-xs font-semibold text-zinc-900 dark:text-zinc-100"
          >
            {category.category}
          </h3>
          <div className="mt-2">
            {category.skills.map(({ name, proficiency }) => {
              return (
                <span
                  key={name}
                  className={`mb-1 me-1 inline-flex items-center rounded-md ${
                    proficiency === 'high'
                      ? 'bg-emerald-50 dark:bg-emerald-500/10'
                      : proficiency === 'medium'
                      ? 'bg-sky-50 dark:bg-sky-500/10'
                      : 'bg-amber-50 dark:bg-amber-500/10'
                  } px-2 py-1 text-xs font-medium ${
                    proficiency === 'high'
                      ? 'text-emerald-700 dark:text-emerald-400'
                      : proficiency === 'medium'
                      ? 'text-sky-700 dark:text-sky-400'
                      : 'text-amber-700 dark:text-amber-400'
                  } ring-1 ring-inset ${
                    proficiency === 'high'
                      ? 'ring-emerald-600/20 dark:ring-emerald-300/20'
                      : proficiency === 'medium'
                      ? 'ring-sky-600/20 dark:ring-sky-300/20'
                      : 'ring-amber-600/20 dark:ring-amber-300/20'
                  }`}
                >
                  {name}
                </span>
              );
            })}
          </div>
        </Fragment>
      ))}
    </PortfolioSection>
  );
}
