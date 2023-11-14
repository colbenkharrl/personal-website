import { fireEvent, render, screen } from '@testing-library/react';
import * as stories from '../__stories__/MobileNavigation.stories';
import { composeStories } from '@storybook/react';

const { Basic } = composeStories(stories);

jest.mock('../../MobileNavItem', () => ({
  MobileNavItem: () => <p>MobileNavItem</p>,
}));

it('MobileNavigation matches snapshot while closed (regression test)', async () => {
  render(<Basic data-testid="MobileNavigation" />);

  expect(screen.getByTestId('MobileNavigation')).toMatchSnapshot(
    'Full component snapshot.',
  );
});

it('MobileNavigation matches snapshot while opened (regression test)', async () => {
  render(<Basic data-testid="MobileNavigation" />);

  fireEvent.click(screen.getByTestId('MobileNavigation-button'));

  expect(screen.getByTestId('MobileNavigation')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
