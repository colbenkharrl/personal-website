import { render, screen } from '@testing-library/react';
import * as stories from '../__stories__/Photos.stories';
import { composeStories } from '@storybook/react';

const { Basic } = composeStories(stories);

it('Photos matches snapshot (regression test)', () => {
  render(<Basic data-testid="Photos" />);
  expect(screen.getByTestId('Photos')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
