import { render, screen } from '@testing-library/react';
import * as stories from '../__stories__/NavItem.stories';
import { composeStories } from '@storybook/react';

const { Basic } = composeStories(stories);

it('NavItem matches snapshot (regression test)', () => {
  render(<Basic />);
  expect(screen.getByTestId('NavItem')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
