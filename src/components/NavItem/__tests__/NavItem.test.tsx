import { render, screen } from '@testing-library/react';
import { NavItem } from '../';

it('NavItem matches snapshot (regression test)', () => {
  render(<NavItem href="https://www.example.com">I am a link.</NavItem>);
  expect(screen.getByTestId('NavItem')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
