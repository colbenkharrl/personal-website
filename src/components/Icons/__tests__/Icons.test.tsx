import { render, screen } from '@testing-library/react';
import * as stories from '../__stories__/Icons.stories';
import { composeStories } from '@storybook/react';

const { Basic } = composeStories(stories);

it('Icons matches snapshot (regression test)', () => {
  render(<Basic />);

  expect(screen.getByTestId('Icons')).toMatchSnapshot(
    "'Full component snapshot.'",
  );
});
