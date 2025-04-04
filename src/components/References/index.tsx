'use client';

import { ChatIcon } from '@/components/Icons';
import { PortfolioSection } from '../PortfolioSection';
import { FC, useCallback, useMemo, useState } from 'react';
import { Button } from '../Button';
import Image, { StaticImageData } from 'next/image';
import heatherAvatar from '@/images/avatars/heather_doshay.jpg';
import anthonyAvatar from '@/images/avatars/anthony_micara.jpg';
import justinAvatar from '@/images/avatars/justin_wayne.jpg';
import grantAvatar from '@/images/avatars/grant_redfearn.jpg';
import nateAvatar from '@/images/avatars/nate_kharrl.jpg';
import deanAvatar from '@/images/avatars/dean_weinert.jpg';
import dipockAvatar from '@/images/avatars/dipock_das.jpg';
import adamAvatar from '@/images/avatars/adam_kirsh.jpg';
import samyakAvatar from '@/images/avatars/samyak_singh.jpg';

export type Reference = {
  author: string;
  title: string;
  company: string;
  authorLinkedIn: string;
  authorAvatarURL: StaticImageData;
  companyLinkedIn: string;
  content: string;
  date: Date;
};

export const references: Reference[] = [
  {
    author: 'Samyak Singh',
    title: 'Engineering Manager',
    company: 'Notion',
    authorLinkedIn: 'https://www.linkedin.com/in/samyaksingh/',
    companyLinkedIn: 'https://www.linkedin.com/company/notionhq/',
    content:
      "I was Matt's mentor at Atlassian and we eventually became close friends. Matt is a builder at heart: a product and team builder with experience working at both early-stage startups and companies with billions of dollars in revenue. Matt can work effectively at different altitudes, from founders and board members to engineers and designers. \n\nDuring my time at Atlassian, Matt was always involved in business-critical projects from product reliability to significant redesigns of the Confluence app. He built systems that operated reliably even after his departure, and is still a core part of the product. His implementation literally enabled hundreds of engineers to safely ship their changes or millions of users to navigate the Confluence app. This is the type of 10x impact every team wants.\n\nMatt has always served the people around him through mentoring or collaborating. I've witnessed him steer or set product directions by effectively jamming with designers and PMs, using data and his intuition for the product. He was a trusted engineer in the team and sought after for his quality and velocity. Any organization would be very lucky to have Matt. He gets things done.",
    date: new Date('2025-04-04T12:00:00.000Z'),
    authorAvatarURL: samyakAvatar,
  },
  {
    author: 'Adam Kirsh',
    title: 'Head of Product',
    company: 'Catio',
    authorLinkedIn: 'https://www.linkedin.com/in/adam-kirsh-0b9ab67b/',
    companyLinkedIn: 'https://www.linkedin.com/company/catiotech/',
    content:
      "Matt is an engineer, product builder, and colleague whom I hope to work with again. He's somebody who zeroes in on what it takes to succeed and relentlessly pursues that. He is prolific as a developer, excellent at organizing important projects and the people involved, and possesses a great product & business sense. He's someone who gets everyone else thinking about the customer, product experience, and truly what's valuable. On top of all the professional compliments, he is a fun guy to hang out with and build with day after day. \n\nI give him my highest recommendation as a professional and hope he and I get to build together again in the future.",
    date: new Date('2025-03-31T12:00:00.000Z'),
    authorAvatarURL: adamAvatar,
  },
  {
    author: 'Dipock Das',
    title: 'Product Leader',
    company: 'Catio',
    authorLinkedIn: 'https://www.linkedin.com/in/dipock/',
    companyLinkedIn: 'https://www.linkedin.com/company/catiotech/',
    content:
      'I had the pleasure of working with Matt, and I can confidently say that he is one of the most talented, dedicated, and forward-thinking developers I’ve encountered. His ability to seamlessly blend technical expertise with modern best practices has been a major asset to our team.\n\nMatt isn’t just an exceptional full-stack engineer—he’s a proactive problem solver who consistently goes above and beyond. He doesn’t just code; he thinks strategically, ensuring that every feature he builds is not only functional but scalable and maintainable. He approaches each challenge with curiosity and a willingness to learn, always staying ahead of the curve in front-end and back-end technologies.\n\nMatt’s security expertise is second to none. He played a pivotal role in our SOC2 efforts, ensuring our systems met rigorous compliance and security standards. His ability to balance developer agility with security best practices has been invaluable to our team.\n\nBeyond his technical skills, Matt has contributed immensely to our DevOps strategy, helping build and maintain deployment pipelines that allow us to deploy and roll back with zero downtime. His efforts have made our infrastructure more resilient, scalable, and efficient.\n\nMatt doesn’t just do the work—he documents, mentors, and evangelizes best practices. He writes detailed tickets, full specifications, and blog posts, helping both our internal team and the broader community understand new concepts and innovations. His ability to communicate complex technical ideas clearly has had a lasting impact on our team’s efficiency and alignment.\n\nMatt’s ability to pick up new tasks without hesitation and his collaborative spirit make him an invaluable team member. Any organization would be lucky to have him. He’s the rare kind of engineer who excels at full-stack development, security, DevOps, and technical leadership—all while being an incredible team player.\n\nI give him my highest recommendation, and I have no doubt that he will continue to thrive and make a lasting impact wherever he goes.',
    date: new Date('2025-03-07T12:00:00.000Z'),
    authorAvatarURL: dipockAvatar,
  },
  {
    author: 'Heather Doshay',
    title: 'Partner, People + Talent',
    company: 'SignalFire',
    authorLinkedIn: 'https://www.linkedin.com/in/doshay/',
    companyLinkedIn: 'https://www.linkedin.com/company/signalfire/',
    content:
      "I worked with Matt as VP Engineering for Spec as his VC Talent Partner, and was incredibly impressed with him. He brought a great balance of kindness and discipline to hire and manage his functional area intentionally. I've been hiring engineers for about a decade and worked with hundreds of engineering organizations in that time, and his interview process was so great we shared it with other companies as a best practice model. Matt stands out to me as someone with a high degree of potential for engineering leadership, and I keenly look forward to what he does next.",
    date: new Date('2023-11-29T12:00:00.000Z'),
    authorAvatarURL: heatherAvatar,
  },
  {
    author: 'Anthony Micara',
    title: 'VP of Product Success',
    company: 'Spec',
    authorLinkedIn: 'https://www.linkedin.com/in/anthony-micara/',
    companyLinkedIn: 'https://www.linkedin.com/company/specprotected/',
    content:
      'It has been a rewarding experience working alongside Matt Kharrl for over two years at Spec, where he was the founding engineer. His evolution into a multifaceted leader was truly remarkable and a testament to his capabilities.\nMatt’s diverse skill set is a rare find and proved to be a cornerstone in our startup’s journey. As the creator of Spec’s MVP, he rapidly ascended to become the VP of Engineering. My close collaboration with Matt spanned various business areas including executive decision-making, sales engineering, delivery, customer success, and product development. His integral role across these functions was crucial to our early achievements, propelling Spec from its inception to a Series A-funded business.\nIn our venture to create a new market category, Matt adeptly handled myriad responsibilities. His leadership in recruiting, managing, and expanding the front-end, back-end, and DevOps teams was instrumental. Additionally, he established a robust InfoSec program tailored to Spec’s complex customer journey security platform. Matt’s organizational prowess shone through in laying Spec’s technical groundwork, formulating numerous processes, and generating comprehensive technical and business documentation. His commitment to fostering a positive work culture resonated with all, earning him universal respect and admiration.\nMatt Kharrl is an invaluable asset, bringing a transformative presence to any business or team. I eagerly look forward to the prospect of collaborating with him again.',
    date: new Date('2023-11-28T12:00:00.000Z'),
    authorAvatarURL: anthonyAvatar,
  },
  {
    author: 'Justin Wayne',
    title: 'Senior Software Engineer',
    company: 'Spec',
    authorLinkedIn: 'https://www.linkedin.com/in/justincwayne/',
    companyLinkedIn: 'https://www.linkedin.com/company/specprotected/',
    content:
      "As a senior engineer in Matt's organization at Spec, I've watched him excel in leadership as a technical lead, Engineering Manager, and VP of Engineering. He established the processes we needed to scale up our team, provided the vision to coordinate our efforts, nurtured a strong engineering culture, and defended that culture against considerable external strain.\nMatt is also a highly-capable engineer. He built the first iteration of a business critical SPA by himself, achieving an impressive amount of functionality in very little time. He somehow did so without sacrificing idiomatic practice or ease of maintenance, making it easy for additional engineers to onboard under his wing. The systems Matt built in the early days continue to endure as essential parts of Spec's platform.\nMatt has a knack for writing accessible and thorough documentation. Our company wiki is full of his content, ranging from decision-making templates to runbooks to the original formalization of our company values. His prolific contributions weren't just useful in their own right, but gave rise to a documentation-first culture among the entire organization. We'll continue to depend on many of his words - along with the norms he put in place - for years after his departure.\nRather than enumerate the rest of the impressive things I've seen Matt do and roles I've seen him fill, I'll speak to his impact. His engineering efforts were directly responsible for securing our initial investment and our company's success on demo stages. His superior communication and persuasive nature helped us sign our first major customers. The documentation he wrote and processes he established gave us the scaffolding we needed to scale our Engineering team. His recruitment efforts helped assemble the best team of engineers I've had the privilege to work with, and the culture he nurtured and defended made his teams proud to work together.\nMatt has a rare mind and is an all around lovely human being. I'll miss building stuff with him or under his direction, and I hope I get to do so again!",
    date: new Date('2023-11-22T12:00:00.000Z'),
    authorAvatarURL: justinAvatar,
  },
  {
    author: 'Grant Redfearn',
    title: 'Staff DevOps Engineer',
    company: 'Spec',
    authorLinkedIn: 'https://www.linkedin.com/in/gredfearn/',
    companyLinkedIn: 'https://www.linkedin.com/company/specprotected/',
    content:
      "Besides being absolutely prolific in producing process, documentation, and strategy — Matt has an innate ability to inspire. I was privileged to watch him grow a small team of senior engineers into a highly productive engineering organization with unmatched culture. Always leading by example, and tackling the hard problems head on; Matt excelled in pushing the capabilities forward while providing support to the team. Beyond his engineering ability, he is simply an outstanding human that showed up every day with his best. I can't say enough about Matt to fully convey the impact he has had on me, the team, and the organization. Because of the person he is, I know full stop he is destined to be great at whatever he sets out to do. You want him on your team.",
    date: new Date('2023-11-17T12:00:00.000Z'),
    authorAvatarURL: grantAvatar,
  },
  {
    author: 'Nate Kharrl',
    title: 'CEO',
    company: 'Spec',
    authorLinkedIn: 'https://www.linkedin.com/in/nate-kharrl/',
    companyLinkedIn: 'https://www.linkedin.com/company/specprotected/',
    content:
      "Matt was founder and engineer #1 at Spec. He's built prototypes, UX frameworks, deployment pipelines, and finished products that now serve Fortune 500 enterprises. Matt's a passionate \"all-in\" engineer who knows what it takes to prove it out, make it work, make it scale, and make it special. He's a delight to work with and his positivity makes teams around him gel better. Matt loves to specialize but is capable of supporting designers, product managers, and operations managers as needed to make projects successful.",
    date: new Date('2023-11-16T12:00:00.000Z'),
    authorAvatarURL: nateAvatar,
  },
  {
    author: 'Dean Weinert',
    title: 'VP of Product Management',
    company: 'ThreatMetrix',
    authorLinkedIn: 'https://www.linkedin.com/in/deanweinert/',
    companyLinkedIn: 'https://www.linkedin.com/company/threatmetrix/',
    content:
      "Matt fulfilled an internship at ThreatMetrix under my supervision during the summer of 2017. During that time, I developed a high regard for Matt based on the outstanding contributions he made on several high-profile projects.\nHe demonstrated that he is technically capable with a wide array of languages and concepts. He also demonstrated a desire to learn, and successfully completed several online training courses specific to the projects he was assigned.\nHe was reliable, punctual and professional in all interactions within the organization. He made many friends here and we would be delighted to invite him back at any time.\nMatt’s core responsibilities included designing, prototyping and developing a web-based visualization to aid analysts identify positive and negative behavioral patterns during manual fraud review. The project was so successful and the code was of such a high standard that we deployed it directly to our production environment where it is actively being used by thousands of customers with very positive feedback.\nThe project was finished remarkably ahead of schedule, and as a result, I assigned him a second project to develop a cross platform mobile application to aid with prototyping risk-based authentication methods. This project was also successfully delivered and will become the foundation for several initiatives we have scheduled.\nI'm very impressed with Matt, and give him my strongest recommendation for roles which require intelligence, persistence and a positive attitude.\nPlease feel free to contact me if you require additional information or perspective.",
    date: new Date('2017-10-03T12:00:00.000Z'),
    authorAvatarURL: deanAvatar,
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
      className="flex-column mb-6 text-sm text-zinc-900 dark:text-zinc-100"
      key={reference.author}
    >
      <div className="flex min-w-0 justify-between gap-x-4 py-5">
        <a
          href={reference.authorLinkedIn}
          className="flex min-w-fit items-center"
        >
          <Image
            className="h-12 w-12 flex-none rounded-full bg-gray-50"
            src={reference.authorAvatarURL}
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
          </p>
          <p className="mt-1  leading-5">
            {reference.title} at{' '}
            <a
              className="font-semibold underline"
              href={reference.companyLinkedIn}
            >
              {reference.company}
            </a>
          </p>
        </div>
      </div>
      <div>
        {content.split('\n').map((text) => (
          <p key={text} className="mb-4">
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
      <ul
        role="list"
        className="mt-4 divide-y divide-gray-200 dark:divide-gray-500"
      >
        {references.map((reference) => (
          <Reference reference={reference} key={reference.author} />
        ))}
      </ul>
    </PortfolioSection>
  );
};
