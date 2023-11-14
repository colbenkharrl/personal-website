import { fireEvent, render, screen } from '@testing-library/react';
import * as stories from '../__stories__/ThemeToggle.stories';
import { composeStories } from '@storybook/react';

const { Basic } = composeStories(stories);

it('ThemeToggle matches snapshot (default) (regression test)', async () => {
  render(<Basic />);

  expect(screen.getByTestId('ThemeToggle')).toMatchSnapshot(
    'Full component snapshot.',
  );
});

it('ThemeToggle matches snapshot (toggled) (regression test)', async () => {
  render(<Basic />);

  fireEvent.click(screen.getByTestId('ThemeToggle'));

  expect(screen.getByTestId('ThemeToggle')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
