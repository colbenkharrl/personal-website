import { render, screen } from '@testing-library/react';
import * as stories from '../__stories__/Prose.stories';
import { composeStories } from '@storybook/react';

const { Basic } = composeStories(stories);

it('Prose matches snapshot (regression test)', () => {
  render(<Basic data-testid="Prose" />);
  expect(screen.getByTestId('Prose')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
