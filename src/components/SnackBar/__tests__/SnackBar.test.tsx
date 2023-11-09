import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { SnackBar } from '../';

it('SnackBar matches snapshot (regression test)', () => {
  render(<SnackBar data-testid="SnackBar">I am a button.</SnackBar>);
  expect(screen.getByTestId('SnackBar')).toMatchSnapshot(
    'Full component snapshot.',
  );
});

it('should execute onClick prop when clicked', async () => {
  const spy = jest.fn();

  render(<SnackBar data-testid="SnackBar" onClose={spy} />);

  fireEvent.click(screen.getByTestId('SnackBar-close-icon'));

  await waitFor(() => expect(spy).toHaveBeenCalledTimes(1));
});
