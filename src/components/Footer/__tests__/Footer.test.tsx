import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import * as stories from '../__stories__/Footer.stories';
import { composeStories } from '@storybook/react';

const { Basic } = composeStories(stories);

jest.useFakeTimers();

it('Footer matches snapshot (regression test)', () => {
  render(<Basic />);
  expect(screen.getByTestId('Footer')).toMatchSnapshot(
    'Full component snapshot.',
  );
});

it('should close snackbar', async () => {
  render(<Basic />);

  fireEvent.click(screen.getByTestId('SnackBar-close-icon'));

  act(() => {
    jest.advanceTimersByTime(100000);
  });

  await waitFor(() =>
    expect(screen.queryByTestId('SnackBar-close-icon')).toBeNull(),
  );
});
