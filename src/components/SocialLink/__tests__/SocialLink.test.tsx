import { render, screen } from '@testing-library/react';
import * as stories from '../__stories__/SocialLink.stories';
import { composeStories } from '@storybook/react';

const { Basic } = composeStories(stories);

it('SocialLink matches snapshot (regression test)', () => {
  render(<Basic data-testid="SocialLink" />);

  expect(screen.getByTestId('SocialLink')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
