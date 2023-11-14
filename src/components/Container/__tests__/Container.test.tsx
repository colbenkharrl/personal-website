import { render, screen } from '@testing-library/react';
import * as stories from '../__stories__/Container.stories';
import { composeStories } from '@storybook/react';

const { Basic } = composeStories(stories);

it('Container matches snapshot (regression test)', () => {
  render(<Basic />);

  screen.getByText('This is some content.');

  expect(screen.getByTestId('Container')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
