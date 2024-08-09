import { type BlogWithSlug } from '@/util/blogs';
import { Card } from '@/components/Card';
import { formatDate } from '@/util/formatDate';
import Image from 'next/image';

export type BlogProps = {
  /**
   * Blog object specifying component content.
   */
  blog: BlogWithSlug;
};

export function Blog({ blog }: BlogProps) {
  return (
    <Card as="article" className="flex flex-col sm:flex-row">
      <Image
        src={blog.opengraphImage}
        alt=""
        className="mb-6 aspect-video w-full shrink-0 grow-0 rounded-lg object-cover sm:mb-0 sm:mr-6 sm:w-72"
      />
      <div className="flex flex-col">
        <Card.Title href={`/blog/${blog.slug}`}>{blog.title}</Card.Title>
        <Card.Eyebrow as="time" dateTime={blog.date} decorate>
          {formatDate(blog.date)}
        </Card.Eyebrow>
        <Card.Description>{blog.description}</Card.Description>
        <Card.CTA>Read blog post</Card.CTA>
      </div>
    </Card>
  );
}
