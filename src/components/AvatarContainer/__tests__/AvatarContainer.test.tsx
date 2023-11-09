import { render, screen } from '@testing-library/react';
import { AvatarContainer } from '../';

it('AvatarContainer matches snapshot (regression test)', () => {
  render(<AvatarContainer data-testid="AvatarContainer" />);
  expect(screen.getByTestId('AvatarContainer')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
