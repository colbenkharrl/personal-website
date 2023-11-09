import { type BlogWithSlug } from '@/util/blogs';
import { Card } from '@/components/Card';
import { formatDate } from '@/util/formatDate';

export type BlogProps = { blog: BlogWithSlug };

export function Blog({ blog }: BlogProps) {
  return (
    <Card as="article">
      <Card.Title href={`/blog/${blog.slug}`}>{blog.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={blog.date} decorate>
        {formatDate(blog.date)}
      </Card.Eyebrow>
      <Card.Description>{blog.description}</Card.Description>
      <Card.Cta>Read blog post</Card.Cta>
    </Card>
  );
}
