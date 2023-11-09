import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeToggle } from '../';

it('ThemeToggle matches snapshot (default) (regression test)', async () => {
  render(<ThemeToggle />);

  expect(screen.getByTestId('ThemeToggle')).toMatchSnapshot(
    'Full component snapshot.',
  );
});

it('ThemeToggle matches snapshot (toggled) (regression test)', async () => {
  render(<ThemeToggle data-testid="ThemeToggle" />);

  fireEvent.click(screen.getByTestId('ThemeToggle'));

  expect(screen.getByTestId('ThemeToggle')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
