import { render, screen } from '@testing-library/react';
import * as stories from '../__stories__/Blog.stories';
import { composeStories } from '@storybook/react';

const { Basic } = composeStories(stories);

it('Blog matches snapshot (regression test)', () => {
  render(<Basic />);
  expect(screen.getByTestId('Card')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
