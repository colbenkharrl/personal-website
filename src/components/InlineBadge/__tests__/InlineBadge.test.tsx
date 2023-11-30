import { render, screen } from '@testing-library/react';
import * as stories from '../__stories__/InlineBadge.stories';
import { composeStories } from '@storybook/react';

const { Basic } = composeStories(stories);

it('InlineBadge matches snapshot (regression test)', () => {
  render(<Basic data-testid="InlineBadge" />);
  expect(screen.getByTestId('InlineBadge')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
