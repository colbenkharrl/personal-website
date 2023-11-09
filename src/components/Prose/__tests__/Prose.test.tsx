import { render, screen } from '@testing-library/react';
import { Prose } from '../';

it('Prose matches snapshot (regression test)', () => {
  render(<Prose data-testid="Prose">Text.</Prose>);
  expect(screen.getByTestId('Prose')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
