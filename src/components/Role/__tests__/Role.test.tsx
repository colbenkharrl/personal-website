import { render, screen } from '@testing-library/react';
import * as stories from '../__stories__/Role.stories';
import { composeStories } from '@storybook/react';

const { Basic } = composeStories(stories);

it('Role matches snapshot (regression test)', () => {
  render(<Basic />);
  expect(screen.getByTestId('Role')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
