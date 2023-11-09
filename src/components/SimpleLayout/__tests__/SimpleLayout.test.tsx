import { render, screen } from '@testing-library/react';
import { SimpleLayout } from '../';

it('SimpleLayout matches snapshot (regression test)', () => {
  render(
    <SimpleLayout title="Test title." intro="Test intro.">
      Text.
    </SimpleLayout>,
  );
  expect(screen.getByTestId('Container')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
