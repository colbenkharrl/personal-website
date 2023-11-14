import { render, screen } from '@testing-library/react';
import * as stories from '../__stories__/SimpleLayout.stories';
import { composeStories } from '@storybook/react';

const { Basic } = composeStories(stories);

it('SimpleLayout matches snapshot (regression test)', () => {
  render(<Basic />);
  expect(screen.getByTestId('Container')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
