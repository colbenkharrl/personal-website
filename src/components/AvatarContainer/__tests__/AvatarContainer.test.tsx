import { render, screen } from '@testing-library/react';
import * as stories from '../__stories__/AvatarContainer.stories';
import { composeStories } from '@storybook/react';

const { Basic } = composeStories(stories);

it('AvatarContainer matches snapshot (regression test)', () => {
  render(<Basic data-testid="AvatarContainer" />);
  expect(screen.getByTestId('AvatarContainer')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
