import { type Metadata } from 'next';

import { SimpleLayout } from '@/components/SimpleLayout';
import { getAllBlogs } from '@/util/blogs';
import { Blog } from '@/components/Blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Sharing my thoughts, ideas, and experiences.',
};

export default async function BlogsIndex() {
  const blogs = await getAllBlogs();

  return (
    <SimpleLayout
      title="Sharing my thoughts, ideas, and experiences."
      intro="I sometimes write down my ideas or document my experiences as I navigate my way through my personal and professional life."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex w-full flex-col space-y-16">
          {blogs.map((blog) => (
            <Blog key={blog.slug} blog={blog} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  );
}
