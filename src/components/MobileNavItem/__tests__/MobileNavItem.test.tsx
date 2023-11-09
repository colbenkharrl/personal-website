import { render, screen } from '@testing-library/react';
import { MobileNavItem } from '../';
import { Popover } from '@headlessui/react';

it('MobileNavItem matches snapshot (regression test)', () => {
  render(
    <Popover>
      <MobileNavItem href="https://www.example.com">I am a link.</MobileNavItem>
    </Popover>,
  );
  expect(screen.getByTestId('MobileNavItem')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
