import { render, screen } from '@testing-library/react';
import { Container } from '../';
import meta from '../__stories__/Container.stories';

it('Container matches snapshot (regression test)', () => {
  render(<Container {...meta.args} />);

  screen.getByText('This is some content.');

  expect(screen.getByTestId('Container')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
