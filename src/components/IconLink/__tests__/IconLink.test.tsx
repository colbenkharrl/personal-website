import { render, screen } from '@testing-library/react';
import * as stories from '../__stories__/IconLink.stories';
import { composeStories } from '@storybook/react';

const { Basic } = composeStories(stories);

it('IconLink matches snapshot (regression test)', () => {
  render(<Basic data-testid="IconLink" />);
  expect(screen.getByTestId('IconLink')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
