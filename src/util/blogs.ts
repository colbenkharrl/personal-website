import glob from 'fast-glob';
import { StaticImageData } from 'next/image';

interface Blog {
  title: string;
  description: string;
  author: string;
  date: string;
}

export interface BlogWithSlug extends Blog {
  slug: string;
  opengraphImage: StaticImageData;
}

async function importBlog(blogFilename: string): Promise<BlogWithSlug> {
  const { blog } = (await import(`../app/blog/${blogFilename}`)) as {
    default: React.ComponentType;
    blog: Blog;
  };

  const slug = blogFilename.replace(/(\/page)?\.mdx$/, '');

  const { default: opengraphImage } = (await import(
    `../app/blog/${slug}/opengraph-image.png`
  )) as {
    default: StaticImageData;
  };

  return {
    slug,
    opengraphImage,
    ...blog,
  };
}

export async function getAllBlogs() {
  const blogFilenames = await glob('*/page.mdx', {
    cwd: './src/app/blog',
  });

  const blogs = await Promise.all(blogFilenames.map(importBlog));

  return blogs.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
