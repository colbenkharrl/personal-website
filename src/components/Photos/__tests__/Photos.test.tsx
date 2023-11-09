import { render, screen } from '@testing-library/react';
import { Photos } from '../';

it('Photos matches snapshot (regression test)', () => {
  render(<Photos data-testid="Photos" />);
  expect(screen.getByTestId('Photos')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
