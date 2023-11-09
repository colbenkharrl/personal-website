import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import { MobileNavigation } from '../';

// mock useRouter
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));
jest.mock('../../MobileNavItem', () => ({
  MobileNavItem: () => <p>MobileNavItem</p>,
}));

it('MobileNavigation matches snapshot while closed (regression test)', async () => {
  render(<MobileNavigation data-testid="MobileNavigation" />);

  expect(screen.getByTestId('MobileNavigation')).toMatchSnapshot(
    'Full component snapshot.',
  );
});

it('MobileNavigation matches snapshot while opened (regression test)', async () => {
  render(<MobileNavigation data-testid="MobileNavigation" />);

  fireEvent.click(screen.getByTestId('MobileNavigation-button'));

  expect(screen.getByTestId('MobileNavigation')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
