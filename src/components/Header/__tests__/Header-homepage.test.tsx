import { render, screen } from '@testing-library/react';
import { Header } from '../';

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));
jest.mock('../../Avatar', () => ({
  Avatar: () => <p>Avatar</p>,
}));
jest.mock('../../AvatarContainer', () => ({
  AvatarContainer: (props: object) => <p {...props}>AvatarContainer</p>,
}));
jest.mock('../../MobileNavigation', () => ({
  MobileNavigation: () => <p>MobileNavigation</p>,
}));
jest.mock('../../DesktopNavigation', () => ({
  DesktopNavigation: () => <p>DesktopNavigation</p>,
}));

it('Header matches snapshot (homepage) (regression test)', () => {
  render(<Header />);

  expect(screen.getByTestId('Header')).toMatchSnapshot(
    'Full component snapshot.',
  );
});

it('Header renders special avatar on homepage', () => {
  render(<Header />);

  screen.getByTestId('Header-home-avatar');
});
