import { type Metadata } from 'next';

import { SimpleLayout } from '@/components/SimpleLayout';
import { getAllBlogs } from '@/util/blogs';
import { Blog } from '@/components/Blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'My scattered thoughts about random things.',
};

export default async function BlogsIndex() {
  const blogs = await getAllBlogs();

  return (
    <SimpleLayout
      title="My scattered thoughts about random things."
      intro="I sometimes write down my ideas or document my experiences as I Roomba my way through my professional and personal life. A subset of those writings end up being published here for likely no one to enjoy. So, enjoy!"
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {blogs.map((blog) => (
            <Blog key={blog.slug} blog={blog} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  );
}
