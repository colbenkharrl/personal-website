'use client';

import { ChatIcon } from '@/components/Icons';
import { PortfolioSection } from '../PortfolioSection';
import { FC, useCallback, useMemo, useState } from 'react';
import { Button } from '../Button';

export type Reference = {
  author: string;
  title: string;
  company: string;
  authorLinkedIn: string;
  companyLinkedIn: string;
  content: string;
  date: Date;
};

export const references: Reference[] = [
  {
    author: 'Dean Weinert',
    title: 'VP of Product Management',
    company: 'ThreatMetrix',
    authorLinkedIn: 'https://www.linkedin.com/in/deanweinert/',
    companyLinkedIn: 'https://www.linkedin.com/company/threatmetrix/',
    content:
      "Matt fulfilled an internship at ThreatMetrix under my supervision during the summer of 2017. During that time, I developed a high regard for Matt based on the outstanding contributions he made on several high-profile projects.\nHe demonstrated that he is technically capable with a wide array of languages and concepts. He also demonstrated a desire to learn, and successfully completed several online training courses specific to the projects he was assigned.\nHe was reliable, punctual and professional in all interactions within the organization. He made many friends here and we would be delighted to invite him back at any time.\nMatt’s core responsibilities included designing, prototyping and developing a web-based visualization to aid analysts identify positive and negative behavioral patterns during manual fraud review. The project was so successful and the code was of such a high standard that we deployed it directly to our production environment where it is actively being used by thousands of customers with very positive feedback.\nThe project was finished remarkably ahead of schedule, and as a result, I assigned him a second project to develop a cross platform mobile application to aid with prototyping risk-based authentication methods. This project was also successfully delivered and will become the foundation for several initiatives we have scheduled.\nI'm very impressed with Matt, and give him my strongest recommendation for roles which require intelligence, persistence and a positive attitude.\nPlease feel free to contact me if you require additional information or perspective.",
    date: new Date('2017-10-03'),
  },
];

export const Reference: FC<{ reference: Reference }> = ({ reference }) => {
  const [expanded, setExpanded] = useState(false);

  const clickHandler = useCallback(
    () => setExpanded((expanded) => !expanded),
    [],
  );

  const content = useMemo(
    () =>
      expanded || reference.content.length <= 300
        ? reference.content
        : `${reference.content.slice(0, 300)}...`,
    [expanded, reference],
  );

  return (
    <li
      className="flex-column text-sm text-zinc-900 dark:text-zinc-100"
      key={reference.author}
    >
      <div className="flex min-w-0 justify-between gap-x-4 gap-x-6 py-5">
        <a href={reference.authorLinkedIn}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-12 w-12 flex-none rounded-full bg-gray-50"
            src="https://media.licdn.com/dms/image/C5603AQFVgZM5cPo8zQ/profile-displayphoto-shrink_100_100/0/1581035120375?e=1705536000&v=beta&t=NzNXAKI6m9egMfLRF3ZOsuMXLc3kh67AGHOiowCF6cM"
            alt=""
          />
        </a>
        <div className="min-w-0 flex-auto">
          <p className="text-sm leading-6">
            <a
              className="font-semibold underline"
              href={reference.authorLinkedIn}
            >
              {reference.author}
            </a>
            , {reference.title} at{' '}
            <a
              className="font-semibold underline"
              href={reference.companyLinkedIn}
            >
              {reference.company}
            </a>
          </p>
          <p className="mt-1 truncate  leading-5">
            Written {reference.date.toLocaleDateString()}
          </p>
        </div>
      </div>
      <div>
        {content.split('\n').map((text) => (
          <p key={text} className="mb-2">
            {text}
          </p>
        ))}
      </div>
      {reference.content.length > 300 ? (
        <Button variant="secondary" onClick={clickHandler}>
          {expanded ? 'Read Less' : 'Read More'}
        </Button>
      ) : null}
    </li>
  );
};

export const References: FC = () => {
  return (
    <PortfolioSection title="References" Icon={ChatIcon}>
      <ul role="list" className="divide-y divide-gray-100">
        {references.map((reference) => (
          <Reference reference={reference} key={reference.author} />
        ))}
      </ul>
    </PortfolioSection>
  );
};
