import { render, screen } from '@testing-library/react';
import * as stories from '../__stories__/DesktopNavigation.stories';
import { composeStories } from '@storybook/react';

const { Basic } = composeStories(stories);

jest.mock('../../NavItem', () => ({
  NavItem: () => <p>NavItem</p>,
}));

it('DesktopNavigation matches snapshot (regression test)', async () => {
  render(<Basic data-testid="DesktopNavigation" />);

  expect(screen.getByTestId('DesktopNavigation')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
