import { render, screen } from '@testing-library/react';
import { Projects } from '../';

it('Projects matches snapshot (regression test)', () => {
  render(<Projects />);
  expect(screen.getByTestId('Projects')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
