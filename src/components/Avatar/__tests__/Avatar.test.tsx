import { render, screen } from '@testing-library/react';
import * as stories from '../__stories__/Avatar.stories';
import { composeStories } from '@storybook/react';

const { Basic, Large } = composeStories(stories);

it('Avatar matches snapshot (regression test)', () => {
  render(
    <div data-testid="Avatar">
      <Basic />
      <Large />
    </div>,
  );
  expect(screen.getByTestId('Avatar')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
