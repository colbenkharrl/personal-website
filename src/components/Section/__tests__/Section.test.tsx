import { render, screen } from '@testing-library/react';
import { Section } from '../';

it('Section matches snapshot (regression test)', () => {
  render(<Section title="Test title.">Text.</Section>);
  expect(screen.getByTestId('Section')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
