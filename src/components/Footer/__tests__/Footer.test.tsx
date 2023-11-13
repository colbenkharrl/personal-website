import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { Footer } from '../';

jest.useFakeTimers();

it('Footer matches snapshot (regression test)', () => {
  render(<Footer />);
  expect(screen.getByTestId('Footer')).toMatchSnapshot(
    'Full component snapshot.',
  );
});

it('should close snackbar', async () => {
  render(<Footer />);

  fireEvent.click(screen.getByTestId('SnackBar-close-icon'));

  act(() => {
    jest.advanceTimersByTime(100000);
  });

  await waitFor(() =>
    expect(screen.queryByTestId('SnackBar-close-icon')).toBeNull(),
  );
});
