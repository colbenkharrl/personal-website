import { render, screen } from '@testing-library/react';
import { Skills } from '../';

it('Skills matches snapshot (regression test)', () => {
  render(<Skills />);
  expect(screen.getByTestId('Skills')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
