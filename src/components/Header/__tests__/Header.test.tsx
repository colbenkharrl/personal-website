import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from '../__stories__/Header.stories';

const { Homepage, NonHomepage } = composeStories(stories);

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
  render(<Homepage />);

  expect(screen.getByTestId('Header')).toMatchSnapshot(
    'Full component snapshot.',
  );
});

it('Header renders special avatar on homepage', () => {
  render(<Homepage />);

  screen.getByTestId('Header-home-avatar');
});

it('Header matches snapshot (non-homepage) (regression test)', () => {
  render(<NonHomepage />);
  expect(screen.getByTestId('Header')).toMatchSnapshot(
    'Full component snapshot.',
  );
});

it("Header doesn't renders special avatar on non-homepage", () => {
  render(<NonHomepage />);

  expect(screen.queryByTestId('Header-home-avatar')).toBeNull();
  screen.getByTestId('Header-non-home-avatar');
});
