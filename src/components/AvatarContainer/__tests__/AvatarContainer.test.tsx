import { render, screen } from '@testing-library/react';
import { AvatarContainer } from '../';
import { Basic } from '../__stories__/AvatarContainer.stories';

it('AvatarContainer matches snapshot (regression test)', () => {
  render(<AvatarContainer {...Basic.args} data-testid="AvatarContainer" />);
  expect(screen.getByTestId('AvatarContainer')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
