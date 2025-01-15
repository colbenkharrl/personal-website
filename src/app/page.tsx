import { Container } from '@/components/Container';
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  StravaIcon,
} from '@/components/Icons';
import { Photos } from '@/components/Photos';
import { SocialLink } from '@/components/SocialLink';

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Engineer
            <span className="text-amber-500 dark:text-amber-400">.</span>{' '}
            Athlete
            <span className="text-amber-500">.</span> Dad
            <span className="text-amber-500">.</span>
          </h1>
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
