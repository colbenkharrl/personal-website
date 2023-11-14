import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from '@testing-library/react';
import * as stories from '../__stories__/SnackBar.stories';
import { composeStories } from '@storybook/react';

const { Basic, OnClose, CloseMilliseconds } = composeStories(stories);

jest.useFakeTimers();

it('SnackBar matches snapshot (regression test)', () => {
  render(<Basic data-testid="SnackBar" />);
  expect(screen.getAllByTestId('SnackBar')[0]).toMatchSnapshot(
    'Full component snapshot.',
  );
});

it('should execute onClick prop when clicked', async () => {
  const spy = jest.fn();

  render(<OnClose data-testid="SnackBar" onClose={spy} />);

  fireEvent.click(screen.getByTestId('SnackBar-close-icon'));

  await waitFor(() => expect(spy).toHaveBeenCalledTimes(1));
});

it('should close snackbar after closeMs', async () => {
  render(<CloseMilliseconds />);

  act(() => {
    jest.advanceTimersByTime(100000);
  });

  await waitFor(() =>
    expect(screen.queryByTestId('SnackBar-close-icon')).toBeNull(),
  );
});
