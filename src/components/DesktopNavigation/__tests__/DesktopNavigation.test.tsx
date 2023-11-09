import { render, screen } from '@testing-library/react';
import { DesktopNavigation } from '../';

jest.mock('../../NavItem', () => ({
  NavItem: () => <p>NavItem</p>,
}));

// mock useRouter
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

it('DesktopNavigation matches snapshot (regression test)', async () => {
  render(<DesktopNavigation data-testid="DesktopNavigation" />);

  expect(screen.getByTestId('DesktopNavigation')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
