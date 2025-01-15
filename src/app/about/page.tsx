import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { Container } from '@/components/Container';
import {
  BriefcaseIcon,
  GitHubIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  StravaIcon,
  TrophyIcon,
} from '@/components/Icons';
import portraitImage from '@/images/portrait.jpg';
import { IconLink, IconLinkProps } from '@/components/IconLink';
import { InlineBadge } from '@/components/InlineBadge';

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-yellow-500 dark:text-zinc-200 dark:hover:text-yellow-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-yellow-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

export const metadata: Metadata = {
  title: 'About',
  description: 'I’m Matt Kharrl: engineer, athlete, and dad.',
};

const raceResults: IconLinkProps[] = [
  {
    text: '1st - AZ TTT Championship (2x)',
    Icon: TrophyIcon,
    href: 'https://legacy.usacycling.org/results/index.php?permit=2023-9995',
  },
  {
    text: '1st - David Gomez Road Race',
    Icon: TrophyIcon,
    href: 'https://legacy.usacycling.org/results/index.php?permit=2023-9543',
  },
  {
    text: '1st - Flapjack Flats ITT',
    Icon: TrophyIcon,
    href: 'https://legacy.usacycling.org/results/index.php?permit=2023-9336',
  },
  {
    text: '2nd - AZ ITT Championship',
    Icon: TrophyIcon,
    href: 'https://legacy.usacycling.org/results/index.php?permit=2023-10667',
  },
  {
    text: '2nd - AZ Road Race Championship',
    Icon: TrophyIcon,
    href: 'https://results.raceroster.com/v2/en-US/results/vrav9hjwkkbdtfem/results',
  },
  {
    text: 'Biked the Circumference of Earth',
    Icon: GlobeIcon,
    href: 'https://www.strava.com/athletes/41283083',
  },
];

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
            I’m Matt Kharrl: <br />{' '}
            <span className="text-yellow-500 dark:text-yellow-400">
              engineer
            </span>
            , <span className="text-sky-500 dark:text-sky-400">athlete</span>,
            and{' '}
            <span className="text-emerald-500 dark:text-emerald-400">dad</span>.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I like to approach everything I do in life with genuine curiosity
              and a sense of adventure. If I had to boil it down, however, my
              passions would fall into these three categories.
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
              I build{' '}
              <span className="text-yellow-500 dark:text-yellow-400">
                software
              </span>
              .
            </h2>
            <p>
              I knew I wanted to spend my life immersed in technology by the age
              of 15. My journey since then has taken me from building websites
              for friends to studying computer science at Arizona State
              University to building web applications for some of the largest
              technology companies on the planet to building and launching a
              startup company in Silicon Valley from the ground up. Every
              experience has taught me valuable lessons about building efficient
              and practical software at every scale. While I have worked in many
              roles across the stack and development lifecycle, I find myself
              the happiest when creating web experiences as close to end users
              as possible.
            </p>
            <Link href="/portfolio">
              <InlineBadge className="mt-4">
                <BriefcaseIcon
                  className="mr-1.5 h-5 w-5"
                  pathProps={{
                    className: 'stroke-yellow-600 dark:stroke-yellow-400',
                  }}
                />
                <div className="flex items-center justify-center">
                  <p className="whitespace-nowrap">
                    View My Portfolio{' '}
                    <span className="ml-1" aria-hidden="true">
                      &rarr;
                    </span>
                  </p>
                </div>
              </InlineBadge>
            </Link>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
              I race{' '}
              <span className="text-sky-500 dark:text-sky-400">bikes</span>.
            </h2>
            <p>
              Bikes and I go way back. It&apos;s been a long and lovely
              relationship, from cruising around suburban neighborhoods as a kid
              to learning tricks on BMX bikes as a teen to skidding to class on
              fixed-gear bikes in college to exploring nature with a camera
              strapped to my back in California to lately venturing into the
              world of racing and growing as an athlete in the Arizona cycling
              community. Bikes strengthen my bond with nature, my connection
              with my community, and my understanding of myself. I currently
              race with Blitz Racing and spend much of my free time training and
              riding with teammates and friends.
            </p>
            <h2 className="text-md sm:text-md font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              Recent accomplishments:
            </h2>
            <ol>
              {raceResults.map((result) => (
                <li key={result.text}>
                  <IconLink
                    {...result}
                    className="stroke-sky-500 hover:text-sky-500 dark:stroke-sky-400 dark:hover:text-sky-400"
                  />
                </li>
              ))}
            </ol>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
              I love my{' '}
              <span className="text-emerald-500 dark:text-emerald-400">
                family
              </span>
              .
            </h2>
            <p>
              I moved back to Arizona in 2020 to follow the love of my life. We
              have since been married, and in 2023, we brought our son into the
              world. My duty and love of being a husband and father motivates
              everything I do, and I honestly don&apos;t know where I would be
              without them. My ultimate goals are to see the world with my
              family and to nourish a life where everyone feels like they have
              the environment and encouragement to follow their dreams. That
              said, we don&apos;t take ourselves too seriously and spend most of
              our time laughing. I aspire to master the art of dad jokes at the
              expense of my wife and son&apos;s sanity.
            </p>
            <IconLink
              Icon={InstagramIcon}
              text="Keep up with us on Instagram."
              href="https://www.instagram.com/matt.kharrl/"
              className="fill-emerald-500 hover:text-emerald-500 dark:fill-emerald-400 dark:hover:text-emerald-400"
            />
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://linkedin.com/in/mattkharrl/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="https://github.com/colbenkharrl"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/matt.kharrl/"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://www.strava.com/athletes/41283083"
              icon={StravaIcon}
              className="mt-4"
            >
              Follow on Strava
            </SocialLink>
            <SocialLink
              href="mailto:matt@kharrl.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              matt@kharrl.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  );
}
