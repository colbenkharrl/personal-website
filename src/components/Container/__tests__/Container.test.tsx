import { render, screen } from '@testing-library/react';
import { Container } from '../';

it('Container matches snapshot (regression test)', () => {
  render(<Container>Contents</Container>);

  screen.getByText('Contents');

  expect(screen.getByTestId('Container')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
