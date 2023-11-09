import { render, screen } from '@testing-library/react';
import { Blog } from '../';
import { BlogWithSlug } from '@/util/blogs';

it('Blog matches snapshot (regression test)', () => {
  const testBlog: BlogWithSlug = {
    slug: 'test-blog',
    title: 'Test Blog',
    description: 'Test blog description.',
    author: 'Matt Kharrl',
    date: '2023-11-09',
  };

  render(<Blog blog={testBlog} />);
  expect(screen.getByTestId('Card')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
