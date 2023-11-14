import { render, screen } from '@testing-library/react';
import * as stories from '../__stories__/Skills.stories';
import { composeStories } from '@storybook/react';

const { Basic } = composeStories(stories);

it('Skills matches snapshot (regression test)', () => {
  render(<Basic />);
  expect(screen.getByTestId('Skills')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
