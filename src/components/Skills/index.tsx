import { BadgeIcon } from '@/components/Icons';

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
        name: 'Bash',
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
        name: 'Nginx',
        proficiency: 'medium',
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
        name: 'Enzyme',
        proficiency: 'high',
      },
      {
        name: 'Testing Library',
        proficiency: 'high',
      },
      {
        name: 'GitHub Actions',
        proficiency: 'high',
      },
      {
        name: 'GitLab',
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
        proficiency: 'medium',
      },
      {
        name: 'Babel',
        proficiency: 'medium',
      },
      {
        name: 'ESlint',
        proficiency: 'medium',
      },
      {
        name: 'Docker',
        proficiency: 'medium',
      },
      {
        name: 'Kubernetes',
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
        name: 'Cypress',
        proficiency: 'medium',
      },
      {
        name: 'Selenium',
        proficiency: 'medium',
      },
      {
        name: 'Bitbucket Pipelines',
        proficiency: 'medium',
      },
      {
        name: 'Vite',
        proficiency: 'low',
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
        proficiency: 'medium',
      },
      {
        name: 'Akamai',
        proficiency: 'medium',
      },
      {
        name: 'Fastly',
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
        name: 'Vercel',
        proficiency: 'medium',
      },
      {
        name: 'Microsoft Azure',
        proficiency: 'low',
      },
      {
        name: 'Google Cloud Platform',
        proficiency: 'low',
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
        name: 'Public Speaking',
        proficiency: 'medium',
      },
      {
        name: 'Fundraising',
        proficiency: 'medium',
      },
      {
        name: 'Sales Engagements',
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
    <div
      className="mt-8 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
      data-testid="Skills"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BadgeIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Skills</span>
      </h2>
      {skillCategories.map((category) => (
        <>
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
        </>
      ))}
    </div>
  );
}
