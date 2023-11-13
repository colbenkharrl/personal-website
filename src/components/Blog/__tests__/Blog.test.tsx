import { render, screen } from '@testing-library/react';
import { Blog } from '../';
import meta from '../__stories__/Blog.stories';

it('Blog matches snapshot (regression test)', () => {
  render(<Blog {...meta.args} />);
  expect(screen.getByTestId('Card')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
