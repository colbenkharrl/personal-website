import { render, screen } from '@testing-library/react';
import * as stories from '../__stories__/PortfolioSection.stories';
import { composeStories } from '@storybook/react';

const { Basic } = composeStories(stories);

it('PortfolioSection matches snapshot (regression test)', () => {
  render(<Basic />);
  expect(screen.getByTestId('PortfolioSection')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
