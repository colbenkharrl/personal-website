import { render, screen } from '@testing-library/react';
import * as stories from '../__stories__/Section.stories';
import { composeStories } from '@storybook/react';

const { Basic } = composeStories(stories);

it('Section matches snapshot (regression test)', () => {
  render(<Basic />);
  expect(screen.getByTestId('Section')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
