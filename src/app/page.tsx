import { Container } from '@/components/Container';
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  StravaIcon,
} from '@/components/Icons';
import { InlineBadge } from '@/components/InlineBadge';
import { Photos } from '@/components/Photos';
import { SocialLink } from '@/components/SocialLink';
import Link from 'next/link';

export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Engineer
            <span className="text-orange-500 dark:text-orange-400">.</span>{' '}
            Athlete
            <span className="text-orange-500">.</span> Dad
            <span className="text-orange-500">.</span>
          </h1>
          <Link href="/portfolio">
            <InlineBadge className="mt-8">
              <span className="relative mr-1.5 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-300 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-400"></span>
              </span>
              <div className="flex items-center justify-center">
                <p className="whitespace-nowrap">
                  Searching For Opportunities{' '}
                  <span aria-hidden="true" className="ml-1">
                    &rarr;
                  </span>
                </p>
              </div>
            </InlineBadge>
          </Link>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            At any given moment I am either developing software, racing my bike,
            or spending time with my family. Passionate about exploring the
            world and the many experiences that life has to offer.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://linkedin.com/in/mattkharrl/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://github.com/colbenkharrl/"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://instagram.com/matt.kharrl/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://www.strava.com/athletes/41283083"
              aria-label="Follow on Strava"
              icon={StravaIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
    </>
  );
}
