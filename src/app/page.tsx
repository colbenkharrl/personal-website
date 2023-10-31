import { Article } from '@/components/Article';
import { Container } from '@/components/Container';
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/Icons';
import { Newsletter } from '@/components/Newsletter';
import { Photos } from '@/components/Photos';
import { Resume } from '@/components/Resume';
import { SocialLink } from '@/components/SocialLink';
import { getAllArticles } from '@/util/articles';

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4);

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software engineer, bike racer, and father.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            To be completed.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://instagram.com/matt.kharrl/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/colbenkharrl/"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/mattkharrl/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}
