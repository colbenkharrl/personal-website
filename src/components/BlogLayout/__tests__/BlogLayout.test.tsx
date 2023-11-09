import { render, screen } from '@testing-library/react';
import { BlogLayout } from '../';
import { BlogWithSlug } from '@/util/blogs';

// mock useRouter
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

it('BlogLayout matches snapshot (regression test)', async () => {
  const testBlog: BlogWithSlug = {
    slug: 'test-blog',
    title: 'Test BlogLayout',
    description: 'Test blog description.',
    author: 'Matt Kharrl',
    date: '2023-11-09',
  };

  const blogContent = 'Test blog content';

  render(
    <BlogLayout blog={testBlog}>
      <p>{blogContent}</p>
    </BlogLayout>,
  );

  await screen.findByText(blogContent);

  expect(screen.getByTestId('Container')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
