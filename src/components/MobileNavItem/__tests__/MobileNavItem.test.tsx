import { render, screen } from '@testing-library/react';
import * as stories from '../__stories__/MobileNavItem.stories';
import { composeStories } from '@storybook/react';
import { Popover } from '@headlessui/react';

const { Basic } = composeStories(stories);

it('MobileNavItem matches snapshot (regression test)', () => {
  render(
    <Popover>
      <Basic />
    </Popover>,
  );
  expect(screen.getByTestId('MobileNavItem')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
