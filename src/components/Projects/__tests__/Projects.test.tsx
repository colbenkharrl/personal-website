import { render, screen } from '@testing-library/react';
import * as stories from '../__stories__/Projects.stories';
import { composeStories } from '@storybook/react';

const { Basic } = composeStories(stories);

it('Projects matches snapshot (regression test)', () => {
  render(<Basic />);
  expect(screen.getByTestId('Projects')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
