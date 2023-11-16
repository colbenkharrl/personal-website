import { fireEvent, render, screen } from '@testing-library/react';
import * as stories from '../__stories__/References.stories';
import { composeStories } from '@storybook/react';

const { Basic } = composeStories(stories);

it('References matches snapshot (regression test)', () => {
  render(<Basic />);
  expect(screen.getByTestId('PortfolioSection')).toMatchSnapshot(
    'Full component snapshot.',
  );
});

it('expands the text when show more and reduces text when show less', () => {
  render(<Basic />);

  expect(
    screen.queryByText(
      "I'm very impressed with Matt, and give him my strongest recommendation for roles which require intelligence, persistence and a positive attitude.",
    ),
  ).toBeNull();

  fireEvent.click(screen.getByText('Read More'));

  screen.getByText(
    "I'm very impressed with Matt, and give him my strongest recommendation for roles which require intelligence, persistence and a positive attitude.",
  );

  fireEvent.click(screen.getByText('Read Less'));

  expect(
    screen.queryByText(
      "I'm very impressed with Matt, and give him my strongest recommendation for roles which require intelligence, persistence and a positive attitude.",
    ),
  ).toBeNull();
});
