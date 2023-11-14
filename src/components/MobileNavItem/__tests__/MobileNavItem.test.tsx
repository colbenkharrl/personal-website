import { render, screen } from '@testing-library/react';
import * as stories from '../__stories__/MobileNavItem.stories';
import { composeStories } from '@storybook/react';

const { Basic } = composeStories(stories);

it('MobileNavItem matches snapshot (regression test)', () => {
  render(<Basic />);
  expect(screen.getByTestId('MobileNavItem')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
