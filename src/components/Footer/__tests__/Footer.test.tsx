import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Footer } from '../';

it('Footer matches snapshot (regression test)', () => {
  render(<Footer />);
  expect(screen.getByTestId('Footer')).toMatchSnapshot(
    'Full component snapshot.',
  );
});

it('should close snackbar', async () => {
  render(<Footer />);

  fireEvent.click(screen.getByTestId('SnackBar-close-icon'));

  jest.advanceTimersByTime(100000);

  await waitFor(() =>
    expect(screen.queryByTestId('SnackBar-close-icon')).toBeNull(),
  );
});
